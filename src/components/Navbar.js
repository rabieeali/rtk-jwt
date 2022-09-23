import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className='bg-warning text-warning fs-4 d-flex justify-content-center gap-5'>
            <NavLink to='/'>خانه</NavLink>
            <NavLink to='/login'>ورود</NavLink>
            <NavLink to='/register'>ثبت نام</NavLink>
            <NavLink to='/private-page'>صفحه ی محافظت شده</NavLink>
        </nav>
    )
}

export default Navbar