import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Indicator from './Indicator';
import Label from './Label';
import styles from './styles';

function preparePointValue(value) {
  return value + (50 - value) * 0.03;
}

const TimelineItem = ({
  classes, start, end, label,
}) => {
  const preparedStart = preparePointValue(start);
  const preparedEnd = preparePointValue(end) || preparedStart;
  const isPoint = preparedStart === preparedEnd;
  return (
    <div className={classes.itemWrapper}>
      <Label
        start={preparedStart}
        end={preparedEnd}
        label={label}
      />
      <Indicator
        isPoint={isPoint}
        start={preparedStart}
        end={preparedEnd}
      />
    </div>
  );
};

export default withStyles(styles)(TimelineItem);
