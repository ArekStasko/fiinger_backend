const Thing = require('../models/thing')


exports.getThings = async(req, res) => {
    const { category } = req.params
    const things = await Thing.find({category: category})
    res.json({things})
 }

exports.createThing = async(req, res) => {
    console.log(req.body)
    const thing = new Thing(req.body)
    await thing.save()
    res.send(thing)
}

exports.deleteThing = async(req, res) => {
    const { id } = req.params
    await Thing.findByIdAndDelete(id)
    res.send('successfull deleted post')
}