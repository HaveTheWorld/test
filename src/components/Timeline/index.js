import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import OptionsGrid from './OptionsComponent';
import TimelineComponent from './TimelineComponent';
import styles from './styles';

const TimelineContainer = ({ classes }) => (
  <div className={classes.timeline}>
    <Typography
      variant="h6"
      color="primary"
    >
        Timeline Container
    </Typography>
    <TimelineComponent />
    <OptionsGrid />
  </div>
);

export default withStyles(styles)(TimelineContainer);
