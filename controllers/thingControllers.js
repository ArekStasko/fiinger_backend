const Thing = require('../models/thing')


exports.getThings = async(req, res) => {
    const { category } = req.params
    const id = req.user._id 
    const things = await Thing.find({category: category, author: id})
    res.json({things})
 }

exports.createThing = async(req, res) => {
    const thing = new Thing(req.body)
    thing.author = req.user._id
    await thing.save()
    res.send(thing)
}

exports.deleteThing = async(req, res) => {
    const { id } = req.params
    await Thing.findByIdAndDelete(id)
    res.send('successfull deleted post')
}