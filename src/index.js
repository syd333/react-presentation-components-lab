import React from 'react';
import ReactDOM from 'react-dom';
import { ProgressPlugin } from 'webpack';

import SimpleComponent from './components/SimpleComponent';
import SimplerComponent from './components/SimplerComponent';

ReactDOM.render(
  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={console.log('whattodohere')} />
  </div>,
  document.getElementById('root')
);