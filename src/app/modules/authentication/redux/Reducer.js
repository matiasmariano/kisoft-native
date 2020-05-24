const initialState = {
  loggedIn: false,
  isFetching: true,
  error: false,
  errorMessage: '',
  token: null,
  request2fa: false,
};

function login(state = initialState, action) {
  switch (action.type) {

    default:
      return state;
  }
}

export default login;
