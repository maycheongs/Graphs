import { useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
} from 'recharts';

export default function Chart(props) {
  const CLICKS = 'CLICKS';
  const IMPRESSIONS = 'IMPRESSIONS';
  const REVENUE = 'REVENUE';
  const [viewMode, setViewMode] = useState('CLICKS');

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

  console.log(data);
  return (
    <div className='chart'>
      Stats by Day:
      <div className='options'>
        <button onClick={() => setViewMode(CLICKS)}>Clicks</button> 
        <button onClick={()=> setViewMode(IMPRESSIONS)}>Impressions</button>{' '}
        <button onClick={() => setViewMode(REVENUE)}>Revenue</button>
      </div>
      <ResponsiveContainer width='70%' height={500}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId='anyId'
          margin={{
            top: 50,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey='date' tickFormatter={dateConvert} dx={5}/>
          <Tooltip labelFormatter={fullDateConvert} />

          {(viewMode === CLICKS || viewMode === REVENUE) && <YAxis />}
          {viewMode === CLICKS && (
            <Area dataKey='clicks' stroke='#b38867' fill='#b38867' />
          )}
          {viewMode === REVENUE && (
            <Area dataKey='revenue' stroke='#ddbc95' fill='#ddbc95' />
          )}
          {viewMode === IMPRESSIONS && <YAxis domain={[0,3000000]} tickFormatter={(tick) => tick/1000 } label={{value: ',000', position:'top'}} dy={5}/> }
          
          {viewMode === IMPRESSIONS && (
            <Area dataKey='impressions' stroke='#82ca9d' fill='#82ca9d' />
          )}

          <Brush dataKey='date' tickFormatter={dateConvert} height={30} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
