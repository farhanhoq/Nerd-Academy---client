import React, { PureComponent } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer, Tooltip } from 'recharts';


const StudentDashboard = () => {

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
  ];
  
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

   
    return (
      <div className='flex my-20 gap-5'>
        <div className='bg-slate-200 rounded-xl p-5 w-6/12 mx-auto'>
          <h1 className='text-black m-5 text-4xl'>Health Check</h1>
          <div className='grid grid-cols-2 items-center justify-around'>
            <PieChart width={300} height={200}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
        <div className='text-lg text-black'>
          <p>Module finish on time</p>
          <p>Module progress</p>
          <p>Quiz mark</p>
          <p>Video duration</p>
        </div>
          </div>
           
        </div>

        <div className='bg-slate-200 rounded-xl p-5 w-6/12 mx-auto'>
          <h1 className='text-black m-5 text-4xl'>Quiz Mark</h1>
          <div className=' flex items-center justify-center gap-10'>
          <div className="radial-progress bg- text-primary-content border-4 border-primary font-bold text-center mt-3" style={{ "--value": "100", "--size": "9.5rem", "--thickness": "0.9rem" }}>76.75% <br /> <span className='text-sm font-thin'>Avg mark%</span> </div>
          <div>
            <p>Complete Quiz 69</p>
            <p>Incomplete Quiz 0</p>
            <p>Total Quiz 69</p>
          </div>
          </div>
        </div>
       
     
      </div>
    );
};

export default StudentDashboard;