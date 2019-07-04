import { ITEM_LINE_SIZE_PX } from '../../constants';

export default theme => ({
  itemLine: {
    position: 'absolute',
    bottom: -ITEM_LINE_SIZE_PX / 2,
    left: ({ start }) => `${start}%`,
    width: ({ isPoint, start, end }) => (isPoint ? 0 : `calc(${end - start}% - ${ITEM_LINE_SIZE_PX * 2}px)`),
    height: 25, // FIXME
    border: `${ITEM_LINE_SIZE_PX}px solid ${theme.palette.secondary.main}`,
    borderBottomWidth: ITEM_LINE_SIZE_PX * 2,
    borderRightWidth: ({ isPoint }) => (isPoint ? 0 : null),
  },
});
