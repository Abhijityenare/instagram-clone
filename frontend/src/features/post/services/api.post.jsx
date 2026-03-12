import axios  from "axios";
const api = axios.create({
    baseURL:"http://localhost:3000/api/post", // point to post router
    withCredentials:true,
})

export async function getFeed(params) {
    // backend defines GET /api/post/Feed
    const responce = await api.get('/Feed')
    return responce.data
}