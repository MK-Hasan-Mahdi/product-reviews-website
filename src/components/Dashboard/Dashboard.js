import React from 'react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Line, LineChart, Pie, PieChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
    const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ];
    const data2 = [
        {
            "month": "MarHalf",
            "sell": 350
        },
        {
            "month": "MarFull",
            "sell": 285
        },
        {
            "month": "AprHalf",
            "sell": 430
        },
        {
            "month": "AprFull",
            "sell": 521
        },
        {
            "month": "MayHalf",
            "sell": 600
        },
        {
            "month": "MayFull",
            "sell": 685
        },
        {
            "month": "JunHalf",
            "sell": 750
        },
        {
            "month": "JunFull",
            "sell": 780
        },
        {
            "month": "JulHalf",
            "sell": 680
        },
        {
            "month": "JulFull",
            "sell": 800
        },
        {
            "month": "AugHalf",
            "sell": 740
        },
        {
            "month": "AugFull",
            "sell": 800
        }

    ]
    return (
        <div className='container'>
            <h5>Month wise sell</h5>
            <LineChart width={600} height={300} data={data} >
                <Line type="monotone" dataKey="investment" stroke="#8884d8" />
                <Line type="monotone" dataKey="revenue" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="month" />
                <YAxis></YAxis>
                <Tooltip />
            </LineChart>
            <br />
            <h5>Investment vs Revenue</h5>
            <AreaChart width={600}
                height={300}
                data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="revenue" stackId="1" stroke="#8884d8" fill="#8884d8" />
                <Area type="monotone" dataKey="sell" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
                <Area type="monotone" dataKey="investment" stackId="1" stroke="#ffc658" fill="#ffc658" />
            </AreaChart>
            <br />
            <h5>Investment vs Revenue</h5>
            <PieChart width={600} height={400}>
                <Pie data={data} dataKey="investment" cx="50%" cy="50%" outerRadius={60} fill="#8884d8" />
                <Pie data={data2} dataKey="sell" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82ca9d" label />
                <Tooltip></Tooltip>
            </PieChart>
            <h5>Investment vs Revenue</h5>
            <BarChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="investment" fill="#8884d8" />
                <Bar dataKey="revenue" fill="#82ca9d" />
            </BarChart>
        </div>
    );
};

export default Dashboard;