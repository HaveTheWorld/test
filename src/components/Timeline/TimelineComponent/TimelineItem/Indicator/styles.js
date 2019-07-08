import {
  INDICATOR_LINE_SIZE_PX,
  Z_INDEX_INDICATOR_LINE,
  HOVER_TRANSITION,
} from 'components/Timeline/TimelineComponent/constants';
import { fade } from '@material-ui/core/styles';

export default theme => ({
  indicatorWrapper: {
    position: 'absolute',
    bottom: 0,
    left: ({ start }) => `calc(${start}% + ${INDICATOR_LINE_SIZE_PX}px)`,
    width: ({ isPoint, start, end }) => (isPoint ? 0 : `calc(${end - start}% - ${INDICATOR_LINE_SIZE_PX * 2}px)`),
    height: `calc(${theme.dimen.gapLarge} + ${theme.dimen.gapSmall} + ${INDICATOR_LINE_SIZE_PX}px)`,
  },
  indicatorLine: {
    position: 'absolute',
    top: -INDICATOR_LINE_SIZE_PX,
    right: -INDICATOR_LINE_SIZE_PX,
    bottom: -INDICATOR_LINE_SIZE_PX * 2,
    left: -INDICATOR_LINE_SIZE_PX,
    border: `${INDICATOR_LINE_SIZE_PX}px solid ${theme.palette.secondary.main}`,
    borderBottomWidth: INDICATOR_LINE_SIZE_PX * 2,
    borderBottomColor: fade(theme.palette.secondary.main, 0),
    borderRightWidth: ({ isPoint }) => (isPoint ? 0 : null),
    zIndex: Z_INDEX_INDICATOR_LINE,
    transition: `border-color ${HOVER_TRANSITION}`,
  },
});
