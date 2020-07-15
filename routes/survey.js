const mongoose = require('mongoose')
const _ = require('lodash')
const Path = require('path-parser')
const {URL} = require('url')
const authenticate = require('../middeleware/authanticate')
const requirecredit =require('../middeleware/requirecredit')
const Survey = mongoose.model('surveys')
const Mailer =require('../services/Mailer')
const sarvuytemplate =require('../services/template/sarvuytemplate')


module.exports = app =>{


  app.get('/api/surveys', authenticate,async(req, res)=>{
  const survey = await Survey.find({_user:req.user.id}).select({recipients:false}) 
   res.send(survey)
  })

 

  app.get('/api/surveys/:surveyId/:choice', (req, res) => {
    res.send('Thanks for voting!');
  });


app.post('/api/surveys/webhook', (req, res) => {
  const p = new Path('/api/surveys/:surveyId/:choice');

  _.chain(req.body)
    .map(({ email, url }) => {
      const match = p.test(new URL(url).pathname);
      if (match) {
        return { email, surveyId: match.surveyId, choice: match.choice };
      }
    })
    .compact()
    .uniqBy('email', 'surveyId')
    .each(({ surveyId, email, choice }) => {
      Survey.updateOne(
        {
          _id: surveyId,
          recipients: {
            $elemMatch: { email: email, responded: false }
          }
        },
        {
          $inc: { [choice]: 1 },
          $set: { 'recipients.$.responded': true },
          lastResponded: new Date()
        }
      ).exec();
    })
    .value();

  res.send({});
});


    app.post('/api/surveys', authenticate, requirecredit, async (req, res) => {
        const { title, subject, body, recipients } = req.body;
    
        const survey = new Survey({
          title,
          subject,
          body,
          recipients: recipients.split(',').map(email => ({ email: email.trim() })),
          _user: req.user.id,
          dateSent: Date.now()
        });
    
        // Great place to send an email!
        const mailer = new Mailer(survey,  sarvuytemplate(survey));
    
        try {
          await mailer.send();
          await survey.save();
          req.user.credits -= 1;
          const user = await req.user.save();
    
          res.send(user);
        } catch (err) {
          res.status(422).send(err);
        }
    })
}