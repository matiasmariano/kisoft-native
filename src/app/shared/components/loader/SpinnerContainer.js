import { connect } from 'react-redux'
import Spinner from './Spinner';
import {withRouter} from 'react-router-dom';

import { 

} from './redux/Action';

const mapStateToProps = (state) => {
    return {
        loader: state.loader
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
     
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Spinner));