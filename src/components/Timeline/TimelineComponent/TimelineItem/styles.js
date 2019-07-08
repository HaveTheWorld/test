import {
  CSS_ITEM_INDICATOR_SPOT,
  CSS_ITEM_INDICATOR_LINE,
  CSS_ITEM_LABEL_PAPER,
  CSS_ITEM_LABEL_BADGE,
  Z_INDEX_INDICATOR_LINE,
  Z_INDEX_INDICATOR_SPOT,
  Z_INDEX_LABEL,
} from 'components/Timeline/TimelineComponent/constants';

export default theme => ({
  itemWrapper: {
    position: 'relative',
    left: ({ index }) => `-${index * 100}%`,
    flexBasis: '100%',
    flexShrink: 0,
    display: 'flex',
    pointerEvents: 'none',
    '&:hover': {
      [`& .${CSS_ITEM_INDICATOR_LINE}`]: {
        borderColor: theme.palette.secondary.dark,
        zIndex: Z_INDEX_INDICATOR_LINE + 1,
      },
      [`& .${CSS_ITEM_INDICATOR_SPOT}`]: {
        borderColor: theme.palette.secondary.dark,
        zIndex: Z_INDEX_INDICATOR_SPOT + 1,
      },
      [`& .${CSS_ITEM_LABEL_PAPER}`]: {
        borderColor: theme.palette.secondary.dark,
        zIndex: Z_INDEX_LABEL + 1,
      },
      [`& .${CSS_ITEM_LABEL_BADGE}`]: {
        backgroundColor: theme.palette.secondary.dark,
      },
    },
  },
});
