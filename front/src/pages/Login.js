import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/Login.css'

function Login(){
  return (
    <div className='parentLogin'>
        <header className='headLogin'>
           {/*} <img src={} alt='logo' id='imgLogin'/>*/}
        </header>
        <div className='contentLogin'>
            <div className='textLogin'>
                <h1 id='titreLogin'>Welcome  <span id='back'>Back!</span></h1>
                <p id='titrepLogin'>Don't have an account? <span id='signLogin'><button id='Register'><Link to='/register'>Sign Up</Link></button></span></p>
            </div>
            <div className='formLogin'>
                <form>
                    <div className='firstin'>
                        <input type="text" id="usernameLogin" name="username" placeholder='Email' />
                    </div>
                    <div className='secondin'>
                        <input type="password" id="passwordLogin" name="password" placeholder='Password' />
                    </div>
                    <p id='passpLogin'>Forget Password ?</p>
                    <button type="submit" id='btnLogin'>Sign In</button>
                </form>
            </div>
        </div>
        <div className='footLogin'>
                <div className='ligne'>
                    <hr class="line"/> 
                    <p class="centered-text">Or Connect with</p>
                    <hr class="line"/>
                </div>
        </div>
    </div>
  )
}

export default Login