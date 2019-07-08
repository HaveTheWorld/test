import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import { CSS_ITEM_INDICATOR_SPOT } from 'components/Timeline/TimelineComponent/constants';
import styles from './styles';

const Spot = ({ classes }) => (
  <div className={classes.spotWrapper}>
    <div className={classnames(classes.spot, CSS_ITEM_INDICATOR_SPOT)} />
    <div className={classes.spotGap} />
  </div>
);

export default withStyles(styles)(Spot);
