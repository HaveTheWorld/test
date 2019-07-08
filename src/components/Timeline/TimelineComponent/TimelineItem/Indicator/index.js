import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Spot from './Spot';

const Indicator = ({ classes, isPoint }) => (
  <div className={classes.indicatorWraper}>
    <div className={classes.indicatorLine} />
    <Spot />
    {!isPoint && (
    <Spot isRight />
    )}
  </div>
);

export default withStyles(styles)(Indicator);
