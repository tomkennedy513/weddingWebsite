const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();
const db2 = admin.database();
const sgMail = require('@sendgrid/mail');


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//



exports.rsvp = functions.https
  .onCall((data, context) => {
    console.log(context);
    console.log(data);
    return db.collection('responses').add(data)
});

exports.sendmail = functions.https
  .onCall((data, context) => {
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
    return sgMail.send(msg)
 });


exports.rsvp2 = functions.https
  .onCall((data, context) => {
    const ref = db2.ref("wedding/responses");
    console.log(data);
    return ref.push(data)
  });
