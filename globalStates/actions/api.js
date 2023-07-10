import {
  API,
  API_START,
  API_END,
  API_ACCESS_DENIED,
  API_ACCESS_UNAUTHORIZED,
  API_ERROR,
} from '../reducers/employee';

export const apiStart = label => ({
  type: API_START,
  payload: label,
});

export const apiEnd = label => ({
  type: API_END,
  payload: label,
});

export const accessUnauthorized = () => ({
  type: API_ACCESS_UNAUTHORIZED,
});

export const accessDenied = e => ({
  type: API_ACCESS_DENIED,
  payload: e,
});

export const apiError = error => ({
  type: API_ERROR,
  error,
});

export function apiRequest({
  url = '',
  method = 'GET',
  data = null,
  onSuccess = () => {},
  onFailure = () => {},
  label = '',
  headers = null,
}) {
  return {
    type: API,
    payload: {
      url,
      method,
      data,
      onSuccess,
      onFailure,
      label,
      headers,
    },
  };
}
