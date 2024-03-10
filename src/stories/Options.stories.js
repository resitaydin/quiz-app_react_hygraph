// Options.stories.js
import React from 'react';
import { action } from '@storybook/addon-actions';
import Options from '../Components/Options/Options';
import '../index.css';
import '../Components/Options/Options.css';

import { faker } from '@faker-js/faker';


export default {
    title: 'Options',
    component: Options,
};

const Template = (args) => {
    // Generate fake data using Faker.js
    const randomOptions = [
        faker.lorem.words(),
        faker.lorem.words(),
        faker.lorem.words(),
        faker.lorem.words(),
    ];

    return (
        <div className="container">
            <Options
                {...args}
                question={{
                    option1: randomOptions[0],
                    option2: randomOptions[1],
                    option3: randomOptions[2],
                    option4: randomOptions[3],
                }}
            />
        </div>
    );
};

// Defining a story for the Options component with default arguments
export const Default = Template.bind({});
Default.args = {
    checkAns: action('Option clicked'),
    selectedOption: null,
    correctOption: null,
};
