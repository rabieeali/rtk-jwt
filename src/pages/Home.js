import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {
    return (
        <div>
            <h1 className='text-center'>خانه</h1>
            <Link to="/register">ثبت نام</Link>
        </div>
    )
}

export default Home