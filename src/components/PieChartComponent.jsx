import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'P1', value: 34, color: 'green' },
  { name: 'P2', value: 5, color: 'lightgray' },
  { name: 'P3', value: 38, color: 'red' },
  { name: 'P4', value: 24, color: 'yellow' },
];

const COLORS = ['green', 'lightgray','red','yellow'];

const PieChartComponent = () => {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%' }}>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={0}
            outerRadius="80%"
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <div style={{ position: 'absolute', top: '10%', left: '10%', color: 'black', fontSize: '14px' }}>P1</div>
      <div style={{ position: 'absolute', bottom: '10%', left: '50%', transform: 'translateX(-50%)', color: 'black', fontSize: '14px' }}>P3%</div>
      <div style={{ position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)', color: 'black', fontSize: '14px' }}>5301%</div>
      <div style={{ position: 'absolute', top: '5%', left: '50%', transform: 'translateX(-50%)', color: 'black', fontSize: '12px' }}>Lightgray</div>
      <div style={{ position: 'absolute', bottom: '-20%', left: '30%', width: '20px', height: '20px', backgroundColor: 'red', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', fontSize: '10px' }}>R</div>
      <div style={{ position: 'absolute', bottom: '-20%', right: '30%', width: '20px', height: '20px', backgroundColor: 'yellow', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'black', fontSize: '10px' }}>Y</div>
    </div>
  );
};

export default PieChartComponent;