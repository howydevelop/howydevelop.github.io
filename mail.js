const firebaseConfig = {
  apiKey: "AIzaSyBij62ADLgQvTeIAkhWvi51MrCGFoBl0zI",
  authDomain: "wowtest-e61b3.firebaseapp.com",
  databaseURL: "https://wowtest-e61b3-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "wowtest-e61b3",
  storageBucket: "wowtest-e61b3.appspot.com",
  messagingSenderId: "153748552889",
  appId: "1:153748552889:web:7edca182059fa550afef68"
};

// initialize firebase
firebase.initializeApp(firebaseConfig);

// reference your database
var contactFormDB = firebase.database().ref("contactForm");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementVal("name");
  var emailid = getElementVal("emailid");
  var msgContent = getElementVal("msgContent");

  saveMessages(name, emailid, msgContent);

  //   enable alert
  document.querySelector(".alert").style.display = "block";

  //   remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  //   reset the form
  document.getElementById("contactForm").reset();
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
