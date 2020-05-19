import { connect } from 'react-redux'
import Login from './Login';

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

export default connect(mapStateToProps, mapDispatchToProps)(Login);