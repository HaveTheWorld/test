export default (/* theme */) => ({
  itemWrapper: {
    position: 'relative',
    left: ({ index }) => `-${index * 100}%`,
    flexBasis: '100%',
    flexShrink: 0,
    display: 'flex',
    pointerEvents: 'none',
  },
});
