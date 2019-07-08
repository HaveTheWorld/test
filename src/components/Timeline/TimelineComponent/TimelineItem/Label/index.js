import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import styles from './styles';

const Label = ({ classes, label }) => (
  <Fragment>
    <div className={classes.labelOffset} />
    <div className={classes.labelWrapper}>
      <Paper className={classes.labelPaper}>
        <Typography className={classes.labelContent}>{label}</Typography>
        <div className={classes.labelBadge}>
            2
        </div>
      </Paper>
    </div>
  </Fragment>
);

export default withStyles(styles)(Label);
