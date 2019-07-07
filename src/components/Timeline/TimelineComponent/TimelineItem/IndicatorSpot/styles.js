import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  INDICATOR_SPOT_SIZE_PX,
  INDICATOR_LINE_SIZE_PX,
} from 'components/Timeline/TimelineComponent/constants';

export default theme => ({
  spotWrapper: {
    position: 'absolute',
    left: ({ isRight }) => (isRight
      ? null
      : -(INDICATOR_SPOT_SIZE_PX / 2 + INDICATOR_LINE_SIZE_PX * 1.5)
    ),
    right: ({ isRight }) => (isRight
      ? -(INDICATOR_SPOT_SIZE_PX - INDICATOR_LINE_SIZE_PX) / 2
      : null
    ),
    bottom: -(INDICATOR_SPOT_SIZE_PX / 2),
    width: INDICATOR_SPOT_SIZE_PX,
    height: INDICATOR_SPOT_SIZE_PX,
  },
  spot: {
    position: 'absolute',
    borderRadius: '100%',
    border: `${INDICATOR_LINE_SIZE_PX}px solid ${theme.palette.secondary.main}`,
    width: '100%',
    height: '100%',
    zIndex: 2,
    backgroundColor: fade(theme.color.white, 0.5),
  },
  spotGap: {
    position: 'absolute',
    width: (INDICATOR_SPOT_SIZE_PX - INDICATOR_LINE_SIZE_PX) * 2,
    height: INDICATOR_SPOT_SIZE_PX + INDICATOR_LINE_SIZE_PX * 2,
    left: -(INDICATOR_SPOT_SIZE_PX / 2 - INDICATOR_LINE_SIZE_PX * 2),
    backgroundColor: theme.color.white,
    zIndex: 1,
  },
});
