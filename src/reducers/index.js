import { combineReducers } from 'redux';
import trailsReducer from './trailsReducer';
import filterReducer from './filterReducer';
import displayReducer from './displayReducer';


const rootReducer = combineReducers({
  trailsReducer,
  filterReducer,
  displayReducer
})

export default rootReducer
