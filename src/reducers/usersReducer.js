const initialState = {
  user: {
    firstName: null,
    lastName: null,
    id: null,
    token: '',
    admin: null,
  },
  error: null,
  loading: false,
  signedIn: false,
};

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN_STARTED':
      return { ...state, loading: true };
    case 'USER_LOGGED_OUT':
      return { ...state, signedIn: false, admin: false };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        user: action.user,
        loading: false,
        signedIn: true,
        error: null,
      };
    case 'LOGIN_FAIL':
      return { ...state, error: action.error, loading: false };
    default:
      return state;
  }
}

export default usersReducer;
