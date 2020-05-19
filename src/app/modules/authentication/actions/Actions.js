export const MOCK_LOGIN = 'MOCK_LOGIN';
export const MOCK_LOGOUT = "MOCK_LOGOUT";

export function login() {
  return (dispatch) => {
    dispatch({ type: MOCK_LOGIN });
  };
}

export function logout(){
  return (dispatch) => {
    dispatch({ type: MOCK_LOGOUT });
  };
}