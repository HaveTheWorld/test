import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import TimelineItem from './TimelineItem';

const items = [
  {
    id: 1, start: 96, end: 100, label: '12 янв. 1999г. - 23 мар.2015г.',
  },
  {
    id: 2, start: 20, end: 60, label: 'Очень очень очень очень очень очень очень очень очень очень очень очень очень очень очень очень очень длинное название события',
  },
  { id: 3, start: 0, label: '5 февраля 1985г.' },
  {
    id: 4, start: 55, end: 55, label: '1945г.',
  },
];

function TimelineComponent({ classes }) {
  return (
    <div className={classes.wrapper}>
      <div className={classes.topLevel}>
        {items.map((item, index) => (
          <TimelineItem
            key={item.id}
            index={index}
            {...item}
          />
        ))}
      </div>
      <div className={classes.baseLine} />
    </div>
  );
}

export default withStyles(styles)(TimelineComponent);
