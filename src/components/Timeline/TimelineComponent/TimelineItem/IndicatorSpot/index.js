import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const IndicatorSpot = ({ classes }) => (
  <div className={classes.spotWrapper}>
    <div className={classes.spot} />
    <div className={classes.spotGap} />
  </div>
);

export default withStyles(styles)(IndicatorSpot);
