import { ITEM_LINE_SIZE_PX } from '../constants';

export default () => ({
  timelineItem: {
    position: 'absolute',
    height: 50, // FIXME
    width: '100%',
    backgroundColor: 'transparent',
    bottom: -ITEM_LINE_SIZE_PX,
  },
});
