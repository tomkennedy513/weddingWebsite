const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const db2 = admin.database();
const sgMail = require('@sendgrid/mail');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



exports.rsvpFirestore = functions.https
  .onCall((data) => {
    return db.collection('responses').add(data).then(value => {
      console.log(`wrote data ${value.id}`);
      return {id: value.id}
    }).catch(err => {
      throw new functions.https.HttpsError('internal', err.toString())
    })
});

exports.sendmail = functions.https
  .onCall((data) => {
    const email = "kennedy513@gmail.com";
    sgMail.setApiKey('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');
    const msg = {
      to: email,
      from: email,
      subject: 'Kennedy Merritt Wedding RSVP',
      html: '<p>Hi Tom and Emily,<br>' +
        'You have a new RSVP.</p>' +
        '<ul style="list-style-type:none">' +
        `<li>Names: ${data.names.toString()}</li>` +
        `<li>Wedding: ${data.wedding}</li>` +
        `<li>Cocktails: ${data.cocktail}</li>` +
        `<li>Brunch: ${data.brunch}</li>` +
        `<li>Accommodations: ${data.accommodations}</li>` +
        `<li>Allergies: ${data.allergies}</li>` +
        `<li>Message: ${data.message}</li></ul>`
    };
    return sgMail.send(msg).then(value => {
      console.log(`sent mail`);
      return {message: 'success'}
    }).catch(err => {
      throw new functions.https.HttpsError('internal', err.toString())
    })
 });

exports.rsvpRealtime = functions.https
  .onCall((data) => {
    return db2.ref("wedding/responses").push(data).then(value => {
      console.log(`wrote data ${value.id}`);
      return {id: value.id}
    }).catch(err => {
      throw new functions.https.HttpsError('internal', err.toString())
    });
  });
