import React, { Fragment } from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import OptionsGrid from './OptionsComponent';
import TimelineComponent from './TimelineComponent';
import styles from './styles';

const TimelineContainer = () => (
  <Fragment>
    <Typography
      variant="h6"
      color="primary"
    >
        TimelineContainer
    </Typography>
    <TimelineComponent />
    <OptionsGrid />
  </Fragment>
);

export default withStyles(styles)(TimelineContainer);
