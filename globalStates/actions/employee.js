import {
  ADD_EMPLOYEE_SUCCESS,
  ADD_EMPLOYEE_ERROR,
  ADD_EMPLOYEE,
  ADD_EMPLOYEE_RESET,
  GET_EMPLOYEE,
  GET_EMPLOYEE_ERROR,
  GET_EMPLOYEE_RESET,
  GET_EMPLOYEE_SUCCESS,
  API_START,
  DELETE_EMPLOYEE_SUCCESS,
  DELETE_EMPLOYEE_ERROR,
  DELETE_EMPLOYEE_RESET,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE_SUCCESS,
  UPDATE_EMPLOYEE_ERROR,
  UPDATE_EMPLOYEE_RESET,
  UPDATE_EMPLOYEE,
  GET_EMPLOYEE_BY_ID,
  GET_EMPLOYEE_BY_ID_ERROR,
  GET_EMPLOYEE_BY_ID_SUCCESS,
  GET_EMPLOYEE_BY_ID_RESET,
} from '../reducers/employee';
import {apiRequest} from './api';

export function startedApi() {
  return {
    type: API_START,
  };
}
export function getEmployeeSuccess(e) {
  return {
    type: GET_EMPLOYEE_SUCCESS,
    payload: e,
  };
}

export function getEmployeeError(e) {
  return {
    type: GET_EMPLOYEE_ERROR,
    payload: e,
  };
}

export function getEmployeeReset() {
  return {
    type: GET_EMPLOYEE_RESET,
  };
}

export function getEmployeeByIdSuccess(e) {
  return {
    type: GET_EMPLOYEE_BY_ID_SUCCESS,
    payload: e,
  };
}

export function getEmployeeByIdError(e) {
  return {
    type: GET_EMPLOYEE_BY_ID_ERROR,
    payload: e,
  };
}

export function getEmployeeByIdReset() {
  return {
    type: GET_EMPLOYEE_BY_ID_RESET,
  };
}

export function addEmployeeSuccess(e) {
  return {
    type: ADD_EMPLOYEE_SUCCESS,
    payload: e,
  };
}

export function addEmployeeError(e) {
  return {
    type: ADD_EMPLOYEE_ERROR,
    payload: e,
  };
}

export function addEmployeeReset() {
  return {
    type: ADD_EMPLOYEE_RESET,
  };
}

export function updateEmployeeSuccess(e) {
  return {
    type: UPDATE_EMPLOYEE_SUCCESS,
    payload: e,
  };
}

export function updateEmployeeError(e) {
  return {
    type: UPDATE_EMPLOYEE_ERROR,
    payload: e,
  };
}

export function updateEmployeeReset() {
  return {
    type: UPDATE_EMPLOYEE_RESET,
  };
}

export function deleteEmployeeSuccess(e) {
  return {
    type: DELETE_EMPLOYEE_SUCCESS,
    payload: e,
  };
}

export function deleteEmployeeError(e) {
  return {
    type: DELETE_EMPLOYEE_ERROR,
    payload: e,
  };
}

export function deleteEmployeeReset() {
  return {
    type: DELETE_EMPLOYEE_RESET,
  };
}

export function getEmployeeData() {
  startedApi();
  return apiRequest({
    url: 'http://localhost:8000/employee',
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    onSuccess: response => getEmployeeSuccess(response),
    onFailure: err => getEmployeeError(err),
    label: GET_EMPLOYEE,
  });
}

export function getEmployeeById(id) {
  startedApi();
  return apiRequest({
    url: `http://localhost:8000/employee/${id}`,
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    onSuccess: response => getEmployeeByIdSuccess(response),
    onFailure: err => getEmployeeByIdError(err),
    label: GET_EMPLOYEE_BY_ID,
  });
}

export function addEmployeeData(data) {
  startedApi();
  return apiRequest({
    url: 'http://localhost:8000/employee',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    onSuccess: response => addEmployeeSuccess(response),
    onFailure: err => addEmployeeError(err),
    label: ADD_EMPLOYEE,
  });
}

export function updateEmployeeData(data, id) {
  startedApi();
  return apiRequest({
    url: `http://localhost:8000/employee/${id}`,
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    data,
    onSuccess: response => updateEmployeeSuccess(response),
    onFailure: err => updateEmployeeError(err),
    label: UPDATE_EMPLOYEE,
  });
}

export function deleteEmployeeData(id) {
  startedApi();
  return apiRequest({
    url: `http://localhost:8000/employee/${id}`,
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    onSuccess: response => deleteEmployeeSuccess(response),
    onFailure: err => deleteEmployeeError(err),
    label: DELETE_EMPLOYEE,
  });
}
