import { fade } from '@material-ui/core/styles';
import { INDICATOR_LINE_SIZE_PX } from './constants';


export default theme => ({
  wrapper: {
    // padding: `0 ${theme.dimen.gapSmall}`,
    margin: `${theme.dimen.gapMedium} 0`,
  },
  topLevel: {
    display: 'flex',
    alignItems: 'flex-end',
    transform: `translateY(-${INDICATOR_LINE_SIZE_PX / 2}px)`,
  },
  baseLine: {
    borderBottom: `${INDICATOR_LINE_SIZE_PX}px solid ${fade(theme.color.grey, 0.75)}`,
  },
});
