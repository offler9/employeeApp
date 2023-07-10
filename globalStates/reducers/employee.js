const INITIAL_STATE = {
  addEmployee: null,
  addEmployeeSuccess: false,
  addEmployeeError: false,
  addEmployeeLoading: false,
  employeeData: null,
  getEmployeeLoading: false,
  getEmployeeSuccess: false,
  getEmployeeError: false,
  employeeById: null,
  getEmployeeByIdLoading: false,
  getEmployeeByIdSuccess: false,
  getEmployeeByIdError: false,
  deleteEmployee: null,
  deleteEmployeeLoading: false,
  deleteEmployeeSuccess: false,
  deleteEmployeeError: false,
  updateEmployee: null,
  updateEmployeeLoading: false,
  updateEmployeeSuccess: false,
  updateEmployeeError: false,
};

export const API = 'API';
export const API_INIT = 'API_INIT';
export const API_START = 'API_START';
export const API_ERROR = 'API_ERROR';
export const API_END = 'API_END';

export const GET_EMPLOYEE = 'GET_EMPLOYEE';
export const GET_EMPLOYEE_SUCCESS = 'GET_EMPLOYEE_SUCCESS';
export const GET_EMPLOYEE_ERROR = 'GET_EMPLOYEE_ERROR';
export const GET_EMPLOYEE_RESET = 'GET_EMPLOYEE_RESET';

export const GET_EMPLOYEE_BY_ID = 'GET_EMPLOYEE';
export const GET_EMPLOYEE_BY_ID_SUCCESS = 'GET_EMPLOYEE_BY_ID_SUCCESS';
export const GET_EMPLOYEE_BY_ID_ERROR = 'GET_EMPLOYEE_BY_ID_ERROR';
export const GET_EMPLOYEE_BY_ID_RESET = 'GET_EMPLOYEE_BY_ID_RESET';

export const ADD_EMPLOYEE = 'ADD_EMPLOYEE';
export const ADD_EMPLOYEE_SUCCESS = 'ADD_EMPLOYEE_SUCCESS';
export const ADD_EMPLOYEE_ERROR = 'ADD_EMPLOYEE_ERROR';
export const ADD_EMPLOYEE_RESET = 'ADD_EMPLOYEE_RESET';

export const UPDATE_EMPLOYEE = 'UPDATE_EMPLOYEE';
export const UPDATE_EMPLOYEE_SUCCESS = 'UPDATE_EMPLOYEE_SUCCESS';
export const UPDATE_EMPLOYEE_ERROR = 'UPDATE_EMPLOYEE_ERROR';
export const UPDATE_EMPLOYEE_RESET = 'UPDATE_EMPLOYEE_RESET';

export const DELETE_EMPLOYEE = 'DELETE_EMPLOYEE';
export const DELETE_EMPLOYEE_SUCCESS = 'DELETE_EMPLOYEE_SUCCESS';
export const DELETE_EMPLOYEE_ERROR = 'DELETE_EMPLOYEE_ERROR';
export const DELETE_EMPLOYEE_RESET = 'DELETE_EMPLOYEE_RESET';

const employee = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_EMPLOYEE:
      return {
        ...state,
        addEmployee: null,
        addEmployeeLoading: false,
        addEmployeeSuccess: false,
        addEmployeeError: false,
      };
    case ADD_EMPLOYEE_SUCCESS:
      return {
        ...state,
        addEmployee: action.payload,
        addEmployeeLoading: false,
        addEmployeeSuccess: true,
        addEmployeeError: false,
      };

    case ADD_EMPLOYEE_ERROR:
      return {
        ...state,
        addEmployee: action.payload,
        addEmployeeLoading: false,
        addEmployeeSuccess: false,
        addEmployeeError: true,
      };

    case ADD_EMPLOYEE_RESET:
      return {
        ...state,
        addEmployee: null,
        addEmployeeLoading: false,
        addEmployeeSuccess: false,
        addEmployeeError: false,
      };

    case GET_EMPLOYEE:
      return {
        ...state,
        employeeData: null,
        getEmployeeLoading: false,
        getEmployeeSuccess: false,
        getEmployeeError: false,
      };
    case GET_EMPLOYEE_SUCCESS:
      return {
        ...state,
        employeeData: action.payload,
        getEmployeeLoading: false,
        getEmployeeSuccess: true,
        getEmployeeError: false,
      };

    case GET_EMPLOYEE_ERROR:
      return {
        ...state,
        employeeData: action.payload,
        getEmployeeLoading: false,
        getEmployeeSuccess: false,
        getEmployeeError: true,
      };

    case GET_EMPLOYEE_RESET:
      return {
        ...state,
        employeeData: null,
        getEmployeeLoading: false,
        getEmployeeSuccess: false,
        getEmployeeError: false,
      };
    case GET_EMPLOYEE_BY_ID:
      return {
        ...state,
        employeeByIdData: null,
        getEmployeeByIdLoading: false,
        getEmployeeByIdSuccess: false,
        getEmployeeByIdError: false,
      };
    case GET_EMPLOYEE_BY_ID_SUCCESS:
      return {
        ...state,
        employeeByIdData: action.payload,
        getEmployeeByIdLoading: false,
        getEmployeeByIdSuccess: true,
        getEmployeeByIdError: false,
      };

    case GET_EMPLOYEE_BY_ID_ERROR:
      return {
        ...state,
        employeeData: action.payload,
        getEmployeeLoading: false,
        getEmployeeSuccess: false,
        getEmployeeError: true,
      };

    case GET_EMPLOYEE_BY_ID_RESET:
      return {
        ...state,
        employeeByIdData: null,
        getEmployeeByIdLoading: false,
        getEmployeeByIdSuccess: false,
        getEmployeeByIdError: false,
      };

    case UPDATE_EMPLOYEE:
      return {
        ...state,
        updateEmployee: null,
        updateEmployeeLoading: false,
        updateEmployeeSuccess: false,
        updateEmployeeError: false,
      };
    case UPDATE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        updateEmployee: action.payload,
        updateEmployeeLoading: false,
        updateEmployeeSuccess: true,
        updateEmployeeError: false,
      };

    case UPDATE_EMPLOYEE_ERROR:
      return {
        ...state,
        updateEmployee: action.payload,
        updateEmployeeLoading: false,
        updateEmployeeSuccess: false,
        updateEmployeeError: true,
      };

    case UPDATE_EMPLOYEE_RESET:
      return {
        ...state,
        updateEmployee: null,
        updateEmployeeLoading: false,
        updateEmployeeSuccess: false,
        updateEmployeeError: false,
      };
    case DELETE_EMPLOYEE:
      return {
        ...state,
        deleteEmployee: null,
        deleteEmployeeLoading: false,
        deleteEmployeeSuccess: false,
        deleteEmployeeError: false,
      };
    case DELETE_EMPLOYEE_SUCCESS:
      return {
        ...state,
        deleteEmployee: action.payload,
        deleteEmployeeLoading: false,
        deleteEmployeeSuccess: true,
        deleteEmployeeError: false,
      };

    case DELETE_EMPLOYEE_ERROR:
      return {
        ...state,
        deleteEmployee: action.payload,
        deleteEmployeeLoading: false,
        deleteEmployeeSuccess: false,
        deleteEmployeeError: true,
      };

    case DELETE_EMPLOYEE_RESET:
      return {
        ...state,
        deleteEmployee: null,
        deleteEmployeeLoading: false,
        deleteEmployeeSuccess: false,
        deleteEmployeeError: false,
      };
    default:
      return state;
  }
};

export default employee;
