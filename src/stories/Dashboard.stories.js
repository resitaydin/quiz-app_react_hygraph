
import React from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import '../index.css'

export default {
    title: 'Dashboard',
    component: Dashboard,
};

const Template = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
    scores: [
        { name: 'John', score: 60 },
        { name: 'Jane', score: 40 },
        { name: 'Doe', score: 20 },
    ],
};