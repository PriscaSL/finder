import React from 'react'
import '../styles/Register.css'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <div className='parent'>
        <div className='content'>
            <div className='text1'>
                <p id='titreh1'>Welcome  User!</p>
                <p id='titrep'>Have you an account? <span id='sign'><Link to='/login'>Sign In</Link></span></p>
                <hr class="line"/>
                <label><input type="checkbox"/>I agree the term of <span  id='sign'>condition and service</span></label>
            </div>
            <div className='form'>
                <form>
                    <div className='firstin'>
                        <input type="text" id="name" name="name" placeholder='Name' />
                    </div>
                    <div className='firstin'>
                        <input type="text" id="email" name="email" placeholder='Email'/>
                    </div>
                    <div className='firstin'>
                        <input type="password" id="password" name="password" placeholder='Password' />
                    </div>
                    <div className='firstin'>
                        <input type="password" id="password" name="password" placeholder='Confirm Password' />
                    </div>
                    <button type="submit" id='btn'>Sign Up</button>

                </form>
            </div>
        </div>
       
    </div>
  )
}

export default Register