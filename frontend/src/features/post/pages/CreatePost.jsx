import React from 'react'
import { useState,useRef } from 'react'
import '../style/createPost.scss'
import { usePost } from '../hook/usePost'
import { useNavigate } from 'react-router'



 

const CreatePost = () => {

  const [caption, setcaption] = useState('')
  const postImageInputfeildRef = useRef(null)

  const {loading,handleCreatePost} = usePost()

  const navigate = useNavigate()

  async function submitHandler(e){
    e.preventDefault()
    const file = postImageInputfeildRef.current.files[0]

       await  handleCreatePost(file,caption)

       navigate('/')


  }
      if (loading) {
        return <main><h1>createig post</h1></main>
      }
  return (
    <main className='create-post-page'>
        <div className="form-container">
            <h1>Create Post</h1>
            <form onSubmit={submitHandler}>
                <label className='postImage-label' htmlFor="postImage">Select image</label>
                <input ref={postImageInputfeildRef} hidden type="file" name='postImage' id='postImage' />
                <input 
                value={caption}
                onChange={(e)=>{setcaption(e.target.value)}} 
                type="text" name='caption' id='caption' placeholder='enter caption' />
                <button className='button'>create post</button>
            </form>
        </div>
    </main>
  )
}

export default CreatePost
