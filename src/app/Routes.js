import Login from './modules/authentication/components/Login/LoginContainer';
import Home from './modules/home/components/Home';

const ApplicationRoutes = {
    Routes: [
        { path: '/login', exact: true, component: Login, isPrivate: false, roles: undefined },
        { path: '/home', exact: true, component: Home, isPrivate: false, roles: undefined }
    ]
};

export default ApplicationRoutes