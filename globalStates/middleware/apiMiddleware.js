import axios from 'axios';

import {apiError, apiStart, apiEnd, accessDenied} from '../actions/api';
import {API} from '../reducers/employee';

const apiMiddleware =
  ({dispatch, getState}) =>
  next =>
  action => {
    next(action);
    if (action.type !== API) {
      return;
    }
    const {
      url,
      method,
      data,
      // accessToken,
      onSuccess,
      onFailure,
      label,
      headers: _headers,
    } = action.payload;

    // const Authorization = accessToken || getState().authUser?.userToken?.token

    const objHeaders = {
      headers: {
        'Content-Type': 'application/json',
        // Accept: 'application/json',
        ..._headers,
      },
    };

    const dataOrParams = ['GET', 'DELETE'].includes(method) ? 'params' : 'data';
    const objData = data ? {[dataOrParams]: data} : null;
    if (label) {
      dispatch(apiStart(label));
    }
    // console.info('\n\n>>REQUEST _data:', `[${url.replace(/^(.+?\.sg)/g, '')}]`, '\n', JSON.stringify({
    //     url,
    //     method,
    //     ...objHeaders,
    //     ...objData,
    //   }))

    axios
      .request({
        url,
        method,
        ...objHeaders,
        ...objData,
      })
      .then(({data: _data, status}) => {
        // console.log('>>RESPONSE _data:\n', `[${url.replace(/^(.+?\.sg)/g, '')}]`, `status: ${status}`, JSON.stringify(_data), '\n\n'); // eslint-disable-line
        if (_data.success || status.toString().includes('20')) {
          dispatch(onSuccess(_data, dispatch, getState));
        } else {
          dispatch(onFailure(_data.msg, dispatch, getState));
        }
      })
      .catch(error => {
        dispatch(apiError(error));
        let errMessage = error.message;
        if (error === 'Network Error') {
          return dispatch(onFailure(error, dispatch, getState));
        }
        if (error.response && error.response.data) {
          errMessage =
            error.response.data.msg ||
            error.response.data.message ||
            'Error Occured';
        }
        // console.log('e', error)
        // console.info('>>RESPONSE ERROR _error:\n', `[${url.replace(/^(.+?\.sg)/g, '')}]`, `status: ${error.response && error.response.status}`, errMessage, error?.response?.data, '\n\n'); // eslint-disable-line

        // // When UNAUTHORIZED
        // if (error.response && error.response.status === 401) {
        //   Alert.alert('Unauthorized', 'Token expired, please re-login', [
        //     {
        //       text: 'OK',
        //       onPress: () => dispatch(accessUnauthorized('Unauthorized')),
        //     },
        //   ]);
        //   return;
        // }

        // When FORBIDDEN
        if (error.response && error.response.status === 403) {
          dispatch(accessDenied(errMessage));
          return;
        }

        // When OTHER ERROR
        dispatch(onFailure(errMessage, dispatch, getState));
      })
      .finally(() => {
        if (label) {
          dispatch(apiEnd(label));
        }
      });
  };

export default apiMiddleware;
