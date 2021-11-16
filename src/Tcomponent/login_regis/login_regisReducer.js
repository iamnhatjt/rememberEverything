import { createSlice } from '@reduxjs/toolkit'

// server trả về string để client thông báo cho người dùng vd: đăng nhập không thành công thì trả về 'tài khoản mật khẩu không chính xác'
const initialState = {
  isCreateSuccess: 'init',
  isLoginSuccess: 'init',
}

export const login_regisSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        postCheckRegis: (state, action) => {
            return state
        },
        RegisSuccess: (state, action) => {
            const data = action.payload
            state.isCreateSuccess = data.data
            return state
        },
        postCheckLogin: (state, action) => {
            return state
        },
        loginSuccess: (state, action) => {
            const data = action.payload
            state.isLoginSuccess = data.data
            return state
        },
        fail: (state, action) => {
            console.log(action.payload)
            return state
        }
    }
})

export const {postCheckRegis, RegisSuccess, fail, postCheckLogin, loginSuccess} = login_regisSlice.actions

export default login_regisSlice.reducer