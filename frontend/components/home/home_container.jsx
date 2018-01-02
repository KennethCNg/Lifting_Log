import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import Home from './home';
import { selectLogs } from '../../selectors/log_selector';

const mapStateToProps = state => {
  return {
    currentUser: state.session.currentUser,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    requestLogout: () => dispatch(logout()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);