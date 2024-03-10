// Dashboard.stories.js
import React from 'react';
import Dashboard from '../Components/Dashboard/Dashboard';
import '../index.css';

import { faker } from '@faker-js/faker';

export default {
    title: 'Dashboard',
    component: Dashboard,
};

const Template = (args) => <Dashboard {...args} />;

export const Default = Template.bind({});
Default.args = {
    scores: Array.from({ length: 3 }, () => ({
        name: faker.name.firstName(),
        score: faker.datatype.number({ min: 0, max: 100 }),
    })),
};