import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import IconGlish from '../assets/ICONE GLISH.png';
import Google from '../assets/google.png';
import CircularProgress from '@mui/material/CircularProgress';


function Register() {

    useEffect(() => {

        if (sessionStorage.getItem('token')) {
            window.location.href = '/homeuser';
        }

    }, []);


    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    const LOGIN_URL = 'https://zahageek-back.onrender.com/api/auth/register';

    const submitForm = (e) => {
        setIsLoading(true);
        e.preventDefault();
        setErrors({});
        const data = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        };
        const request = signUpPost(data);
        request.then(response => response.json())
            .then(data => {
                if (data.status === false) {
                    setErrors(data.message);
                    setIsLoading(false);
                } else {
                    setIsLoading(false);
                    window.location.href = '/login';
                }
            });
    }

    const signUpPost = async (data) => {
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
                <h3 className='login-intro'>Sign up to Glish</h3>
                <p className='login-p'>Already have an account? <Link to='/login' className='form-link'>Log in</Link></p>
                <form onSubmit={(e) => submitForm(e)}>
                    <input
                        type='text'
                        placeholder='First name'
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        style={errors.first_name ? { border: '1px solid red' } : { border: '1px solid #e0e0e0' }}
                        required />
                    {errors.first_name && <label className='label-error'>{errors.first_name[0]}</label>}
                    <input
                        type='text'
                        placeholder='Last name'
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        style={errors.last_name ? { border: '1px solid red' } : { border: '1px solid #e0e0e0' }}
                        required />
                    {errors.last_name && <label className='label-error'>{errors.last_name[0]}</label>}
                    <input
                        type='email'
                        placeholder='Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={errors.email ? { border: '1px solid red' } : { border: '1px solid #e0e0e0' }}
                        required />
                    {errors.email && <label className='label-error'>{errors.email[0]}</label>}
                    <input
                        type='password'
                        placeholder='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={errors.password ? { border: '1px solid red' } : { border: '1px solid #e0e0e0' }}
                        required />
                    {errors.password && <label className='label-error'>{errors.password[0]}</label>}
                    <button className={!isLoading ? 'btn-signup' : 'btn-signup btn-signin-disabled'}
                        type='submit'
                        disabled={isLoading ? "disabled" : ""}
                    >
                        {isLoading && <CircularProgress style={{ width: "20px", height: "20px" }} />}
                        Register
                    </button>
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

export default Register