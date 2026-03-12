const express = require('express')
const authRouter = express.Router()
const authController = require('../controllers/auth.controller')
const identifyUser = require('../../middleware/auth.middleware')

authRouter.get('/', (req, res) => {
  res.json({ message: 'Auth API is working' })
})
authRouter.post('/register',authController.registerController)
authRouter.post('/login',authController.loginController)
authRouter.get('/get-me',identifyUser,authController.getMeController)
module.exports = authRouter