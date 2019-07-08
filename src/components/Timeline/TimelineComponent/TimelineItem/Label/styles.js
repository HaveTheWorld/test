import { fade } from '@material-ui/core/styles/colorManipulator';

import {
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
    marginBottom: 20, // FIXME
    display: 'flex',
    justifyContent: 'center',
  },
  label: {
    maxWidth: LABEL_MAX_WIDTH_PX,
    padding: 10, // FIXME
    border: `1px solid ${fade(theme.color.grey, 0.75)}`,
    zIndex: Z_INDEX_LABEL,
    pointerEvents: 'all',
    cursor: 'pointer',
  },
});
