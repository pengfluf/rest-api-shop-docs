import React from 'react';
import ReactDOM from 'react-dom';

// Global styles
import 'normalize.css';
import 'swagger-ui/dist/swagger-ui.css';

import App from './components/App';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
registerServiceWorker();
