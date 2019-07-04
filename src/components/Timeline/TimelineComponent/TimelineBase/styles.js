import { ITEM_LINE_SIZE_PX } from '../constants';


export default theme => ({
  timelineBase: {
    position: 'absolute',
    width: '100%',
    height: ITEM_LINE_SIZE_PX,
    backgroundColor: theme.color.grey,
  },
});
