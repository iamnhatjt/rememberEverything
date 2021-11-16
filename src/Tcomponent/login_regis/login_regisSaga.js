import { call, put, takeLatest, takeEvery } from 'redux-saga/effects';
import axios from 'axios'
import { RegisSuccess, postCheckRegis, fail, loginSuccess, postCheckLogin } from './login_regisReducer';

// url để vào phần đăng nhập đăng kí là http://localhost:3000/login

// url là nơi lấy dữ liệu
const createAccount = (data) => {
    return axios({
      method: "post",
        // URl này là tạo tài khoản với phương thức là post
      url: "http://localhost:5000/register",
      data: data,
      withCredentials:true,
    });
}

const loginAccount = (data) => {
    return axios({
        method: "post",
        //URL này là log in với phương thức là post
        url: "http://localhost:5000/login",
        data: data,
        withCredentials:true,
    });
}

function* postData(action) {
    try {
        const data = yield call(createAccount, action.payload.data);
        yield put(RegisSuccess({data: data.data}))
    }
    catch(error){
        yield put(fail({error}))
    }
}

function* postDataToLogin(action) {
    try {
        const data = yield call(loginAccount, action.payload.data);
        yield put(RegisSuccess({data: data.data}))
    }
    catch(error){
        yield put(fail({error}))
    }
}

export function* fetchdata() {
    yield takeLatest(postCheckRegis.toString(), postData);
    yield takeEvery(postCheckLogin.toString(), postDataToLogin)
}