import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import IndicatorLine from './IndicatorLine';
import LabelWrapper from './LabelWrapper';
import styles from './styles';

const TimelineItem = ({
  classes, start, end, label,
}) => {
  const preparedEnd = end || start;
  const isPoint = start === preparedEnd;
  return (
    <div className={classes.itemWrapper}>
      <LabelWrapper
        start={start}
        end={preparedEnd}
        label={label}
      />
      <IndicatorLine
        isPoint={isPoint}
        start={start}
        end={preparedEnd}
      />
    </div>
  );
};

export default withStyles(styles)(TimelineItem);
