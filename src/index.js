import React from 'react';
import ReactDOM from 'react-dom';

import App from 'App';

const render = (AppComponent) => {
  ReactDOM.render(
    <AppComponent />,
    document.getElementById('app'),
  );
};

render(App);

if (module.hot) {
  module.hot.accept('App', () => {
    // eslint-disable-next-line global-require
    const NewApp = require('App').default;
    render(NewApp);
  });
}
