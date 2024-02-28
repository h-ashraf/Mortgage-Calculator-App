import { createStore } from 'redux';
import rootReducer from './reducers';

// Create Redux store with rootReducer
const store = createStore(rootReducer);

export default store;