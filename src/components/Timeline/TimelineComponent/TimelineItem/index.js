import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemLine from './ItemLine';

function TimelineItem(props) {
  const { classes, start, end } = props;
  const isPoint = Number.isNaN(parseFloat(end));
  return (
    <div
      className={classes.timelineItem}
    >
      <ItemLine
        isPoint={isPoint}
        start={start}
        end={end}
      />
    </div>
  );
}

export default withStyles(styles)(TimelineItem);
