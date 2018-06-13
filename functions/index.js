const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();
const db = admin.firestore();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https
  .onRequest((request, response) => {
    const body = request.body;
    return db.collection('test').add(body).then(ref => {
      console.log('Added document with ID: ', ref.id);
      return response.json({
        id: ref.id,
        text: body
      })
  });
});

