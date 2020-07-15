const mongoose = require('mongoose')
const {Schema} = mongoose
const recipientsschema = require('./recipie')

const surveyschema = new Schema ({
    title: String,
    body: String,
    subject: String,
    recipients: [recipientsschema],
    yes:{type:Number, default:0},
    no:{type:Number, default:0},
    _user: { type: Schema.Types.ObjectId, ref: 'User' },
    dateSent: Date,
    lastResponse:Date
})

mongoose.model('surveys',surveyschema)