import React from '../../node_modules/react';
import { Route, Redirect, withRouter } from "../../node_modules/react-router-dom";
import { connect } from '../../node_modules/react-redux';
import { LocalStorageHelper } from './shared/helpers/LocalStorageHelper';
import { RolesHelper } from './shared/helpers/RolesHelper';

let localStorageHelper = new LocalStorageHelper();
let rolesHelper = new RolesHelper();


const AppRoute = (routeProps) => {
    const { component: Component, path, exact } = routeProps;
    let page = (<Route {...{ exact, path }} render={props => <Component {...props} />} />);

    if (routeProps.isPrivate) {
        //Verifica que exista un token...
        if (localStorageHelper.getItem('userToken') == null) {
            page = (<Route {...{ exact, path }} render={() => <Redirect to="/login" />} />);
        } else {
            //Verifica que tenga permisos para acceder a la pantalla...
            if (!rolesHelper.rolValidate(routeProps.roles))
                return null;
        }

    }

    return page;
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {

    }
}

const ConnectedAppRoute = withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(AppRoute));

export default ConnectedAppRoute;