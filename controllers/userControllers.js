const User = require('../models/user')
const passport = require('passport')


exports.usersRegistration = async(req, res, next) => {
    try{
        const {username, password} = req.body
        const user = new User({username})
        const registeredUser = await User.register(user, password)
        req.login(registeredUser, err=>{
            if(err) return next(err)
            res.redirect('/')
        })
    } catch(e){
        res.send('Upss error', e.message)
    }
}
 

exports.usersLogin = async(req, res, next) => {
    res.redirect('/')
}

exports.usersLogout = async(req, res, next) => {
   req.logout()
   res.send('goodbyeee <3')
}




/*

{
    "username": "arek",
    "password": "Arek6565"
}


{
    "title": "super nutka",
    "description": "serio posluchaj sobie",
    "link": "https://www.youtube.com/watch?v=Xx0blzRFQRs",
    "category": "music"
}

*/