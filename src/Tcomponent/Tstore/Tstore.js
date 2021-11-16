import { configureStore} from '@reduxjs/toolkit'
import loginRegisReducer from '../login_regis/login_regisReducer'
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    loginRegisReducer,
  },
  middleware: [sagaMiddleware],
})

sagaMiddleware.run(rootSaga);