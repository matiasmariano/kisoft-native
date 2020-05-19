export const MOCK_LOGIN = 'MOCK_LOGIN';

export function login() {
  return (dispatch) => {
    dispatch({ type: MOCK_LOGIN });
  };
}