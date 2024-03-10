import React from 'react';
import Question from '../Components/Question/Question';
import '../index.css'

export default {
    title: 'Question',
    component: Question,
    argTypes: {
        font: { control: 'text' },
        fontSize: { control: 'number' },
    },
};

const Template = (args) => <div style={{ fontFamily: args.font, fontSize: args.fontSize }}>
    <Question {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
    index: 0,
    question: {
        question: 'What is the capital of France?',
    },
    fontSize: 16,
};