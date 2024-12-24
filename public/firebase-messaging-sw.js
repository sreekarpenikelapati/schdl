importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');
const firebaseConfig = { apiKey: "AIzaSyDg3kvnwtVz36DTo8uebmUMBt2qbH-8PBo", authDomain: "schdl-6c6a8.firebaseapp.com", databaseURL: "https://schdl-6c6a8-default-rtdb.firebaseio.com", projectId: "schdl-6c6a8", storageBucket: "schdl-6c6a8.appspot.com", messagingSenderId: "122248476714", appId: "1:122248476714:web:a9e69e00060e812df32b53", measurementId: "G-NGZDM5VJE4" };
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();
messaging.onBackgroundMessage(function (payload) { self.registration.showNotification(); });
