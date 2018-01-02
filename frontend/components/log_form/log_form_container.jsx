import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { requestCreateLog } from '../../actions/log_actions';
import LogForm from './log_form';

const mapStateToProps = state => {
    return { 
      errors: state.ui.errors,
    };
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      requestCreateLog: (log) => dispatch(requestCreateLog(log)),
    };
  };

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(LogForm);