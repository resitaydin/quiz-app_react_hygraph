// Result.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import Result from '../Components/Result/Result';
import '../index.css';
import '../Components/Quiz/Quiz.css';

import { faker } from '@faker-js/faker';

export default {
    title: 'Result',
    component: Result,
};

const Template = (args) => <div className="container">
    <Result {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
    score: faker.datatype.number({ min: 10, max: 100 }), // Generate a random score between 0 and 100
    name: faker.name.firstName(), // Generate a random name
    handleInputChange: action('Input Changed'),
    save: action('Score Saved'),
    reset: action('Reset'),
};