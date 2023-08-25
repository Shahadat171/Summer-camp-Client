import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const BarChartDashboard = ({ data }) => {
  return (
    <ResponsiveContainer className="text-white mb-2" width="100%" height="100%">
      <BarChart width={500} height={300} data={data} tick={{ fill: 'text-[#FFFFFF]' }}>
        <CartesianGrid strokeDasharray="3 3" />
       <XAxis dataKey="month"  tick={{ fill: 'text-[#FFFFFF]' }} />
        <YAxis tick={{ fill: 'text-[#FFFFFF]' }}/>
        <Tooltip />
        <Bar dataKey="expenditure" fill="#E53E3E" name="Expenditure" />
        <Bar dataKey="earning" fill="#38A169" name="Earnings" />
      </BarChart>
      </ResponsiveContainer>
  );
};

export default BarChartDashboard;
