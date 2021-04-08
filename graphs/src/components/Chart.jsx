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
  return (
    <div className='chart'>
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
          <XAxis dataKey={dataKeyX} tickFormatter={formatX} dx={5} />
          <Tooltip labelFormatter={tooltipX} formatter={toolTipFormatter} />

          <YAxis
            dy={5}
            domain={props.domain || [0, 'auto']}
            tickFormatter={tickFormatter}
            label={
              (props.label && { value: props.label, position: 'top' }) || null
            }
          />
          <Area dataKey={areaDataKey} stroke={color} fill={color} />
          {/* <Brush dataKey='date' tickFormatter={formatX} height={30} /> */}
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
