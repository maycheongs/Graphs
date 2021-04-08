import React from 'react'
import { storiesOf } from '@storybook/react'

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

const data = dataBuffer.map((object) => {
  for (const key in object) {
    if (!isNaN(object[key])) {
      object[key] = Number(object[key]);
    }
  }
  return object;
});

const formatNumber = num => num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g,'$1,')


storiesOf('Area Chart', module)
.add('Revenue chart',() => (
  <Chart
  data={data}
  formatX={dateConvert}
  tooltipX={fullDateConvert}
  color={'#ddbc95'}
  areaDataKey={'revenue'}
  dataKeyX={'date'}/>
))
.add('Impressions Chart', () => (
  <Chart
  data={data}
  formatX={dateConvert}
  tooltipX={fullDateConvert}
  formatToolTip={formatNumber}
  color={'#cdcdc0'}
  areaDataKey={'impressions'}
  dataKeyX={'date'}
  domain={[0, 3000000]}
  YtickFormatter={(tick => tick/1000)}
  label=',000'/>
))