// Import Firebase modules from the Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDqay72Yz6e24fOb8WjzrFjokXcQevpmQo",
  authDomain: "code-head-hub.firebaseapp.com",
  projectId: "code-head-hub",
  storageBucket: "code-head-hub.appspot.com",
  messagingSenderId: "448535687844",
  appId: "1:448535687844:web:c6d15585b2b4d18fbd6c31",
  measurementId: "G-6YNZ5C989H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);  // Initialize Firestore


// Handle form submission
export default async function insertDataToFireBase (event) {
  event.preventDefault(); 

  // Get form data from  signup form
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById('password').value
  const userType = document.getElementById('user-type').value
 


  // Insert user data into Firestore
  try {
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      password: password,
      userType:  userType
    });
    alert("User added successfully with ID: " + docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error adding user: " + e.message);
  }

  //  reset the form
  document.getElementById("signup-form").reset();
};
