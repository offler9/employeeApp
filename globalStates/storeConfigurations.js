import {configureStore} from '@reduxjs/toolkit';
import {persistStore} from 'redux-persist';
import thunkMiddleware from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';

import employee from './reducers/employee';
import apiMiddleware from './middleware/apiMiddleware';

// export const store = configureStore({
//   reducer: employee,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       thunk: {
//         extraArgument: apiMiddleware,
//       },
//       serializableCheck: false,
//     }),
// });

// const persistor = persistStore(store);

// export {persistor};
// export default function storeConfigurations() {
//   createLogger();
//   const enhancer = compose(applyMiddleware(promise, thunk, apiMiddleware));
//   const persistConfig = {
//     key: 'root',
//     storage: AsyncStorage,
//     whitelist: ['vehicle'],
//   };

//   const persistedReducer = persistReducer(persistConfig, employee);
//   // const store = configureStore(persistedReducer, enhancer);
//   const store = configureStore({
//     reducer: persistedReducer,
//     middleware: getDefaultMiddleware =>
//       getDefaultMiddleware({
//         thunk: {
//           extraArgument: enhancer,
//         },
//         serializableCheck: false,
//       }),
//   });
//   const persistor = persistStore(store);

//   return {store, persistor};
// }
const registeredMiddlewares = getDefaultMiddleware => {
  // get default
  const middlewares = getDefaultMiddleware({
    // serializableCheck: {
    //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    // },
    immutableCheck: false,
    serializableCheck: false,
  });

  // register for DEV Only
  // if (__DEV__ && !process.env.JEST_WORKER_ID) {
  //   // eslint-disable-next-line @typescript-eslint/no-var-requires
  //   const createDebugger = require('redux-flipper').default
  //   middlewares.push(createDebugger())
  // }

  // register others
  middlewares.push(thunkMiddleware);
  middlewares.push(promiseMiddleware);
  middlewares.push(apiMiddleware);

  return middlewares;
};

const store = configureStore({
  reducer: employee,
  middleware: registeredMiddlewares,
});

const persistor = persistStore(store);

export {store, persistor};
