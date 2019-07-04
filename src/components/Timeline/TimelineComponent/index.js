import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const TimelineComponent = ({ classes }) => (
  <div className={classes.timelineComponent}>
      TimelineComponent
  </div>
);

export default withStyles(styles)(TimelineComponent);
