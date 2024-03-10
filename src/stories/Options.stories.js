
import React from 'react';
import { action } from '@storybook/addon-actions';
import Options from '../Components/Options/Options';
import '../index.css'

export default {
    title: 'Options',
    component: Options,
};

const Template = (args) => <div className="container">
    <Options {...args} />
</div>;

export const Default = Template.bind({});
Default.args = {
    question: {
        option1: 'Option 1',
        option2: 'Option 2',
        option3: 'Option 3',
        option4: 'Option 4',
    },
    checkAns: action('Option clicked'),
    optionRefs: [React.createRef(), React.createRef(), React.createRef(), React.createRef()],
};