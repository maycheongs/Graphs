import {useState} from 'react'
import LChart from './LChart';
import dayjs from 'dayjs';
export default function Chart(props) {
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
  const formatNumber = (num) =>
    num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  //round to 2 decimal places
  const roundNumber = (num) => Math.round(num * 100) / 100;

  const formatToolTip = (v, n, p) => {
    if (n === 'impressions') return formatNumber(v);
    if (n === 'revenue') return roundNumber(v);
    return v;
  };
  const dateConvert = (date) => dayjs(date).format('MM/DD');
  const fullDateConvert = (date) => dayjs(date).format('D MMM, YYYY');

  const optionsRevenue = {
    color: '#882426',
    lineDataKey: 'revenue',
  };
  const optionsClicks = {
    color: '#c29545',
    lineDataKey: 'clicks',
  };
  const optionsImpressions = {
    color: '#323030',
    lineDataKey: 'impressions',
    YtickFormatter: (tick) => tick / 1000,
    domain: [0, 3000000],
    YAxisLabel: ',000',
  };

  let totalClicks = data.reduce((acc, obj) => acc + obj.clicks, 0);
  let totalImpressions = data.reduce((acc, obj) => acc + obj.impressions, 0);
  totalImpressions = totalImpressions
    .toString()
    .replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  let totalRevenue = data.reduce((acc, obj) => acc + obj.revenue, 0);
  totalRevenue = Math.round(totalRevenue);

  

  return (
    <div className='chart_area'>
      <div className='stat_boxes'>
        <div className='statbox'>
          Clicks:
          <span>{totalClicks}</span>
        </div>
        <div className='statbox'>
          Impressions:
          <span>{totalImpressions}</span>
        </div>
        <div className='statbox'>
          Revenue:
          <span>{totalRevenue}</span>
        </div>
      </div>
      <div className='chart_type'>
        <button>Hourly</button>
        <button>Daily</button>
      </div>
      <div className='chart_option'>
        <button className='clicks_option'>Clicks</button>
        <button className='impressions_option'>Impressions</button>
        <button className='revenue_option'>Revenue</button>
      </div>
      <div className='chart_comparison'>
        vs &nbsp;
        <select name='comparison'>
          <option selected value>
            {' '}
            -- select an option --{' '}
          </option>
        </select>
      </div>

      <LChart
        type={'weekly'}
        baseOptions={optionsClicks}
        data={data}
        dataKeyX={'date'}
        formatX={dateConvert}
        tooltipX={fullDateConvert}
        formatToolTip={formatToolTip}
      />
    </div>
  );
}
