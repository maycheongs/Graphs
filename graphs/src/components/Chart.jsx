import {useState} from 'react';
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
import dayjs from 'dayjs';

export default function Chart(props) {
  const {
    data,
    areaDataKey,
    dataKeyX,
    formatX,
    YtickFormatter,
    tooltipX,
    formatToolTip,
    color,
  } = props;

  const tickFormatter = (tick) => {
    return (YtickFormatter && YtickFormatter(tick)) || tick;
  };
  const toolTipFormatter = (value, name, props) => {
    return (formatToolTip && formatToolTip(value)) || value;
  };
  const XAxisTickFormatter = tick => {
    return (formatX && formatX(tick)) || tick;
  }

  const [periodIndex, usePeriod] = useState(0)
  const chartInterval = props.type === 'weekly' ? 7 : 24
  const dateConverter = date => {
    const d = dayjs(date)
    return d.format('MMM DD, YYYY')    
  }


  return (
    <div className='chart'>
      {props.type === 'weekly' && 
      <div className='switch_week'>
        <button>&#8592;</button>
        <div className='week'>
        {`${dateConverter(data[periodIndex].date)} - ${dateConverter(data[periodIndex + 6].date)}`}
        </div>
        <button>&#8594;</button>
      </div>}
      {props.type === 'daily' &&
      <div></div>

      }
      <ResponsiveContainer width='70%' height={300}>
        <AreaChart
          width={500}
          height={200}
          data={data.slice(periodIndex, periodIndex + chartInterval)}
          syncId='anyId'
          margin={{
            top: 50,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray='3 3' vertical={false} />
          <XAxis dataKey={dataKeyX} tickFormatter={XAxisTickFormatter} dx={5} padding={{right:5}}/>
          <Tooltip labelFormatter={tooltipX} formatter={toolTipFormatter} />

          <YAxis
            dy={5}
            domain={props.domain || [0, 'auto']}
            tickFormatter={tickFormatter}
            label={
              (props.YAXisLabel && { value: props.YAXisLabel, position: 'top' }) || null
            }
          />
          <Area dataKey={areaDataKey} stroke={color} fill={color} />
          {/* <Brush dataKey='date' tickFormatter={formatX} height={30} /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
