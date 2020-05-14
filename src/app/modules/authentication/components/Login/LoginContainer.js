import { connect } from 'react-redux'
import Login from './Login';
import {withRouter} from 'react-router-dom';

import { 

} from '../../redux/Actions';

const mapStateToProps = (state) => {
    return {
        login: state.login
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        action: {
          
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));