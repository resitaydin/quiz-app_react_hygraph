
import React from 'react';
import { action } from '@storybook/addon-actions';
import Quiz from '../Components/Quiz/Quiz';
import '../index.css'

export default {
    title: 'Quiz',
    component: Quiz,
};

const Template = (args) => <Quiz {...args} />;

export const Default = Template.bind({});
Default.args = {
    onScoreSave: action('Score saved'),
    onQuizEnd: action('Quiz ended'),
};