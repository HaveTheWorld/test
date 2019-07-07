import { fade } from '@material-ui/core/styles/colorManipulator';

import {
  INDICATOR_LINE_SIZE_PX,
  LABEL_MAX_WIDTH_PX,
  Z_INDEX_LABEL,
} from 'components/Timeline/TimelineComponent/constants';

function getOffset(start, end) {
  return start + end > 100 ? start + end - 100 : 0;
}

export default theme => ({
  labelOffset: {
    flexGrow: ({ start, end }) => Number(getOffset(start, end)),
  },
  labelWrapper: {
    minWidth: ({ start, end }) => `calc(${start + end - getOffset(start, end) * 2}% - ${INDICATOR_LINE_SIZE_PX}px)`,
    marginBottom: 20, // FIXME
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    maxWidth: LABEL_MAX_WIDTH_PX,
    padding: 10, // FIXME
    border: `1px solid ${fade(theme.color.grey, 0.75)}`,
    zIndex: Z_INDEX_LABEL,
  },
});
