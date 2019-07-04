import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import ItemPoint from '../ItemPoint';

const ItemLine = ({ classes, isPoint }) => (
  <div className={classes.itemLine}>
    <ItemPoint />
    {!isPoint && (
    <ItemPoint isRight />
    )}
  </div>
);

export default withStyles(styles)(ItemLine);
