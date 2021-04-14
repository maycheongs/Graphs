const redis = require('redis');

const redisClient = redis.createClient();
const QUOTA = 10;
const WINDOW_SIZE = 60;

redisClient.on('error', (err) =>
  console.log(`Error creating redis Client: ${err}`)
);

module.exports = (req, res, next) => {
  const userIP = req.ip;

  redisClient
    .multi()
    //If userIP doesn't exist, set one with UUID 0, expiry WINDOW_SIZE
    .set([userIP, 0, 'EX', WINDOW_SIZE, 'NX'])
    .incr(userIP)
    .exec((err, count) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      const reqCount = count[1];
      if (reqCount > QUOTA) {
        return res.status(429).json({
          error: `Exceeded Quota of ${QUOTA} in ${WINDOW_SIZE} seconds.`,
        });
      }
      return next();
    });
};
