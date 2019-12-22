import { EMPLOYEES_LOADED, 
         EMPLOYEES_ADDED,
         EMPLOYEES_LAUNCH,
         EMPLOYEES_FETCH,
         EMPLOYEES_ERR } from "./constants";

export const employeesLoaded = employees => {
  return {
    type: EMPLOYEES_LOADED,
    payload: {
      employees
    }
  };
};

export const employeesAdded = employees => {
  return {
    type: EMPLOYEES_ADDED,
    payload: {
      employees
    }
  };
};

export const employeesLaunch = () => {
  return{
    type: EMPLOYEES_LAUNCH,
  };
};

export const employeesFetch = data => {
  return{
    type: EMPLOYEES_FETCH,
    payload: {
      data
    }
  };
};

export const employeesError = error => {
  return{
    type: EMPLOYEES_ERR,
    payload: {
      error
    }
  };
};

export const fetchEmployees = () => {
  return dispatch => {
    dispatch(employeesLaunch());
    fetch('http://localhost:3004/employees')
    .then((data) => data.json())
    // Without Redux
    // .then((employees) => this.setState({ employees, isLoading: false }));
    // With Redux
    .then(
      (employees) => {
        dispatch(employeesLoaded(employees))
      },
      (error) => dispatch(employeesError(error))
      
      )
    }  
}
