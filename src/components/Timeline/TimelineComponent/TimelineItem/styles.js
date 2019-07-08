import {
  CSS_ITEM_INDICATOR_SPOT,
  CSS_ITEM_INDICATOR_LINE,
  CSS_ITEM_LABEL_PAPER,
  CSS_ITEM_LABEL_BADGE,
  Z_INDEX_INDICATOR_LINE,
  Z_INDEX_INDICATOR_SPOT,
  Z_INDEX_LABEL,
} from 'components/Timeline/TimelineComponent/constants';
import { fade } from '@material-ui/core/styles';

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
        zIndex: Z_INDEX_INDICATOR_LINE + 1,
        borderColor: theme.palette.secondary.dark,
        borderBottomColor: fade(theme.color.grey, 0.5),
      },
      [`& .${CSS_ITEM_INDICATOR_SPOT}`]: {
        zIndex: Z_INDEX_INDICATOR_SPOT + 1,
        borderColor: theme.palette.secondary.dark,
      },
      [`& .${CSS_ITEM_LABEL_PAPER}`]: {
        zIndex: Z_INDEX_LABEL + 1,
        borderColor: theme.palette.secondary.dark,
        boxShadow: theme.shadows[2],
      },
      [`& .${CSS_ITEM_LABEL_BADGE}`]: {
        backgroundColor: theme.palette.secondary.dark,
        boxShadow: theme.shadows[1],
      },
    },
  },
});
