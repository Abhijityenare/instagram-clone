import axios  from "axios";
const api = axios.create({
    baseURL:"http://localhost:3000", // point to post router
    withCredentials:true,
})

export async function getFeed(params) {
    // backend defines GET /api/post/Feed
    const responce = await api.get('/api/post/Feed')
    return responce.data
}

export async function createPost(imagefile,caption) {

    const formData = new FormData()

    formData.append('image',imagefile)
    formData.append('caption',caption)

    const response = await api.post('/api/post',formData)

    return response.data
}

export async function likePost(postId) {
    const response = await api.post('/api/post/like/'+postId)
    return response.data
}
export async function unLikePost(postId) {
    const response = await api.post('/api/post/unlike/'+postId)
    return response.data
}