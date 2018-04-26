import React from 'react';
import ReactDOM from 'react-dom';

// Global styles
import 'normalize.css';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
registerServiceWorker();
