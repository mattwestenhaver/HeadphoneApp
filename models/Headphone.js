const
  mongoose = require('mongoose'),

  headphoneSchema = new mongoose.Schema({
    brand: {type: String, require: true},
    model: {type: String, require: true},
    price: {type: Number, require: true}
  })

  const Headphone = mongoose.model('Headphone', headphoneSchema)

module.exports = Headphone
