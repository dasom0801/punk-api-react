import { combineReducers } from 'redux';
import { product } from './reducers';


const rootReducer = combineReducers({
  product,
});

export default rootReducer;