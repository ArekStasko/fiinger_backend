const User = require('../models/user')
const passport = require('passport')


exports.usersRegistration = async(req, res, next) => {
    try{
        const {username, password} = req.body
        const user = new User({username})
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, err=>{
            if(err) return next(err)
            res.send('successfull registered and login')
        })
    } catch(e){
        res.send('Upss error', e.message)
    }
}
 

exports.usersLogin = async(req, res, next) => {
    console.log(req.user._id)
   res.send('successfull login') 
}

exports.usersLogout = async(req, res, next) => {
   req.logout()
   res.send('goodbyeee <3')
}
