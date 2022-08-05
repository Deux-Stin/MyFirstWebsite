// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmTngTj-B20rj_M5FDPUOYtEt200S2Kek",
  authDomain: "mywebhosting-64186.firebaseapp.com",
  projectId: "mywebhosting-64186",
  storageBucket: "mywebhosting-64186.appspot.com",
  messagingSenderId: "714492160420",
  appId: "1:714492160420:web:d1a4099f134128ba20b931"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("mywebhosting");
  
  document.getElementById("contact").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("email");
    var msgContent = getElementVal("message");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".SentAlert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".SentAlert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contact").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };