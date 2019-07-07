import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import IndicatorSpot from '../IndicatorSpot';

const Indicator = ({ classes, isPoint }) => (
  <div className={classes.line}>
    <IndicatorSpot />
    {!isPoint && (
    <IndicatorSpot isRight />
    )}
  </div>
);

export default withStyles(styles)(Indicator);
