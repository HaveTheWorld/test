import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import styles from './styles';

const OptionsGrid = ({ classes }) => (
  <Paper className={classes.optionsComponent}>
      OptionsGrid
  </Paper>
);

export default withStyles(styles)(OptionsGrid);
