import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Indicator from './Indicator';
import Label from './Label';
import styles from './styles';

const TimelineItem = ({
  classes, start, end, label,
}) => {
  const preparedEnd = end || start;
  const isPoint = start === preparedEnd;
  return (
    <div className={classes.itemWrapper}>
      <Label
        start={start}
        end={preparedEnd}
        label={label}
      />
      <Indicator
        isPoint={isPoint}
        start={start}
        end={preparedEnd}
      />
    </div>
  );
};

export default withStyles(styles)(TimelineItem);
