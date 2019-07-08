import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import classnames from 'classnames';
import {
  CSS_ITEM_LABEL_BADGE,
  CSS_ITEM_LABEL_PAPER,
} from 'components/Timeline/TimelineComponent/constants';
import styles from './styles';

const Label = ({ classes, label }) => (
  <Fragment>
    <div className={classes.labelOffset} />
    <div className={classes.labelWrapper}>
      <Paper className={classnames(classes.labelPaper, CSS_ITEM_LABEL_PAPER)}>
        <Typography className={classes.labelContent}>{label}</Typography>
        <div className={classnames(classes.labelBadge, CSS_ITEM_LABEL_BADGE)}>
            2
        </div>
      </Paper>
    </div>
  </Fragment>
);

export default withStyles(styles)(Label);
