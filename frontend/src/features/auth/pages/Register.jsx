import React, { useState } from 'react'
import '../style/form.scss'
import { Link } from 'react-router-dom'
import { useAuth } from '../hooks/useAuth'
import { useNavigate } from 'react-router-dom'
const Register = () => {

  const {loading,handleRegister} = useAuth()

  const [username, setusername] = useState("")
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")

  const navigate = useNavigate()

 async function submitHandler(e){
      e.preventDefault()

      await handleRegister(username,email,password)

      navigate('/')
  }

  if (loading) {
    return(<main>
      <h1>Loading......</h1>
    </main>)
  }
  return (
    <main>
      <div className="form-container">
              <h1>Register</h1>
              <form onSubmit={submitHandler}>
                <input onInput={(e)=>{setusername(e.target.value)}}
                type="text" 
                name='username' 
                id='username' 
                placeholder='enter username' />
                <input onInput={(e)=>{setemail(e.target.value)}}
                type="text" 
                name='email' 
                id='email' 
                placeholder='enter email address' />
                <input onInput={(e)=>{setpassword(e.target.value)}}
                type="password" 
                name='password' 
                id='password' 
                placeholder='enter password' />
                <button >Login</button>
              </form>
              <p>already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
      </div>
    </main>
  )
}

export default Register
