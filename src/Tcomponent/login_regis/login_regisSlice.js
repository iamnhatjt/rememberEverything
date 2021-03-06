import React, { useRef, useState } from 'react';
import './login.scss'
import validator from 'validator';
import { useSelector, useDispatch } from 'react-redux'
import {login_regisSlice} from'./login_regisReducer'

const LoginRegis = () => {
    const dataSuccess = useSelector(state => state.loginRegisReducer.isCreateSuccess)
    const dataLoginSuccess = useSelector(state => state.loginRegisReducer.isLoginSuccess)
    const [isCorrect, setisCorrect] = useState(true)
    if(dataSuccess && dataSuccess !== 'init') alert(dataSuccess)
    if(dataLoginSuccess && dataLoginSuccess !== 'init') alert(dataLoginSuccess)
    const onSubmit = (fetch) => {
        function checkValidation(e) {
            e.preventDefault()
            e.stopPropagation()
            let wasValidation = true
            const element = e.target
            const elementInputChildren = element.querySelectorAll('input')
            if(elementInputChildren)
                elementInputChildren.forEach( child => {
                    const feedback = child.parentNode.querySelector('.invalid-feedback')
                    if(feedback) {
                        if(validator.isEmpty(validator.trim(child.value))) {
                            feedback.style.display = 'block'
                            wasValidation = false
                        } else {
                            feedback.style.display = 'none'
                        }
                        if(child.getAttribute('type') === 'email') {
                            if(validator.isEmail(validator.trim(child.value))) {
                                feedback.style.display = 'none'
                            } else {
                                feedback.style.display = 'block'
                                wasValidation = false
                            }
                        }
                        if(child.checked) {
                            feedback.style.display = 'none'
                            wasValidation = true
                        }
                    }
                })
            if(wasValidation) {
                const data = {}
                elementInputChildren.forEach(input => {
                    if(!input.hasAttribute('value-notsend')) {
                        data[input.getAttribute('name')] = validator.trim(input.value)
                    }
                })
                dispatch(fetch({data}))
            }
        }
        return {checkValidation}
    }
    const loginRegis = useRef(null)
    const regis = useRef(null)
    const formRegis = useRef(null)
    const closeRegis = () => {
        loginRegis.current.classList.remove('appear-regis')
        const invalidFeedback = loginRegis.current.querySelectorAll('.invalid-feedback')
        invalidFeedback.forEach(child => {
            child.style.display = 'none'
        }) 
    }
    const appearRegis = () => {
        loginRegis.current.classList.add('appear-regis')
    }
    const actions = login_regisSlice.actions
    const dispatch = useDispatch()

    return(
        <section className="login-regis" ref={loginRegis}>
            <header className="name-page">
                <p className="display-6 text-center fw-bold m-0">Th??? ghi nh???</p>
            </header>
            <main className="login">
                <div className="box-login border rounded">
                    <form className="form-login mx-3 my-3 d-flex flex-column justify-content-center" onSubmit={onSubmit(actions.postCheckLogin).checkValidation}>
                        <div className="mb-3">
                            <label htmlFor="email-login" className="form-label">Email</label>
                            <input type="email" className="form-control form-control-lg" id="email-login" name='email_login' placeholder="Email c???a b???n vd: 123@gmail.com"></input>
                            <div id="email-login" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="pass-login" className="form-label">Password</label>
                            <input type="password" className="form-control form-control-lg" name='password_login' placeholder='vd: 123...' id="pass-login"></input>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="remember-pass"></input>
                            <label className="form-check-label" htmlFor="remember-pass"><small>Remember password</small></label>
                        </div>
                        <div className={isCorrect ? 'd-none' : 'd-block color-success'}><span>T??i kho???n ho???c m???t kh???u kh??ng ch??nh x??c</span></div>
                        <button type="submit" className="btn btn-primary fw-bold btn-lg">????ng nh???p</button>
                    </form>
                    <div className="line-seperate mx-3 my-4"></div>
                    <div className="mx-3 mb-3">
                        <button className="btn btn-success fw-bold w-100 btn-lg" onClick={appearRegis}>????ng k?? ngay</button>
                    </div>
                </div>
            </main>
            <section className="regis" ref={regis}>
                <div className='box-regis rounded'>
                    <form className="box-form row g-3 mx-3" onSubmit={onSubmit(actions.postCheckRegis).checkValidation} ref={formRegis}>
                        <div className="name-regis d-flex justify-content-between align-items-center">
                            <h3 className="fw-bold my-3">????ng k??</h3>
                            <button type="button" className="btn-close" aria-label="Close" onClick={closeRegis}></button>
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" name='firstName' placeholder='T??n'></input>
                            <div className="invalid-feedback">
                                <span>Vui l??ng nh???p t??n c???a b???n</span>
                            </div>
                        </div>
                        <div className="col-6">
                            <input type="text" className="form-control" name='lastName' placeholder='H???'></input>
                            <div className="invalid-feedback">
                                <span>Vui l??ng nh???p h??? c???a b???n</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="email-regis" className="form-label">Email</label>
                            <input type="email" className="form-control" name="email_regis" placeholder="Email c???a b???n vd: 123@gmail.com"></input>
                            <span id="email-regis-span" className="form-text">We'll never share your email with anyone else.</span>
                            <div className="invalid-feedback">
                                <span>Vui l??ng nh???p ????ng email</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <label htmlFor="pass-regis" className="form-label">Password</label>
                            <input type="password" className="form-control" placeholder='vd: 123...' name="pass_regis"></input>
                            <div className="invalid-feedback">
                                <span>Vui l??ng nh???p m???t kh???u</span>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value-notsend='not-send' id="invalidCheck"></input>
                                <label className="form-check-label" htmlFor="invalidCheck">
                                    <span>T??i ?????ng ?? v???i ??i???u kho???n v?? s??? d???ng.</span>
                                </label>
                                <div className="invalid-feedback">
                                    <span>B???n ph???i ?????ng ?? tr?????c khi s??? d???ng.</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-success w-100 my-3 fw-bold" type="submit">????ng k??</button>
                        </div>
                    </form>
                </div>
            </section>
        </section>
    )
}

export default LoginRegis