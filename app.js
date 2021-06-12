const express = require("express")
const mongoose = require("mongoose")
const passport = require('passport')
const bodyParser = require('body-parser');
const LocalStrategy = require('passport-local')
const User = require('./models/user')
const app = express();
app.use(bodyParser.json());
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

app.use('/login', require('./routes/usersRoutes'))
app.use('/things', require('./routes/thingRoutes'))

app.listen(port, () => console.log(`Listen on port ${port}`))