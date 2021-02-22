import { createStore } from 'redux';
import reducer from './components/redux-reducer'

const store = createStore(reducer);

export default store;