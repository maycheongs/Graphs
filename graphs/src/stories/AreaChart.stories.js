import React from 'react'
import { storiesOf } from '@storybook/react'
import '../App.css'
import Chart from '../components/Chart'

const title = 'Area Chart'

const dateConvert = (datestring) => {
  const d = new Date(datestring);
  const dd = d.getDate();
  const mm = d.getMonth() + 1;
  return `${mm}/${dd}`;
};
const fullDateConvert = (datestring) => {
  const d = new Date(datestring);
  return d.toDateString();
};

const dataBuffer = [
  {
    date: '2017-01-01T05:00:00.000Z',
    impressions: '2764609',
    clicks: '3627',
    revenue: '13092.1234790000000',
  },
  {
    date: '2017-01-02T05:00:00.000Z',
    impressions: '943070',
    clicks: '1489',
    revenue: '4275.3479640000000',
  },
  {
    date: '2017-01-03T05:00:00.000Z',
    impressions: '962220',
    clicks: '1274',
    revenue: '4349.9616000000000',
  },
  {
    date: '2017-01-04T05:00:00.000Z',
    impressions: '948574',
    clicks: '1311',
    revenue: '4364.3495500000000',
  },
  {
    date: '2017-01-05T05:00:00.000Z',
    impressions: '952714',
    clicks: '1210',
    revenue: '4496.4799380000000',
  },
  {
    date: '2017-01-06T05:00:00.000Z',
    impressions: '1122032',
    clicks: '1473',
    revenue: '4733.6558360000000',
  },
  {
    date: '2017-01-07T05:00:00.000Z',
    impressions: '1115322',
    clicks: '1547',
    revenue: '4644.1067680000000',
  },
];
//convert number strings to number in data
const data = dataBuffer.map((object) => {
  for (const key in object) {
    if (!isNaN(object[key])) {
      object[key] = Number(object[key]);
    }
  }
  return object;
});
// format large number to split thousands with comma
const formatNumber = num => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')


storiesOf('Daily Stats', module)
.add('Revenue chart',() => (
  <Chart
  type={'weekly'}
  color={'#882426'}
  data={data}
  areaDataKey={'revenue'}
  dataKeyX={'date'}
  formatX={dateConvert}
  tooltipX={fullDateConvert}
  />
))
.add('Clicks chart',() => (
  <Chart
  type={'weekly'}
  color={'#c29545'}
  data={data}
  areaDataKey={'clicks'}
  dataKeyX={'date'}
  formatX={dateConvert}
  tooltipX={fullDateConvert}
  />
))
.add('Impressions Chart', () => (
  <Chart
  type={'weekly'}
  color={'#323030'}
  data={data}
  areaDataKey={'impressions'}
  dataKeyX={'date'}
  formatX={dateConvert}
  tooltipX={fullDateConvert}
  formatToolTip={formatNumber}
  YtickFormatter={(tick => tick/1000)}
  domain={[0, 3000000]}
  YAXisLabel=',000'
  />
))


