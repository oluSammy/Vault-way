import React from 'react';
import { Line, LineChart, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { useTheme } from '@material-ui/core';
import useMediaQuery from '@material-ui/core/useMediaQuery';

const AdminChart = () => {
  const data = [
    {
      name: "1st Feb",
      uv: 1000,
      xv: 4000,
      pv: 2000,
      dv: 2500,
      amt: 1400
    },
    {
      name: "3rd Feb",
      uv: 1500,
      xv: 2000,
      pv: 2998,
      dv: 4398,
      amt: 2210
    },
    {
      name: "5th Feb",
      uv: 1200,
      xv: 2500,
      pv: 2600,
      dv: 2400,
      amt: 2290
    },
    {
      name: "12th Feb",
      uv: 1680,
      xv: 3700,
      pv: 3408,
      dv: 3008,
      amt: 2000
    },
    {
      name: "20th Feb ",
      uv: 1290,
      xv: 4100,
      pv: 4600,
      dv: 4000,
      amt: 2181
    },
    {
      name: "30th Feb",
      uv: 1690,
      xv: 4000,
      pv: 2500,
      dv: 2000,
      amt: 2100
    }
  ];
  const theme = useTheme();
  const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <ResponsiveContainer width="99%" height={matchesSm ? 300 : 450}>
      <LineChart data={data} margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}>
        <CartesianGrid stroke="#dfe9ef" vertical={false} strokeDasharray="0 0" />
        <XAxis dataKey="name" />
        <YAxis hide tickCount={12} />
        <Tooltip contentStyle={{backgroundColor: '#FFFFFF', border: 'none', borderRadius: '10px', opacity: '.8'}} />
        <Line
          type="linear"
          dataKey="pv"
          stroke="#00A343" fill="#E2FEEB"
          dot={true}
          activeDot={{ r: 8 }}
        />
        <Line type="linear" dataKey="uv" fill="#F2FAF7" stroke="#DD5D00" />
        <Line type="linear" dataKey="dv" fill="#F2FAF7" stroke="#2422C2" />
        <Line type="linear" dataKey="xv" fill="#F2FAF7" stroke="#6E80A3" />
      </LineChart>
    </ResponsiveContainer>
  )
}

export default AdminChart
