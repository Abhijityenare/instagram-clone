import React,{useState} from 'react'
import { Link } from 'react-router'
import axios from 'axios'
import '../styles/form.scss'
const Login = () => {

  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')

  async function submitHandler(e){
    e.preventDefault()
    
    axios.post('http://localhost:3000/api/auth/login',{
      username,
      password
    },{
      withCredentials:true
    }).then(res=>{
      console.log(res.data); 
    })
  }
  return (
    <div>
      <main>
        <div className="form-container">
            <h1>Login</h1>
            <form onSubmit={submitHandler}>
                <input 
                onInput={(e)=>{setusername(e.target.value)}}
                type="text" 
                name='username' 
                placeholder='enter username' />
                <input
                  onInput={(e)=>{setpassword(e.target.value)}}
                type="password" 
                name='password' 
                placeholder='enter password' />
                <button type='submit'>Login</button>
            </form>
            <p>Don't have an account? <Link className='toggleAuthForm' to="/register">Register</Link></p>
        </div>
      </main>
    </div>
  )
}

export default Login
