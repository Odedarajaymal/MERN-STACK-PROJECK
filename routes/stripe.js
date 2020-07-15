const key = require('../config/keys')
const authenticate = require('../middeleware/authanticate')

const stripe= require('stripe')(key.Secretkey)


module.exports = app => {
    app.post('/api/stripe',authenticate ,async (req, res) => {
      const charge = await stripe.charges.create({
        amount: 500,
        currency: 'inr',
        description: '$5 for 5 credits',
        source: req.body.id
      });
  
      req.user.credits += 5;
      const user = await req.user.save();
  
      res.send(user);
    });
  };