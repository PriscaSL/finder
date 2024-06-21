import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'
import IconGlish from '../assets/ICONE GLISH.png';
import Google from '../assets/google.png';
import CircularProgress from '@mui/material/CircularProgress';


function Login() {

    useEffect(() => {

        if (sessionStorage.getItem('token')) {
            window.location.href = '/homeuser';
        }

    }, []);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const LOGIN_URL = 'https://zahageek-back.onrender.com/api/auth/login';

    const submitForm = (e) => {
        setIsLoading(true);
        e.preventDefault();
        setError('');
        const data = { email: email, password: password };
        const request = loginPost(data);
        request.then(response => response.json())
            .then(data => {
                if (data.status == false) {
                    setError(data.message);
                    setPassword('');
                    setIsLoading(false);
                } else {
                    sessionStorage.setItem('token', data.user.token);
                    setIsLoading(false);
                    window.location.href = '/homeuser';
                }
            });
    }

    const loginPost = async (data) => {
        return await fetch(LOGIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
    }

    return (
        <div className='container'>
            <div className='logo'><img src={IconGlish} alt='logo' /></div>
            <div className='login-form'>
                <h3 className='login-intro'>Welcome back to Glish</h3>
                <p className='login-p'>Don't have an account? <Link to='/register' className='form-link'>Sign up</Link></p>
                <form onSubmit={(e) => submitForm(e)}>
                    {error && <p className='error'>{error}</p>}
                    <input type='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button
                        className={!isLoading ? 'btn-signin' : 'btn-signin btn-signin-disabled'}
                        type='submit'
                        disabled={isLoading ? "disabled" : ""}
                    >
                        {isLoading && <CircularProgress style={{ width: "20px", height: "20px" }} />}
                        Sign in
                    </button>
                    <Link to='/' className='form-link'>Forgot your password?</Link>
                </form>
                <div className='division'>
                    <div className='ligne'></div>
                    <h3>Or</h3>
                    <div className='ligne'></div>
                </div>
                <div>
                    <button className='btn-google'><img src={Google} className='google-icon' alt='google' /> Continue with Google</button>
                </div>
            </div>
        </div>
    )
}

export default Login