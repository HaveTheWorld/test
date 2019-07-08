import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { CSS_ITEM_INDICATOR_LINE } from 'components/Timeline/TimelineComponent/constants';
import styles from './styles';
import Spot from './Spot';

const Indicator = ({ classes, isPoint, titles }) => (
  <div className={classes.indicatorWrapper}>
    <div className={classnames(classes.indicatorLine, CSS_ITEM_INDICATOR_LINE)} />
    <Spot title={titles[0]} />
    {!isPoint && (
    <Spot isRight title={titles[1]} />
    )}
  </div>
);

export default withStyles(styles)(Indicator);
