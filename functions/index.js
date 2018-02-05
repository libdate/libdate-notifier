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

    // Send a message to the device corresponding to the provided
    // registration token.
    admin.messaging().sendToDevice(request.params.token, payload)
        .then((response) => {
            console.log("Successfully sent message:", response);
            return response;
        })
        .catch((error) => {
            console.log("Error sending message:", error);
        });

    response.send("Hello from Firebase!");
});
