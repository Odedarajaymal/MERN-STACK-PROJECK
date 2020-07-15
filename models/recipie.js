const mongoose = require('mongoose')
const {Schema} = mongoose

const recipientsschema = new Schema({
    email: String,
    responded:{type:Boolean, default:false}
})

module.exports = recipientsschema