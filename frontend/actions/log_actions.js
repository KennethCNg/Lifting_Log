import * as LogUtil from '../util/log_util';
import { receiveErrors } from './ui_actions';

export const RECEIVE_LOGS = "RECEIVE_LOGS";


export const receiveLogs = (logs) => {
    return {
        type: RECEIVE_LOGS,
        logs,
    };
};

export const requestAllLogs = () => dispatch => {
    return (
        LogUtil.fetchAllLogs()
            .then(fetchedLogs => {
              debugger;
              dispatch(receiveLogs(fetchedLogs)); 
            },
            (err) => dispatch(receiveErrors(err.responseJSON)))
    );
  };

export const requestCreateLog = (log) => dispatch => {
    return (
      LogUtil.createLog(log)
        .then((createdLog) => {
          dispatch(receiveLogs(createdLog));
        },
          (err) => dispatch(receiveErrors(err.responseJSON)))
    );
};

export const requestDestroyLog = logId => dispatch => {
    return (
      LogUtil.destroyLog(logId)
      .then(() => dispatch(requestAllLogs()),
    (err) => dispatch(receiveErrors(err.responseJSON)))
    );
  };