import { combineReducers } from 'redux';
import trailsReducer from './trailsReducer';
import filterReducer from './filterReducer';


const rootReducer = combineReducers({
  trailsReducer,
  filterReducer
})

export default rootReducer
