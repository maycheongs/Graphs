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

  const [periodIndex, setPeriodIndex] = useState(0)
  const chartInterval = props.type === 'weekly' ? 7 : 24
  //format dateString to MMM DD, YYYY
  const dateConverter1 = date => dayjs(date).format('MMM DD, YYYY')    
  //format dateString to YYYY-MM-DD
  const dateConverter2 = date => dayjs(date).format('YYYY-MM-DD')
  
  const [date, setDate] = useState(dateConverter2(data[periodIndex].date))
  const changeDate = (event) => {
     setDate(event.target.value)
     const newIndex = data.findIndex(obj => dateConverter2(obj.date) === event.target.value)
     setPeriodIndex(newIndex)
     console.log('periodIndex', periodIndex)
  }


  return (
    <div className='chart'>
      {props.type === 'weekly' && 
      <div className='switch_period'>
        <button>&#8592;</button>
        <div className='week'>
        {`${dateConverter1(data[periodIndex].date)} - ${dateConverter1(data[periodIndex + 6].date)}`}
        </div>
        <button>&#8594;</button>
      </div>}
      {props.type === 'daily' &&
      <div className='switch_period'>
        <input type='date' value={date} onChange={changeDate} min={dateConverter2(data[0].date)} max={dateConverter2(data[data.length -1].date)}></input>
      </div>

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
