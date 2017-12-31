import { connect } from 'react-redux';
import { logout } from '../actions/session_actions';
import Home from './home';
import { requestAllLogs, requestCreateLog, requestDestroyLog } from '../actions/log_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
    logs: state.logs,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLogout: () => dispatch(logout()),
    requestAllLogs: () => dispatch(requestAllLogs()),
    requestCreateLog: () => dispatch(requestCreateLog()),
    requestDestroyLog: (logId) => dispatch(requestDestroyLog(logId)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);