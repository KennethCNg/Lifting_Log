import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { selectLogs } from '../../selectors/log_selector';
import { requestAllLogs, requestCreateLog, requestDestroyLog } from '../../actions/log_actions';
import LogIndex from './log_index';

const mapStateToProps = state => {
    debugger;
  return {
    logs: selectLogs(state),
  };
  
};

const mapDispatchToProps = dispatch => {
    debugger;
  return {
    requestLogout: () => dispatch(logout()),
    requestAllLogs: () => dispatch(requestAllLogs()),
    requestCreateLog: (log) => dispatch(requestCreateLog(log)),
    requestDestroyLog: (logId) => dispatch(requestDestroyLog(logId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LogIndex); 