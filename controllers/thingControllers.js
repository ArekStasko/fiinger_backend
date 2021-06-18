const Thing = require('../models/thing')


exports.getThings = async(req, res) => {
    const { category } = req.params
    const id = req.body.userID
    const things = await Thing.find({category: category, author: id})
    console.log(category, id, req.body),
    res.send({things})
 }

exports.createThing = async(req, res) => {
    const thing = new Thing(req.body)
    thing.author = req.body.userID
    await thing.save()
    res.send(thing)
}

exports.deleteThing = async(req, res) => {
    const { id } = req.params
    await Thing.findByIdAndDelete(id)
    res.send('successfull deleted post')
}

/*
{
    "username": "arek",
    "password": "Arek6565"

    id: '60c9c1ef58047225a86df7b5'
}
*/