import { useState } from 'react';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  ResponsiveContainer,
} from 'recharts';
import dayjs from 'dayjs';

export default function LChart(props) {
  const {
    data,
    dataKeyX,
    formatX,
    tooltipX,
    formatToolTip,
    secOptions,
  } = props;

 const {
    color,
    lineDataKey,
    YtickFormatter,
    YAxisLabel,
    domain,
  } = props.baseOptions;

  const tickFormatter = (tick) => {
    return (YtickFormatter && YtickFormatter(tick)) || tick;
  };
  const XAxisTickFormatter = (tick) => {
    return (formatX && formatX(tick)) || tick;
  };

  const [periodIndex, setPeriodIndex] = useState(0);
  const chartInterval = props.type === 'weekly' ? 7 : 24;
  //format dateString to MMM DD, YYYY
  const dateConverter1 = (date) => dayjs(date).format('MMM DD, YYYY');
  //format dateString to YYYY-MM-DD
  const dateConverter2 = (date) => dayjs(date).format('YYYY-MM-DD');
  const dateConverter3 = (date) => dayjs(date).format('MMM DD');

  const [date, setDate] = useState(dateConverter2(data[periodIndex].date));
  const changeDate = (event) => {
    setDate(event.target.value);
    const newIndex = data.findIndex(
      (obj) => dateConverter2(obj.date) === event.target.value
    );
    setPeriodIndex(newIndex);
  };

  return (
    <div className='chart'>
      {/* {props.type === 'weekly' && (
        <div className='switch_period'>
          <button>&#8592;</button>
          <div className='week'>
            {`${dateConverter1(data[periodIndex].date)} - ${dateConverter1(
              data[periodIndex + 6].date
            )}`}
          </div>
          <button>&#8594;</button>
        </div>
      )}
      {props.type === 'daily' && (
        <div className='switch_period'>
          <input
            type='date'
            value={date}
            onChange={changeDate}
            min={dateConverter2(data[0].date)}
            max={dateConverter2(data[data.length - 1].date)}
          ></input>
        </div>
      )} */}
      <ResponsiveContainer width='90%' height={300}>
        <LineChart
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
          {secOptions && <Legend verticalAlign='top' height={36} />}
          <XAxis
            xAxisId={0}
            dataKey={dataKeyX}
            tickFormatter={XAxisTickFormatter}
            dx={10}
            dy={5}
            padding={{ right: 5 }}
          />
          {props.type === 'daily' && (
            <XAxis
              xAxisId={1}
              dataKey='date'
              tickFormatter={dateConverter3}
              interval={24}
              axisLine={false}
              tickLine={false}
              dx={10}
              dy={-5}
              padding={{ right: 5 }}
            />
          )}
          <Tooltip labelFormatter={tooltipX} formatter={formatToolTip} />

          <YAxis
            yAxisId={1}
            dy={5}
            domain={domain || [0, 'auto']}
            tickFormatter={tickFormatter}
            label={
              (YAxisLabel && {
                value: YAxisLabel,
                position: 'top',
              }) ||
              null
            }
          />
          <Line
            yAxisId={1}
            dataKey={lineDataKey}
            stroke={color}
            strokeWidth={3}
            fill={color}
            dot={false}
          />
          {props.type === 'daily' && (
            <Brush 
            dataKey='date'
            endIndex={48} 
            tickFormatter={(x) => ''} 
            height={15} />
          )}
          {secOptions && (
            <YAxis
              yAxisId={2}
              dy={5}
              domain={secOptions.domain || [0, 'auto']}
              tickFormatter={(tick) =>
                (secOptions.YtickFormatter &&
                  secOptions.YtickFormatter(tick)) ||
                tick
              }
              label={
                (secOptions.YAxisLabel && {
                  value: secOptions.YAxisLabel,
                  position: 'top',
                }) ||
                null
              }
              orientation='right'
            />
          )}
          {secOptions && (
            <Line
              yAxisId={2}
              dataKey={secOptions.lineDataKey}
              stroke={secOptions.color}
              strokeWidth={2}
              fill={secOptions.color}
              dot={false}
            />
          )}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
