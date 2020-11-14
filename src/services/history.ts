import { createBrowserHistory } from 'history';
import { animateScroll as scroll } from 'react-scroll';

const history = createBrowserHistory();

history.listen(() => {
  scroll.scrollTo(0);
});

export default history;
