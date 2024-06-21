import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import IconGlish from '../assets/ICONE GLISH.png';
import Google from '../assets/google.png';

function Login() {
    return (
        <div className='container'>
            <div className='logo'><img src={IconGlish} alt='logo' /></div>
            <div className='login-form'>
                <h3 className='login-intro'>Welcome back to Glish</h3>
                <p className='login-p'>Don't have an account? <Link to='/register' className='form-link'>Sign up</Link></p>
                <form>
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <button className='btn-signin'>Sign in</button>
                    <Link to='/' className='form-link'>Forgot your password?</Link>
                </form>
                <div className='division'>
                    <div className='ligne'></div>
                    <h3>Or</h3>
                    <div className='ligne'></div>
                </div>
                <div>
                    <button className='btn-google'><img src={Google} className='google-icon' alt='google'/> Continue with Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login