import React from "react";
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  {
    name: "1st Feb",
    uv: 1000,
    pv: 2000,
    amt: 1400
  },
  {
    name: "3rd Feb",
    uv: 1500,
    pv: 2998,
    amt: 2210
  },
  {
    name: "5th Feb",
    uv: 1200,
    pv: 2600,
    amt: 2290
  },
  {
    name: "12th Feb",
    uv: 1680,
    pv: 3408,
    amt: 2000
  },
  {
    name: "20th Feb ",
    uv: 1290,
    pv: 4600,
    amt: 2181
  },
  {
    name: "30th Feb",
    uv: 1690,
    pv: 2500,
    amt: 2100
  }
];


export default function ChartOne() {
  return (
    <ResponsiveContainer width="100%" height={300} >
      <AreaChart
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid stroke="#dfe9ef" vertical={false} strokeDasharray="0 0" />
        <XAxis dataKey="name" />
        <YAxis hide tickCount={12} />
        <Tooltip contentStyle={{backgroundColor: '#FFFFFF', border: 'none', borderRadius: '10px'}} />
        <Area
          type="linear"
          dataKey="pv"
          stroke="#00A343" fill="#E2FEEB"
          dot={true}
          activeDot={{ r: 8 }}
        />
        <Area type="linear" dataKey="uv" fill="#F2FAF7" stroke="#82ca9d" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
