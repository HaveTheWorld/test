import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { CSS_ITEM_INDICATOR_LINE } from 'components/Timeline/TimelineComponent/constants';
import styles from './styles';
import Spot from './Spot';

const Indicator = ({ classes, isPoint }) => (
  <div className={classes.indicatorWrapper}>
    <div className={classnames(classes.indicatorLine, CSS_ITEM_INDICATOR_LINE)} />
    <Spot />
    {!isPoint && (
    <Spot isRight />
    )}
  </div>
);

export default withStyles(styles)(Indicator);
