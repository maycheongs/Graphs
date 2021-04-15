const dotenv = require('dotenv').config();
const path = require('path');
const express = require('express');
const pg = require('pg');
const rateLimiter = require('./rateLimiter2');
console.log('pguser', process.env.PGUSER);
const app = express();
// configs come from standard PostgreSQL env vars
// https://www.postgresql.org/docs/9.6/static/libpq-envars.html
const pool = new pg.Pool();

const queryHandler = (req, res, next) => {
  pool
    .query(req.sqlQuery)
    .then((r) => {
      return res.json(r.rows || []);
    })
    .catch(next);
};

app.get('/', (req, res) => {
  res.send('Welcome to EQ Works 😎');
});

app.use(rateLimiter);
app.get(
  '/events/hourly',
  (req, res, next) => {
    req.sqlQuery = `
    SELECT date, hour, events
    FROM public.hourly_events
    ORDER BY date, hour
    LIMIT 168;
  `;
    return next();
  },
  queryHandler
);

app.get(
  '/events/daily',
  (req, res, next) => {
    req.sqlQuery = `
    SELECT date, SUM(events) AS events
    FROM public.hourly_events
    GROUP BY date
    ORDER BY date
    LIMIT 7;
  `;
    return next();
  },
  queryHandler
);

app.get(
  '/stats/hourly',
  (req, res, next) => {
    req.sqlQuery = `
    SELECT date, hour, impressions, clicks, revenue
    FROM public.hourly_stats
    ORDER BY date, hour
    LIMIT 168;
  `;
    return next();
  },
  queryHandler
);

app.get(
  '/stats/daily',
  (req, res, next) => {
    req.sqlQuery = `
    SELECT date,
        SUM(impressions) AS impressions,
        SUM(clicks) AS clicks,
        SUM(revenue) AS revenue
    FROM public.hourly_stats
    GROUP BY date
    ORDER BY date
    LIMIT 7;
  `;
    return next();
  },
  queryHandler
);

app.get(
  '/poi/daily',
  (req, res, next) => {
    req.sqlQuery = `
    SELECT name, hourly_stats.date as date, 
    SUM(impressions) as impressions, 
    SUM(clicks) as clicks,
    SUM(revenue) as revenue, 
    events
    FROM public.hourly_stats
    LEFT JOIN (select poi_id,date,SUM(events) as events
        FROM public.hourly_events            
        GROUP BY poi_id,date
        ORDER BY date) AS event_table on event_table.poi_id = hourly_stats.poi_id AND event_table.date = hourly_stats.date
    JOIN public.poi on hourly_stats.poi_id = poi.poi_id        
    GROUP BY name,hourly_stats.date,events
    ORDER BY date
    LIMIT 28;
  `;
    return next();
  },
  queryHandler
);

app.get(
  '/poi',
  (req, res, next) => {
    req.sqlQuery = `
    SELECT *
    FROM public.poi;
  `;
    return next();
  },
  queryHandler
);

app.listen(process.env.PORT || 3002, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    console.log(`Running on ${process.env.PORT || 3002}`);
  }
});

// last resorts
process.on('uncaughtException', (err) => {
  console.log(`Caught exception: ${err}`);
  process.exit(1);
});
process.on('unhandledRejection', (reason, p) => {
  console.log('Unhandled Rejection at: Promise', p, 'reason:', reason);
  process.exit(1);
});
