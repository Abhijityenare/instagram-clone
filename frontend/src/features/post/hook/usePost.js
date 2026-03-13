import { useContext,useEffect } from "react";
import { PostContext } from "../post.context";
import { getFeed,createPost,likePost,unLikePost } from "../services/api.post";


export const usePost = () => {

    const context = useContext(PostContext)

    const { loading, setloading, post, setpost, feed, setfeed } = context

    const handleGetFeed = async () => {
        setloading(true)
        const data = await getFeed()
        setfeed(data.posts.reverse())
        setloading(false)
    }

    const handleCreatePost = async (imagefile,caption)=>{
        setloading(true)
        const data = await createPost(imagefile,caption)
        setfeed([data.post,...feed])
        setloading(false)
    }
    const handleLike = async (post) => {
        const data = await likePost(post)
        await handleGetFeed()


    }
    const handleUnLike = async (post) => {
        const data = await unLikePost(post)
        await  handleGetFeed()
    }
    useEffect(()=>{
        handleGetFeed()
    },[])

    // return an object so that callers can destructure by name
    return { feed, loading, post, handleGetFeed, handleCreatePost,handleLike,handleUnLike}
}