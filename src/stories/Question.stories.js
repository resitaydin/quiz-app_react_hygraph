// Question.stories.js
import React from 'react';
import Question from '../Components/Question/Question';
import '../index.css';

import { faker } from '@faker-js/faker';

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
        question: faker.lorem.sentence(), // Generate a random sentence for the question
    },
    fontSize: 16,
};