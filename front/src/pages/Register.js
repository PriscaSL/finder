import React from 'react'
import { Link } from 'react-router-dom';
import IconGlish from '../assets/ICONE GLISH.png';
import Google from '../assets/google.png';


function Register() {
    return (
        <div className='container'>
            <div className='logo'><img src={IconGlish} alt='logo' /></div>
            <div className='login-form'>
                <h3 className='login-intro'>Sign up to Glish</h3>
                <p className='login-p'>Already have an account? <Link to='/login' className='form-link'>Log in</Link></p>
                <form>
                    <input type='text' placeholder='First name' />
                    <input type='text' placeholder='Last name' />
                    <input type='email' placeholder='Email' />
                    <input type='password' placeholder='Password' />
                    <button className='btn-signin'>Register</button>
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

export default Register