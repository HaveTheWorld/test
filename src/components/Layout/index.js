import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const Layout = ({ children, classes }) => (
  <div className={classes.layout}>
    {children}
  </div>
);

export default withStyles(styles)(Layout);
