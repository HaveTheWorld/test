import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const ItemPoint = ({ classes }) => (
  <div className={classes.pointWrapper}>
    <div className={classes.pointSpot} />
    <div className={classes.pointGap} />
  </div>
);

export default withStyles(styles)(ItemPoint);
