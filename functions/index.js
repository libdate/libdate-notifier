const functions = require('firebase-functions');

// The Firebase Admin SDK to access the Firebase Realtime Database. 
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
    var payload = {
        data: {
            score: "850",
            time: "2:45"
        }
    };

    return admin.messaging().sendToDevice(request.query.token, payload);
});
