import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-router';
import {muiTheme} from 'storybook-addon-material-ui';
import { action } from '@storybook/addon-actions'

import Nav from './Nav';

storiesOf('Nav', module)
    .addDecorator(muiTheme())
    .addDecorator(StoryRouter())
    .add('Logged Out', () => <Nav homeRoute="/" loggedIn={false} logOut={action('logOut Clicked')} />)
    .add('Logged In', () => <Nav homeRoute="/" loggedIn={true} logOut={action('logOut Clicked')} />);
