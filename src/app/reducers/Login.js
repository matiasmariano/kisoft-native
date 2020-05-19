import { MOCK_LOGIN, MOCK_LOGOUT } from '../modules/authentication/actions/Actions';

const initialState = {
  isFetching: false,
  error: false,
  errorMessage: '',
  loggedIn: false
};

function login(state = initialState, action) {
  switch (action.type) {
    
    case MOCK_LOGIN:{
      return{
        ...state,
        loggedIn: true
      }
    }

    case MOCK_LOGOUT:{
      return{
        ...state,
        loggedIn: false
      }
    }

    default:
      return state;
  }
}

export default login;