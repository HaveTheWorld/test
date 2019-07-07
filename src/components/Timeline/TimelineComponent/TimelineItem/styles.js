export default (/* theme */) => ({
  itemWrapper: {
    transform: ({ index }) => `translate(-${index * 100}%)`,
    flexBasis: '100%',
    flexShrink: 0,
    position: 'relative',
    display: 'flex',
  },
});
