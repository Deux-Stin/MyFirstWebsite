//Config can be found in your Project Settings in Firebase Console

const firebaseConfig = {
  apiKey: "AIzaSyCmTngTj-B20rj_M5FDPUOYtEt200S2Kek",
  authDomain: "mywebhosting-64186.firebaseapp.com",
  databaseURL: "https://mywebhosting-64186-default-rtdb.firebaseio.com",
  projectId: "mywebhosting-64186",
  storageBucket: "mywebhosting-64186.appspot.com",
  messagingSenderId: "714492160420",
  appId: "1:714492160420:web:d1a4099f134128ba20b931",
  // The value of `databaseURL` depends on the location of the database
  databaseURL: "https://mywebhosting-64186-default-rtdb.firebaseio.com/",
};

firebase.initializeApp(firebaseConfig);

var messagesRef = firebase.database().ref("messages");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getInputVal("name");
  var email = getInputVal("email");
  var message = getInputVal("message");
  var date = formatedTimestamp();

  if (name.trim() == "" || email.trim() == "" || message == "") {
    alert("Merci de remplir tous les champs si vous espérez un retour :).");
  } else {
    saveMessage(name, email, message, date);
    alert("One small step for you, one giant leap for my mailing box ! Thanks :)");
    document.getElementById("email-form").reset();
  }
}

function getInputVal(id) {
  return document.getElementById(id).value;
}

function saveMessage(name, email, message, date) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    traité: 0,
    name: name,
    email: email,
    message: message,
    date: date,
  });
}

const formatedTimestamp = () => {
  const d = new Date()
  const date = d.toISOString().split('T')[0];
  const time = d.toTimeString().split(' ')[0];
  return `${date} ${time}`
}