import React from 'react';

import { storiesOf } from '@storybook/react';

import Home from '~/pages/Home';

storiesOf('Pages|Home', module)
  .add('Home page', () => <Home />)
  .add('Home page show 2', () => <Home />);
