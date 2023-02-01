import React, { PureComponent } from 'react';
import {
  PieChart,
  Pie,
  Sector,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
} from 'recharts';
import trophy from '../../Assets/trophy.png';

const StudentDashboard = () => {
  const data = [
    { name: 'Module finish on time', value: 400 },
    { name: 'Quiz mark', value: 300 },
    { name: 'Module progress', value: 300 },
    { name: 'Video duration', value: 200 },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  // Piechart data is end here

  // BarChart data starts from here

  const data01 = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="grid grid-cols-4 my-20 gap-5">
      <div className="bg-slate-200 rounded-xl p-5 mx-auto col-span-2">
        <h1 className="text-black m-5 text-4xl">Health Check</h1>
        <div className="grid grid-cols-2 items-center justify-around">
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
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
          <div className="text-lg text-black">
            <p>
              <div className="badge badge-xs badge-info"></div> Module finish on
              time
            </p>
            <p>
              <div className="badge badge-xs badge-success"></div> Quiz mark
            </p>
            <p>
              <div className="badge badge-xs badge-warning"></div> Module
              progress
            </p>
            <p>
              <div className="badge badge-xs badge-error"></div> Video duration
            </p>
          </div>
        </div>
      </div>

      <div className="bg-slate-200 rounded-xl p-5 mx-auto w-full col-span-2">
        <h1 className="text-black m-5 text-4xl">Quiz Mark</h1>
        <div className=" flex items-center justify-around ">
          <div
            className="radial-progress bg- text-primary-content border-4 border-primary font-bold text-center mt-5 text-xl"
            style={{
              '--value': '100',
              '--size': '9.5rem',
              '--thickness': '0.9rem',
            }}
          >
            76.75% <br /> <span className="text-sm font-thin">Avg mark%</span>{' '}
          </div>
          <div className="text-lg text-black">
            <p>
              <div className="badge badge-xs"></div> Complete Quiz 69
            </p>
            <p>
              <div className="badge badge-xs badge-primary"></div> Incomplete
              Quiz 0
            </p>
            <p>
              <div className="badge badge-xs"></div> Total Quiz 69
            </p>
          </div>
        </div>
      </div>
      
        <div className="bg-slate-200 rounded-xl p-5 col-span-3">
          <h1 className="text-black m-5 text-4xl">Video Duration</h1>
          <BarChart
            width={850}
            height={300}
            data={data01}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
            barSize={20}
          >
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
            />
            <YAxis />
            <Tooltip />
            <Legend />
            <CartesianGrid strokeDasharray="3 3" />
            <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
          </BarChart>
        </div>

        <div className="bg-slate-200 rounded-xl p-5 col-span-1 ">
          <div className="items-center mt-8">
            <img className="w-[150px] mx-auto justify-center" src={trophy} alt="" />
            <h1 className='text-center font-bold text-4xl text-black mt-10'>101 <br /> Reward</h1>
          </div>
        </div>

        <div className='bg-slate-200 rounded-xl p-5 col-span-4'>

        </div>

    </div>
  );
};

export default StudentDashboard;
