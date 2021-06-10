const express = require("express")
const mongoose = require("mongoose")
const passport = require('passport')
const LocalStrategy = require('passport-local')
const User = require('./models/user')
const app = express();
const port = 5000;

mongoose.connect('mongodb://localhost:27017/things', {
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

app.use('/lol', require('./routes/usersRoutes'))

app.listen(port, () => console.log(`Listen on port ${port}`))