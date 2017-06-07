import { combineReducers } from 'redux';
import trailsReducer from './trailsReducer';
import displayReducer from './displayReducer';
import conditionsReducer from './conditionsReducer';


const rootReducer = combineReducers({
  trailsReducer,
  displayReducer,
  conditionsReducer
})

export default rootReducer
