import React from 'react'
import { useEffect } from 'react'
import '../style/Feed.scss'
import { usePost } from '../hook/usePost'
import Post from '../components/Post'
import "../../shared/components/Nav"
import Nav from '../../shared/components/Nav'

// component code as shown above
const Feed = () => {

  // invoke the custom hook and destructure the returned object
  const { feed, handleGetFeed, loading, handleLike,handleUnLike } = usePost()

  useEffect(() => {
    handleGetFeed()
  }, [])
  
  if (loading || !feed) {
    return (
      <main><h1>loading.....</h1></main>
    )
  }
  console.log(feed);
  return (
    <>
    <main className='feed-page'>
        <Nav/>
        <div className="feed">
            <div className="posts">
            {feed.map((post) => {
              // each post object should include the user who created it
              return <Post key={post._id || post.id} user={post.user} post={post} loading={loading} handleLike={handleLike} handleUnLike={handleUnLike}/>
            })}
            </div>
        </div>
    </main>
    </>
  )
}

export default Feed
