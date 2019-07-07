import {
  INDICATOR_LINE_SIZE_PX,
  Z_INDEX_INDICATOR,
} from 'components/Timeline/TimelineComponent/constants';

export default theme => ({
  line: {
    position: 'absolute',
    bottom: 0,
    left: ({ start }) => `${start}%`,
    width: ({ isPoint, start, end }) => (isPoint ? 0 : `calc(${end - start}% - ${INDICATOR_LINE_SIZE_PX * 2}px)`),
    height: 35, // FIXME
    border: `${INDICATOR_LINE_SIZE_PX}px solid ${theme.palette.secondary.main}`,
    borderBottomWidth: INDICATOR_LINE_SIZE_PX * 2,
    borderRightWidth: ({ isPoint }) => (isPoint ? 0 : null),
    zIndex: Z_INDEX_INDICATOR,
  },
});
