import { MOCK_LOGIN } from '../modules/authentication/actions/Actions';

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

    default:
      return state;
  }
}

export default login;