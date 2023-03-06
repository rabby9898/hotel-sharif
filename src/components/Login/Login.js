import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import HeadTitle from '../../common/HeadTitle/HeadTitle'
import './design.css';

const Login = () => {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [allValue, setAllValue] = useState([])

    const formSubmit = (e) =>{
        e.preventDefault();
        const newValue = { email, password}
        setAllValue([...allValue, newValue])

        setEmail('')
        setPassword('')
    }

  return (
    <>
        <HeadTitle/>
        <section className="forms top">
            <div className="container">
                <div className="sign-box">
                    <p>Enter Your Email & Password</p>
                </div>

                <form id='sing-in' onSubmit={formSubmit}>
                    <input type="text" name='email' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value) } className='login-input' />
                    <input type="text" name='password' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} className='login-input' />

                    <div className="flex option">
                        <div className="flex">
                            <input type="checkbox" />
                            <label>Remember me</label>
                        
                        </div>
                        <div className="flex">
                            <span>Forgot your password?</span>
                        </div>
                        <div className="account">
                        <p>
                            Don't have account? <Link to='/register'>Sign Up</Link>
                        </p>
                        </div>
                    </div>
                    
                    <button type='submit' className="primary-btn sign-in-btn">
                            Sign In
                        </button>
                  
                </form>

            </div>
        </section>

        <section className="show-data">
            {allValue.map((currentValue) => {
                const {email, password} = currentValue
                return(
                    <div className="sing-box">
                        <h1>Send Successfully</h1>

                        <h3>
                            Email: <p>{email}</p>
                        </h3>
                        <h3>
                            Password: <p>{password}</p>
                        </h3>
                    </div>
                )
            })}
        </section>
    </>
  )
}

export default Login