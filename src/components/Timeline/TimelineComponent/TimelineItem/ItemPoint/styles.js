import { fade } from '@material-ui/core/styles/colorManipulator';
import {
  ITEM_SPOT_SIZE_PX,
  ITEM_LINE_SIZE_PX,
} from 'components/Timeline/TimelineComponent/constants';

export default theme => ({
  pointWrapper: {
    position: 'absolute',
    left: ({ isRight }) => (isRight ? null : -(ITEM_SPOT_SIZE_PX / 2 + ITEM_LINE_SIZE_PX * 1.5)),
    right: ({ isRight }) => (isRight ? -(ITEM_SPOT_SIZE_PX - ITEM_LINE_SIZE_PX) / 2 : null),
    bottom: -(ITEM_SPOT_SIZE_PX / 2),
    width: ITEM_SPOT_SIZE_PX,
    height: ITEM_SPOT_SIZE_PX,
  },
  pointSpot: {
    position: 'absolute',
    borderRadius: '100%',
    border: `${ITEM_LINE_SIZE_PX}px solid ${theme.palette.secondary.main}`,
    width: '100%',
    height: '100%',
    zIndex: 2,
    backgroundColor: fade(theme.color.white, 0.5),
  },
  pointGap: {
    position: 'absolute',
    width: (ITEM_SPOT_SIZE_PX - ITEM_LINE_SIZE_PX) * 2,
    height: ITEM_SPOT_SIZE_PX + ITEM_LINE_SIZE_PX * 2,
    left: -(ITEM_SPOT_SIZE_PX / 2 - ITEM_LINE_SIZE_PX * 2),
    backgroundColor: theme.color.white,
    zIndex: 1,
  },
});
