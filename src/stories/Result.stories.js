
import React from 'react';
import { action } from '@storybook/addon-actions';
import Result from '../Components/Result/Result';
import '../index.css'
import '../Components/Quiz/Quiz.css'

export default {
    title: 'Result',
    component: Result,
};

const Template = (args) => <div className="container">
    <Result {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
    score: 80,
    name: 'John Doe',
    handleInputChange: action('Input Changed'),
    save: action('Score Saved'),
    reset: action('Reset'),
};