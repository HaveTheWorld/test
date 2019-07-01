import React from 'react';
import injectSheet from 'react-jss';
import styles from './styles';

const First = ({ classes }) => <div className={classes.first}>First</div>;

export default injectSheet(styles)(First);
