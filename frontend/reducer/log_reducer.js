import { RECEIVE_LOGS } from '../actions/log_actions';
import { CLEAR_STATE } from '../actions/session_actions';
import merge from 'lodash/merge';


const logReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_LOGS:
      return merge({}, action.logs);
    case CLEAR_STATE:
      return {};
    default:
      return state;
  }
};

export default logReducer;