import React, { useState, useEffect, useRef, useContext } from 'react'
import { Link } from 'react-router-dom'
import axios from '../api/axios'

import AuthContext from '../context/AuthProvider'
const LOGIN_URL = '/auth'

const Login = () => {
    const { setAuth } = useContext(AuthContext);


    const [login, setLogin] = useState({ name: "", pwd: "" })
    const [errMsg, setErrMsg] = useState("")




    const ref = useRef()

    useEffect(() => {
        ref.current.focus()
    }, [])

    const onChange = (e) => {
        setLogin((pre => ({ ...pre, [e.target.name]: e.target.value })))
    }

    const submitRegister = async (e) => {
        e.preventDefault()
        try {
            const response = await axios.post(LOGIN_URL, JSON.stringify({ userName: login.name, password: login.pwd }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                })
            console.log(JSON.stringify(response?.data))

            const accessToken = response?.data?.accessToken;
            const roles = response?.data?.roles;
            const { name, pwd } = login;
            setAuth({ name, pwd, roles, accessToken })

            setLogin({ name: '', pwd: '' })
        } catch (err) {

            if (!err?.response) {
                setErrMsg('No Server Response')
            } else if (err.response?.status === 400) {
                setErrMsg('Missing Username or Password')
            } else if (err.response?.status === 401) {
                setErrMsg('Unauthorized')

            } else {
                setErrMsg('Login Faild')

            }
        }

    }

    const canLogin = Boolean(login.name) && Boolean(login.pwd)

    return (
        <form onSubmit={submitRegister} className="card m-auto my-5 p-3 col-md-5 shadow border-0">
            <h2 className="text-center text-secondary">ثبت نام</h2>
            <h4 className="text-center text-danger">{errMsg}</h4>

            <input name="name" onChange={onChange} value={login.name} ref={ref} className="form-control my-1" placeholder="اسم" />
            <input name="pwd" onChange={onChange} value={login.pwd} className="form-control my-1" placeholder="پسورد" />
            <div className="d-flex align-items-baseline justify-content-between">
                <span>حساب کاربری ندارید؟ <Link to="/register" className=" mt-2">ثبت نام</Link></span>
                <button className=" btn btn-primary px-5 fw-bolder" disabled={!canLogin}>تایید</button>
            </div>
        </form>
    )
}

export default Login