const mongoose = require('mongoose')

const CitySchema = mongoose.Schema({
    city: String,
    state: String,
    country: String
})


module.exports = mongoose.model('City', CitySchema)