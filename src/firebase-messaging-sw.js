importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.1.1/firebase-messaging.js');


firebase.initializeApp({
    apiKey: "AIzaSyB9FEdOjMJl9UrB2M-NahwFmF6L0zRntpg",
    authDomain: "push-notification-demo-e6751.firebaseapp.com",
    projectId: "push-notification-demo-e6751",
    storageBucket: "push-notification-demo-e6751.appspot.com",
    messagingSenderId: "276812559187",
    appId: "1:276812559187:web:894a4319b9854af02ea7a6"
});

const messaging = firebase.messaging()