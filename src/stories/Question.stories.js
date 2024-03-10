
import React from 'react';
import Question from '../Components/Question/Question';
import '../index.css'

export default {
    title: 'Question',
    component: Question,
};

const Template = (args) => <Question {...args} />;

export const Default = Template.bind({});
Default.args = {
    index: 0,
    question: {
        question: 'What is the capital of France?',
    },
};