import { fade } from '@material-ui/core/styles/colorManipulator';

import {
  HOVER_TRANSITION,
  LABEL_MAX_WIDTH_PX,
  Z_INDEX_LABEL,
} from 'components/Timeline/TimelineComponent/constants';

export default theme => ({
  labelOffset: {
    flexGrow: ({ start, end }) => (start + end > 100 ? start + end - 100 : 0),
  },
  labelWrapper: {
    minWidth: ({ start, end }) => {
      const offset = start + end > 100 ? start + end - 100 : 0;
      return `calc(${start + end - offset * 2}%)`;
    },
    marginBottom: theme.dimen.gapMedium,
    display: 'flex',
    justifyContent: 'center',
  },
  labelPaper: {
    maxWidth: LABEL_MAX_WIDTH_PX,
    zIndex: Z_INDEX_LABEL,
    border: `1px solid ${fade(theme.color.grey, 0.75)}`,
    display: 'flex',
    pointerEvents: 'all',
    cursor: 'pointer',
    transition: `border-color ${HOVER_TRANSITION}`,
  },
  labelContent: {
    padding: theme.dimen.gapSmall,
  },
  labelBadge: {
    alignSelf: 'flex-start',
    backgroundColor: theme.palette.secondary.main,
    color: theme.color.white,
    lineHeight: 1,
    padding: `${theme.dimen.gapTiny} ${theme.dimen.gapSmall}`,
    borderBottomLeftRadius: theme.shape.borderRadius,
    fontFamily: theme.typography.fontFamily,
    fontSize: 14,
    transition: `background-color ${HOVER_TRANSITION}`,
  },
});
