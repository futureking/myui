import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import Modal from '../index';
 
storiesOf('Modal', module)
  .add('doc', () => <Modal handleOnclick={action('clicked')}/>);
