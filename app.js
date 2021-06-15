if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require("express")
const mongoose = require("mongoose")
const passport = require('passport')
const session = require('express-session');
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local')
const User = require('./models/user');
const { deserializeUser } = require("passport");
const app = express();

const dbUrl = process.env.MNG
const srt = process.env.SECRET
const port = process.env.PORT

mongoose.connect(dbUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})

const db = mongoose.connection
db.on('error', console.error.bind(console, 'conection error:'));
db.once('open', () => {
    console.log('database connected')
})

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());

//session
const sessionConfig = {
    secret: srt,
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
        maxAge: 1000 * 60 * 60 * 24 * 7
    }
}

app.use(session(sessionConfig))


//passport 
app.use(passport.initialize())
app.use(passport.session())
passport.use(new LocalStrategy(User.authenticate()))
passport.serializeUser(User.serializeUser())
passport.deserializeUser(User.deserializeUser())


app.use((req, res, next) => {
    res.locals.currentUser = req.user;
    next();
})

//routes
app.use('/', require('./routes/usersRoutes'))
app.use('/things', require('./routes/thingRoutes'))

app.listen(port, () => console.log(`Listen on port ${port}`))