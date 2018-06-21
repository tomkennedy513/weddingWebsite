const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const sgMail = require('@sendgrid/mail');
const crypto = require('crypto');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



exports.rsvp = functions.https
  .onCall((data, context) => {
    console.log(context);
    console.log(data);
    return db.collection('responses').add(data).then(ref => {
      console.log('Added document with ID: ', ref.id);
      return {
        id: ref.id,
        data: data}
  });
});

exports.sendmail = functions.https
  .onCall((data, context) => {
    const email = "kennedy513@gmail.com";
    sgMail.setApiKey('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');
    const msg = {
      to: email,
      from: email,
      subject: 'Kennedy Merritt Wedding RSVP',
      text: JSON.stringify(data)
    };
    sgMail.send(msg).then(res => {
      console.log(res);
      return res
    }).catch(err => {
      console.log(err);
      return err
    })
 });

