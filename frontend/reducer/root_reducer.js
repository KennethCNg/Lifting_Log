import { combineReducers } from 'redux';
import sessionReducer from './session_reducer';
import uiReducer from './ui_reducer';
import logReducer from './log_reducer';


const rootReducer = combineReducers ({
  session: sessionReducer,
  ui: uiReducer,
  logs: logReducer,
});

export default rootReducer;