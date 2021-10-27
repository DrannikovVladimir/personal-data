import ReactDOM from 'react-dom';

import "@fontsource/montserrat";
import './index.css';
import init from './init';

init().then((vdom) => {
  ReactDOM.render(vdom, document.querySelector('#root'));
});
