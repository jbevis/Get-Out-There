import { combineReducers } from 'redux';
import trailsReducer from './trailsReducer';
import filterReducer from './filterReducer';
import displayReducer from './displayReducer';
import conditionsReducer from './conditionsReducer';


const rootReducer = combineReducers({
  trailsReducer,
  filterReducer,
  displayReducer,
  conditionsReducer
})

export default rootReducer
