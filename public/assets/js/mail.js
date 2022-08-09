// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-app.js";
import { getDatabase, ref, set, get, child } from "https://www.gstatic.com/firebasejs/9.6.11/firebase-database.js";
 
// Paste the code from Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCmTngTj-B20rj_M5FDPUOYtEt200S2Kek",
  authDomain: "mywebhosting-64186.firebaseapp.com",
  projectId: "mywebhosting-64186",
  storageBucket: "mywebhosting-64186.appspot.com",
  messagingSenderId: "714492160420",
  appId: "1:714492160420:web:d1a4099f134128ba20b931",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://mywebhosting-64186-default-rtdb.firebaseio.com/"
};
 
// Initialize Firebase
const app = initializeApp(firebaseConfig);
 
// Get a reference to the database service
const db = getDatabase(app);
 
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    set(ref(db, 'users/' + Math.random().toString(36).slice(2, 7)), {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value,
        date: formatedTimestamp()
    });
 
    alert('Your form is submitted');
    document.getElementById('contactForm').reset();
});

const formatedTimestamp = ()=> {
  const d = new Date()
  const date = d.toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];
  return `${date} ${time}`
}
