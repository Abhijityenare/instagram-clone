import { useContext } from "react";
import { PostContext } from "../post.context";
import { getFeed } from "../services/api.post";


export const usePost = () => {

    const context = useContext(PostContext)

    const { loading, setloading, post, setpost, feed, setfeed } = context

    const handleGetFeed = async () => {
        setloading(true)
        const data = await getFeed()
        setfeed(data.posts)
        setloading(false)
    }

    // return an object so that callers can destructure by name
    return { feed, loading, post, handleGetFeed }
}