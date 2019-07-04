import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import TimelineBase from './TimelineBase';
import TimelineItem from './TimelineItem';

function TimelineComponent(props) {
  const { classes } = props;
  return (
    <div
      className={classes.timelineComponent}
    >
      <TimelineBase />
      <TimelineItem start={3} />
      <TimelineItem start={1} end={100} />
    </div>
  );
}

export default withStyles(styles)(TimelineComponent);