const hourlyData = [
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 0,
  "impressions": 10746,
  "clicks": 23,
  "revenue": "64.9215630000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 1,
  "impressions": 141397,
  "clicks": 201,
  "revenue": "696.4485960000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 2,
  "impressions": 137464,
  "clicks": 217,
  "revenue": "732.0955030000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 3,
  "impressions": 109217,
  "clicks": 139,
  "revenue": "496.6397510000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 4,
  "impressions": 112129,
  "clicks": 74,
  "revenue": "446.7138830000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 5,
  "impressions": 105182,
  "clicks": 76,
  "revenue": "435.9536840000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 6,
  "impressions": 111925,
  "clicks": 152,
  "revenue": "519.1064970000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 7,
  "impressions": 106769,
  "clicks": 129,
  "revenue": "483.0718670000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 8,
  "impressions": 123464,
  "clicks": 135,
  "revenue": "561.3373030000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 9,
  "impressions": 145333,
  "clicks": 163,
  "revenue": "637.8506700000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 10,
  "impressions": 152529,
  "clicks": 180,
  "revenue": "657.6138580000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 11,
  "impressions": 165321,
  "clicks": 200,
  "revenue": "647.5332910000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 12,
  "impressions": 152531,
  "clicks": 195,
  "revenue": "684.3440180000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 13,
  "impressions": 143520,
  "clicks": 181,
  "revenue": "646.0625610000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 14,
  "impressions": 168021,
  "clicks": 314,
  "revenue": "886.5780050000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 15,
  "impressions": 127771,
  "clicks": 193,
  "revenue": "599.0013210000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 16,
  "impressions": 106157,
  "clicks": 211,
  "revenue": "603.1255660000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 17,
  "impressions": 104870,
  "clicks": 191,
  "revenue": "563.1118780000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 18,
  "impressions": 86798,
  "clicks": 173,
  "revenue": "488.8465350000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 19,
  "impressions": 165917,
  "clicks": 210,
  "revenue": "853.6791170000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 20,
  "impressions": 95662,
  "clicks": 99,
  "revenue": "452.6468010000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 21,
  "impressions": 60086,
  "clicks": 61,
  "revenue": "280.0887910000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 22,
  "impressions": 113981,
  "clicks": 86,
  "revenue": "561.3447040000000"
  },
  {
  "date": "2017-01-01T05:00:00.000Z",
  "hour": 23,
  "impressions": 17819,
  "clicks": 24,
  "revenue": "94.0077160000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 0,
  "impressions": 13316,
  "clicks": 56,
  "revenue": "69.9917250000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 1,
  "impressions": 32275,
  "clicks": 69,
  "revenue": "115.2967230000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 2,
  "impressions": 25567,
  "clicks": 33,
  "revenue": "71.9015000000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 3,
  "impressions": 24386,
  "clicks": 12,
  "revenue": "43.9822160000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 4,
  "impressions": 22305,
  "clicks": 6,
  "revenue": "48.8441270000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 5,
  "impressions": 23725,
  "clicks": 12,
  "revenue": "63.5116560000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 6,
  "impressions": 42763,
  "clicks": 56,
  "revenue": "223.0633420000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 7,
  "impressions": 40521,
  "clicks": 56,
  "revenue": "220.4801670000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 8,
  "impressions": 44862,
  "clicks": 57,
  "revenue": "241.3888750000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 9,
  "impressions": 49395,
  "clicks": 94,
  "revenue": "249.6256080000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 10,
  "impressions": 45008,
  "clicks": 69,
  "revenue": "245.4707360000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 11,
  "impressions": 48927,
  "clicks": 87,
  "revenue": "242.2166710000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 12,
  "impressions": 48836,
  "clicks": 90,
  "revenue": "231.3379990000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 13,
  "impressions": 48813,
  "clicks": 71,
  "revenue": "225.6352260000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 14,
  "impressions": 48375,
  "clicks": 85,
  "revenue": "229.2786800000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 15,
  "impressions": 49551,
  "clicks": 57,
  "revenue": "223.7558460000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 16,
  "impressions": 48362,
  "clicks": 79,
  "revenue": "218.2177440000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 17,
  "impressions": 47735,
  "clicks": 94,
  "revenue": "217.3931840000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 18,
  "impressions": 46311,
  "clicks": 76,
  "revenue": "210.8744190000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 19,
  "impressions": 45117,
  "clicks": 67,
  "revenue": "209.2310100000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 20,
  "impressions": 44123,
  "clicks": 66,
  "revenue": "202.8335090000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 21,
  "impressions": 43651,
  "clicks": 78,
  "revenue": "201.6316030000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 22,
  "impressions": 38390,
  "clicks": 71,
  "revenue": "168.7712120000000"
  },
  {
  "date": "2017-01-02T05:00:00.000Z",
  "hour": 23,
  "impressions": 20756,
  "clicks": 48,
  "revenue": "100.6141860000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 0,
  "impressions": 18307,
  "clicks": 67,
  "revenue": "87.4227050000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 1,
  "impressions": 30113,
  "clicks": 59,
  "revenue": "110.7214860000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 2,
  "impressions": 27469,
  "clicks": 29,
  "revenue": "73.0471470000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 3,
  "impressions": 17418,
  "clicks": 6,
  "revenue": "32.9492880000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 4,
  "impressions": 21419,
  "clicks": 15,
  "revenue": "43.1942410000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 5,
  "impressions": 20871,
  "clicks": 23,
  "revenue": "54.7799660000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 6,
  "impressions": 41661,
  "clicks": 72,
  "revenue": "215.0006050000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 7,
  "impressions": 46586,
  "clicks": 62,
  "revenue": "229.3272530000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 8,
  "impressions": 49793,
  "clicks": 84,
  "revenue": "248.0798430000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 9,
  "impressions": 45010,
  "clicks": 55,
  "revenue": "223.4354770000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 10,
  "impressions": 56260,
  "clicks": 79,
  "revenue": "264.6692640000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 11,
  "impressions": 56859,
  "clicks": 74,
  "revenue": "284.8601950000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 12,
  "impressions": 53547,
  "clicks": 73,
  "revenue": "254.4689300000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 13,
  "impressions": 52312,
  "clicks": 60,
  "revenue": "245.0337340000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 14,
  "impressions": 50947,
  "clicks": 56,
  "revenue": "238.0440430000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 15,
  "impressions": 48849,
  "clicks": 59,
  "revenue": "221.1546890000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 16,
  "impressions": 46647,
  "clicks": 64,
  "revenue": "215.6478030000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 17,
  "impressions": 47437,
  "clicks": 50,
  "revenue": "217.6272090000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 18,
  "impressions": 45867,
  "clicks": 50,
  "revenue": "210.7244290000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 19,
  "impressions": 42472,
  "clicks": 66,
  "revenue": "205.9077960000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 20,
  "impressions": 43274,
  "clicks": 58,
  "revenue": "205.6855580000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 21,
  "impressions": 42913,
  "clicks": 58,
  "revenue": "205.8066010000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 22,
  "impressions": 37201,
  "clicks": 34,
  "revenue": "168.9752980000000"
  },
  {
  "date": "2017-01-03T05:00:00.000Z",
  "hour": 23,
  "impressions": 18988,
  "clicks": 21,
  "revenue": "93.3980400000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 0,
  "impressions": 19744,
  "clicks": 51,
  "revenue": "96.7490290000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 1,
  "impressions": 31576,
  "clicks": 52,
  "revenue": "127.0472440000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 2,
  "impressions": 24471,
  "clicks": 31,
  "revenue": "72.9980320000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 3,
  "impressions": 15103,
  "clicks": 6,
  "revenue": "32.2022460000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 4,
  "impressions": 20216,
  "clicks": 8,
  "revenue": "45.5858750000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 5,
  "impressions": 19679,
  "clicks": 9,
  "revenue": "56.8603970000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 6,
  "impressions": 45383,
  "clicks": 65,
  "revenue": "243.3083480000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 7,
  "impressions": 47779,
  "clicks": 55,
  "revenue": "238.6230680000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 8,
  "impressions": 52703,
  "clicks": 64,
  "revenue": "261.5696250000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 9,
  "impressions": 52978,
  "clicks": 63,
  "revenue": "257.3575390000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 10,
  "impressions": 50976,
  "clicks": 66,
  "revenue": "248.2284500000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 11,
  "impressions": 50652,
  "clicks": 68,
  "revenue": "245.2707750000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 12,
  "impressions": 50382,
  "clicks": 66,
  "revenue": "238.7660000000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 13,
  "impressions": 49857,
  "clicks": 78,
  "revenue": "234.4847420000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 14,
  "impressions": 48773,
  "clicks": 74,
  "revenue": "227.8905720000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 15,
  "impressions": 44999,
  "clicks": 71,
  "revenue": "215.9949090000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 16,
  "impressions": 47213,
  "clicks": 58,
  "revenue": "222.4189280000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 17,
  "impressions": 45531,
  "clicks": 57,
  "revenue": "214.7642890000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 18,
  "impressions": 44255,
  "clicks": 64,
  "revenue": "208.0608440000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 19,
  "impressions": 42494,
  "clicks": 64,
  "revenue": "206.2058220000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 20,
  "impressions": 43345,
  "clicks": 72,
  "revenue": "205.2605540000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 21,
  "impressions": 43552,
  "clicks": 71,
  "revenue": "201.9234330000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 22,
  "impressions": 37205,
  "clicks": 59,
  "revenue": "166.0467280000000"
  },
  {
  "date": "2017-01-04T05:00:00.000Z",
  "hour": 23,
  "impressions": 19708,
  "clicks": 39,
  "revenue": "96.7321010000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 0,
  "impressions": 20163,
  "clicks": 62,
  "revenue": "98.1922020000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 1,
  "impressions": 29395,
  "clicks": 42,
  "revenue": "124.0678140000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 2,
  "impressions": 22507,
  "clicks": 24,
  "revenue": "72.2681070000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 3,
  "impressions": 14545,
  "clicks": 13,
  "revenue": "35.6927280000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 4,
  "impressions": 14889,
  "clicks": 5,
  "revenue": "36.9674330000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 5,
  "impressions": 19443,
  "clicks": 15,
  "revenue": "62.0260700000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 6,
  "impressions": 43959,
  "clicks": 67,
  "revenue": "238.7670680000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 7,
  "impressions": 47634,
  "clicks": 54,
  "revenue": "239.2143510000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 8,
  "impressions": 52186,
  "clicks": 69,
  "revenue": "263.4281800000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 9,
  "impressions": 52899,
  "clicks": 63,
  "revenue": "261.4129600000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 10,
  "impressions": 53064,
  "clicks": 67,
  "revenue": "262.6935900000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 11,
  "impressions": 49619,
  "clicks": 65,
  "revenue": "246.4739270000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 12,
  "impressions": 51928,
  "clicks": 76,
  "revenue": "250.4194500000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 13,
  "impressions": 52342,
  "clicks": 50,
  "revenue": "239.2027510000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 14,
  "impressions": 50903,
  "clicks": 53,
  "revenue": "233.5372990000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 15,
  "impressions": 47794,
  "clicks": 55,
  "revenue": "225.0855990000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 16,
  "impressions": 47628,
  "clicks": 62,
  "revenue": "225.6750690000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 17,
  "impressions": 48000,
  "clicks": 70,
  "revenue": "238.4758720000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 18,
  "impressions": 47138,
  "clicks": 51,
  "revenue": "232.1392190000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 19,
  "impressions": 43525,
  "clicks": 66,
  "revenue": "215.5197710000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 20,
  "impressions": 43579,
  "clicks": 54,
  "revenue": "213.8766470000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 21,
  "impressions": 42519,
  "clicks": 50,
  "revenue": "207.0633420000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 22,
  "impressions": 37063,
  "clicks": 48,
  "revenue": "169.1746510000000"
  },
  {
  "date": "2017-01-05T05:00:00.000Z",
  "hour": 23,
  "impressions": 19992,
  "clicks": 29,
  "revenue": "105.1058380000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 0,
  "impressions": 18087,
  "clicks": 40,
  "revenue": "84.8078360000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 1,
  "impressions": 32617,
  "clicks": 59,
  "revenue": "125.4369970000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 2,
  "impressions": 25736,
  "clicks": 22,
  "revenue": "74.4438110000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 3,
  "impressions": 19339,
  "clicks": 11,
  "revenue": "38.6491520000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 4,
  "impressions": 21218,
  "clicks": 13,
  "revenue": "47.7479600000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 5,
  "impressions": 22531,
  "clicks": 9,
  "revenue": "63.4525230000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 6,
  "impressions": 45906,
  "clicks": 65,
  "revenue": "248.0314750000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 7,
  "impressions": 48250,
  "clicks": 66,
  "revenue": "249.0314090000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 8,
  "impressions": 53515,
  "clicks": 78,
  "revenue": "280.8003440000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 9,
  "impressions": 52715,
  "clicks": 81,
  "revenue": "269.3409560000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 10,
  "impressions": 50166,
  "clicks": 77,
  "revenue": "253.7730060000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 11,
  "impressions": 48047,
  "clicks": 61,
  "revenue": "243.0035030000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 12,
  "impressions": 74993,
  "clicks": 57,
  "revenue": "269.7355090000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 13,
  "impressions": 71068,
  "clicks": 96,
  "revenue": "258.4626040000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 14,
  "impressions": 68003,
  "clicks": 55,
  "revenue": "251.7689310000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 15,
  "impressions": 65106,
  "clicks": 72,
  "revenue": "250.6005740000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 16,
  "impressions": 60888,
  "clicks": 79,
  "revenue": "235.8163120000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 17,
  "impressions": 61449,
  "clicks": 84,
  "revenue": "244.7288860000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 18,
  "impressions": 58052,
  "clicks": 82,
  "revenue": "243.2341800000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 19,
  "impressions": 52004,
  "clicks": 78,
  "revenue": "229.9988450000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 20,
  "impressions": 52134,
  "clicks": 91,
  "revenue": "230.4846730000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 21,
  "impressions": 51259,
  "clicks": 79,
  "revenue": "223.9919720000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 22,
  "impressions": 44417,
  "clicks": 77,
  "revenue": "189.1914210000000"
  },
  {
  "date": "2017-01-06T05:00:00.000Z",
  "hour": 23,
  "impressions": 24532,
  "clicks": 41,
  "revenue": "127.1229570000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 0,
  "impressions": 20217,
  "clicks": 67,
  "revenue": "95.1189460000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 1,
  "impressions": 31637,
  "clicks": 60,
  "revenue": "123.9998600000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 2,
  "impressions": 27410,
  "clicks": 38,
  "revenue": "85.9776660000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 3,
  "impressions": 19629,
  "clicks": 6,
  "revenue": "40.0719810000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 4,
  "impressions": 19992,
  "clicks": 12,
  "revenue": "47.0120870000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 5,
  "impressions": 20838,
  "clicks": 8,
  "revenue": "58.2720540000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 6,
  "impressions": 43948,
  "clicks": 77,
  "revenue": "241.6657770000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 7,
  "impressions": 49556,
  "clicks": 98,
  "revenue": "252.3126290000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 8,
  "impressions": 60859,
  "clicks": 97,
  "revenue": "275.8964840000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 9,
  "impressions": 61209,
  "clicks": 94,
  "revenue": "273.2124780000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 10,
  "impressions": 59768,
  "clicks": 96,
  "revenue": "265.8951580000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 11,
  "impressions": 60831,
  "clicks": 81,
  "revenue": "258.3778300000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 12,
  "impressions": 61682,
  "clicks": 81,
  "revenue": "253.6509280000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 13,
  "impressions": 60679,
  "clicks": 79,
  "revenue": "250.0681240000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 14,
  "impressions": 59211,
  "clicks": 65,
  "revenue": "238.9390140000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 15,
  "impressions": 59092,
  "clicks": 74,
  "revenue": "239.1331930000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 16,
  "impressions": 57960,
  "clicks": 70,
  "revenue": "234.0132630000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 17,
  "impressions": 56197,
  "clicks": 84,
  "revenue": "227.7702160000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 18,
  "impressions": 56268,
  "clicks": 64,
  "revenue": "229.2961960000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 19,
  "impressions": 51332,
  "clicks": 70,
  "revenue": "219.9699670000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 20,
  "impressions": 53153,
  "clicks": 71,
  "revenue": "220.2625790000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 21,
  "impressions": 53117,
  "clicks": 60,
  "revenue": "216.3960460000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 22,
  "impressions": 46493,
  "clicks": 56,
  "revenue": "183.7111940000000"
  },
  {
  "date": "2017-01-07T05:00:00.000Z",
  "hour": 23,
  "impressions": 24244,
  "clicks": 39,
  "revenue": "113.0830980000000"
  }
  ];



storiesOf('Hourly Stats', module)
.add('Revenue chart',() => (
  <Chart
  type={'daily'}
  color={'#882426'}
  data={hourlyData}
  areaDataKey={'revenue'}
  dataKeyX={'hour'}
  domain={[0,1000]}
  formatX={(x)=> `0${x}:00`.slice(-5)}
  tooltipX={(x)=> `0${x}:00`.slice(-5)}
  formatToolTip={num => Math.round(num*100)/100}

  />
))