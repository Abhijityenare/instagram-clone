const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const app = express();
app.use(cookieParser())
app.use(express.json())
app.use(cors({
  origin: 'http://localhost:5174',
  credentials: true
}))

const authRouter = require('./routers/auth.routes')
const postRouter = require('./routers/post.routes')
const userRouter = require('./routers/user.routes')

app.use('/api/auth',authRouter)
app.use('/api/post',postRouter)
app.use('/api/user',userRouter)

module.exports = app