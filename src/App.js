import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import muiTheme from 'theme';
import Layout from 'components/Layout';
import TimelineContainer from 'components/Timeline';

const App = () => (
  <MuiThemeProvider theme={muiTheme}>
    <Layout>
      <TimelineContainer />
    </Layout>
  </MuiThemeProvider>
);

export default App;
