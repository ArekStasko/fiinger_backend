const mongoose = require('mongoose')
const Thing = require('../models/thing')

mongoose.connect('mongodb://localhost:27017/things', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
    console.log("Database connected");
});

const seedDB = async() => {
    await Thing.deleteMany({})
    for(let i = 0; i<10; i++){
        const thing = new Thing({
            title: 'Tytul oh yeah',
            description: 'Ooo opis tez ma',
            link: 'link do czegos tam',
            category: 'Music',
            author: 'Jiraiyia'
        })
        await thing.save()
    }
}

seedDB().then(()=>{
    mongoose.connection.close()
})