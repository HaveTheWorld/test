import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const TimelineBase = ({ classes }) => (
  <div className={classes.timelineBase} />
);

export default withStyles(styles)(TimelineBase);
