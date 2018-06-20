const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

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
        data: data,
      }
  });
});

