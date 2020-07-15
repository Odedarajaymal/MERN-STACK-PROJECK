const express = require('express')
const mongoose = require('mongoose')
const cookieSession = require('cookie-session')
const passport = require('passport')
const bodyparser = require('body-parser')
const app = express()
const  keys = require('./config/keys')
require('./models/user')
require('./models/survey')
require('./services/pass')


mongoose.Promise = global.Promise;
mongoose.connect( keys.mongoURL,{ useNewUrlParser: true },(err)=>{
  if(!err){
      console.log('connectio succes')
  }else{
      console.log('some err')
  }
})

app.use(bodyparser.json())

app.use(cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys:[ keys.cookieKey]
}))

app.use(passport.initialize())
app.use(passport.session())



require('./routes/auth')(app)
require('./routes/stripe')(app)
require('./routes/survey')(app)

if (process.env.NODE_ENV === 'production') {
    // Express will serve up production assets
    // like our main.js file, or main.css file!
    app.use(express.static('client/build'));
  
    // Express will serve up the index.html file
    // if it doesn't recognize the route
    const path = require('path');
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }

const port = process.env.PORT || 5000 

app.listen(port,()=>{
    console.log('app listen 5000')
})

