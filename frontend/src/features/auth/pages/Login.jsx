import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import '../style/form.scss'
const Login = () => {

  const {user,loading,handleLogin}= useAuth()

  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate()

  const submitHandler = async (e)=>{
    e.preventDefault()

    await handleLogin(username,password)

    navigate('/')
  }

  if (loading) {
      return (
        <main>
          <h1>Loading.......</h1>
        </main>
      )    
  }
  return (
    <main>
      <div className="form-container">
              <h1>Login</h1>
              <form onSubmit={submitHandler}>
                <input 
                onInput={(e)=>{setusername(e.target.value)}}
                type="text" 
                name='username' 
                id='username' 
                placeholder='enter username' />
                <input 
                onInput={(e)=>{setpassword(e.target.value)}}
                type="password" 
                name='password' 
                id='password' 
                placeholder='enter password' />
                <button className='button primary-buttonn' >Login</button>
              </form>
              <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
      </div>
    </main>
  )
}

export default Login
