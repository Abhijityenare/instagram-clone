import axios from "axios";

const api = axios.create({
    baseURL:"http://localhost:3000/api/auth",
    withCredentials:true
})

export async function login(username,password) {
        const responce = await api.post('/login',{
            username,password
        })
        return responce.data
}

export async function register(username,email,password) {
    const responce = await api.post('/register',{
        username,email,password
    })

    return responce.data
}

export async function getMe() {
    const responce = await api.get('/get-me')

    return responce.data
}