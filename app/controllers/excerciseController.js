const User = require('../models/user.model')


module.exports.list = (req, res) => {
    User.find()
        .then((user) => {
            res.json(user)
        })
        .catch((err) => {
            res.json(err)
        })
}


module.exports.create = (req, res) => {
    const data = req.body

    const user = new User({
        username: data.username,
        mobile: data.mobile,
        email: data.email
    })
    user.save()
        .then((user) => {
            res.json(user)
        })
        .catch((error) => {
            res.json(error)
        })
}