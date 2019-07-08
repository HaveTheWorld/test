import {
  INDICATOR_LINE_SIZE_PX,
  Z_INDEX_INDICATOR_LINE,
} from 'components/Timeline/TimelineComponent/constants';

export default theme => ({
  indicatorWraper: {
    position: 'absolute',
    bottom: 0,
    left: ({ start }) => `calc(${start}% + ${INDICATOR_LINE_SIZE_PX}px)`,
    width: ({ isPoint, start, end }) => (isPoint ? 0 : `calc(${end - start}% - ${INDICATOR_LINE_SIZE_PX * 2}px)`),
    height: 35, // FIXME
  },
  indicatorLine: {
    position: 'absolute',
    top: -INDICATOR_LINE_SIZE_PX,
    right: -INDICATOR_LINE_SIZE_PX,
    bottom: -INDICATOR_LINE_SIZE_PX * 2,
    left: -INDICATOR_LINE_SIZE_PX,
    border: `${INDICATOR_LINE_SIZE_PX}px solid ${theme.palette.secondary.main}`,
    borderBottomWidth: INDICATOR_LINE_SIZE_PX * 2,
    borderRightWidth: ({ isPoint }) => (isPoint ? 0 : null),
    zIndex: Z_INDEX_INDICATOR_LINE,
    pointerEvents: 'all',
  },
});
