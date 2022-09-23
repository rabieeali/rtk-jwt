import { useEffect, useRef, useState } from "react"
import { Link } from 'react-router-dom'

const Register = () => {
    const [register, setRegister] = useState({
        name: '',
        tel: '',
        pwd: ''
    })

    const ref = useRef()
    useEffect(() => {
        ref.current.focus()
    }, [])



    const onChange = (e) => {
        setRegister((pre) => ({ ...pre, [e.target.name]: e.target.value }))
    }

    const submitRegister = (e) => {
        e.preventDefault()
        console.log(register)
        setRegister({ name: '', tel: '', pwd: '' })
    }

    const canRegister = Boolean(register.name) && Boolean(register.pwd) && Boolean(register.tel)

    return (
        <form onSubmit={submitRegister} className="card m-auto my-5 p-3 col-md-5 shadow border-0">

            <h2 className="text-center text-secondary">ثبت نام</h2>
            <input name="name" onChange={onChange} value={register.name} ref={ref} className="form-control my-1" placeholder="اسم" />
            <input name="tel" onChange={onChange} value={register.tel} className="form-control my-1" placeholder="شماره تلفن" />
            <input name="pwd" onChange={onChange} value={register.pwd} className="form-control my-1" placeholder="پسورد" />
            <div className="d-flex align-items-baseline justify-content-between">
                <span>حساب کاربری دارید؟ <Link to="/login" className=" mt-2">ورود</Link></span>

                <button className=" btn btn-primary px-5 fw-bolder" disabled={!canRegister}>تایید</button>
            </div>
        </form>
    )
}

export default Register