import React from 'react';

import { Component } from 'react'
import Chart from 'react-google-charts'

const Chat = () => {
    const pieData = [
        ['Task', 'Number Per Assignment'],
        ['Assignment-1', 60],
        ['Assignment-2', 59],
        ['Assignment-3', 60],
        ['Assignment-4', 59],
        ['Assignment-5', 37],
        ['Assignment-6', 49],
        ['Assignment-7', 49],
        ['Assignment-8', 58],
    ]
    const pieOptions = {
        title: 'Number Per Assignment',
        pieHole: 0.4,
    }
    return (
        <div className="container flex flex-wrap items-center justify-center w-full h-screen pt-48 bg-transparent pai">
            <h2>My all assignment numbers shit </h2>
            <Chart className='xs:w-full pai-g'
                width={'800px'}
                height={'520px'}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={pieData}
                options={pieOptions}
                rootProps={{ 'data-testid': '3' }}
            />
        </div>
    );
};

export default Chat;