import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getMessaging, getToken } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging.js";
import { getFirestore, collection, getDocs, addDoc, deleteDoc, query, where } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js";
import { getAuth, signInAnonymously } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const firebaseConfig = { apiKey: "AIzaSyDg3kvnwtVz36DTo8uebmUMBt2qbH-8PBo", authDomain: "schdl-6c6a8.firebaseapp.com", databaseURL: "https://schdl-6c6a8-default-rtdb.firebaseio.com", projectId: "schdl-6c6a8", storageBucket: "schdl-6c6a8.appspot.com", messagingSenderId: "122248476714", appId: "1:122248476714:web:a9e69e00060e812df32b53", measurementId: "G-NGZDM5VJE4" };
const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
const db = getFirestore(app);
const auth = getAuth(app);
const subscribeButton = document.getElementById('subscribe');
const unsubscribeButton = document.getElementById('unsubscribe');
const status = document.getElementById('status');
subscribeButton.addEventListener('click', subscribeToNotifications);
unsubscribeButton.addEventListener('click', unsubscribeToNotifications);
signInAnonymously(auth).then(() => {
    checkSubscription();
})
function subscribeToNotifications() {
    Notification.requestPermission()
        .then(() => handleTokenRefresh())
        .catch((err) => {
            console.log('An error occurred while requesting permission: ', err);
        });
}
function handleTokenRefresh() {
    getToken(messaging, { vapidKey: 'BN_a96VRkgUiymboAEoeIIGpd4_W2FIF9AJAAS-IhDxUettqcUZH12hQahL65abMy8NZ4P3JxVxgqXQmUv2Cs6k' })
        .then(token => {
            // console.log('Token:', token);
            const tokenRef = collection(db, "tokens");
            const q = query(tokenRef, where("token", "==", token), where("uuid", "==", auth.currentUser.uid));
            getDocs(q)
                .then((querySnapshot) => {
                    if (querySnapshot.empty) {
                        const docRef = addDoc(tokenRef, {
                            token: token,
                            uuid: auth.currentUser.uid
                        });
                        checkSubscription();
                    } else {
                    }
                })
        });
}

function unsubscribeToNotifications() {
    getToken(messaging, { vapidKey: 'BN_a96VRkgUiymboAEoeIIGpd4_W2FIF9AJAAS-IhDxUettqcUZH12hQahL65abMy8NZ4P3JxVxgqXQmUv2Cs6k' })
        .then(token => {
            const q = query(collection(db, "tokens"), where("token", "==", token));
            getDocs(q)
                .then((querySnapshot) => {
                    querySnapshot.forEach((doc) => {
                        deleteDoc(doc.ref);
                    });
                    document.getElementById("status").innerHTML = "not subscribed!";
                })
        })
}

function checkSubscription() {
    getToken(messaging, { vapidKey: 'BN_a96VRkgUiymboAEoeIIGpd4_W2FIF9AJAAS-IhDxUettqcUZH12hQahL65abMy8NZ4P3JxVxgqXQmUv2Cs6k' })
        .then(token => {
            try {
                const q = query(collection(db, "tokens"), where("uuid", "==", auth.currentUser.uid));
                getDocs(q)
                    .then((querySnapshot) => {
                        querySnapshot.forEach((doc) => {
                            if (doc.data().token !== token) {
                                deleteDoc(doc.ref);
                                handleTokenRefresh();
                            } else if (doc.data().token === token) {
                                document.getElementById("status").innerHTML = "subscribed!";
                            }
                        });
                    })
            } catch (error) { }
        })
}

