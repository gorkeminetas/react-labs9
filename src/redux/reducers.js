import { EMPLOYEES_LOADED, EMPLOYEES_ADDED } from "./constants";

export const initialState = {
  employees: [],
  isFetched: false
};

// Read this: https://redux.js.org/basics/reducers

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case EMPLOYEES_LOADED: {
      const { employees } = action.payload;
      // CAREFUL: You can't modify state variable directly.
      return Object.assign({}, state, { employees , isFetched: true });
    }
    case EMPLOYEES_ADDED: {
      const { employees } = action.payload;
      return Object.assign({}, state, { employees });
    }
    default:
      return state;
  }
};

export default appReducer;