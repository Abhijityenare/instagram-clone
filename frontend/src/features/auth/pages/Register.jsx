import React,{useState} from 'react'
import { Link } from 'react-router'
import axios from 'axios'
const Register = () => {

  const [username, setusername] = useState('')
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')

   async function submitHandler(e){
    e.preventDefault()

    axios.post('http://localhost:3000/api/auth/register',{
      username,
      email,
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
          <h1>Register</h1>
          <form onSubmit={submitHandler}>
            <input 
              onInput={(e)=>{setusername(e.target.value)}}
            type="text" 
            name="username" 
            placeholder='enter username'/>
            <input 
              onInput={(e)=>{setemail(e.target.value)}}
            type="email"  
            name='email' 
            placeholder='enter email'/>
            <input 
              onInput={(e)=>{setpassword(e.target.value)}}
            type="password"  
            name='password' 
            placeholder='password'/>
            <button type='submit'>Register</button>
          </form>
           <p>Already have an account? <Link className='toggleAuthForm' to="/login">Login</Link></p>
        </div>
      </main>
    </div>
  )
}

export default Register
