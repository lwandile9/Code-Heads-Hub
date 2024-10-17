 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-firestore.js";


const firebaseConfig = {
  apiKey: "AIzaSyDqay72Yz6e24fOb8WjzrFjokXcQevpmQo",
  authDomain: "code-head-hub.firebaseapp.com",
  projectId: "code-head-hub",
  storageBucket: "code-head-hub.appspot.com",
  messagingSenderId: "448535687844",
  appId: "1:448535687844:web:c6d15585b2b4d18fbd6c31",
  measurementId: "G-6YNZ5C989H"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


async function insertDataToFireBase(event) {
  event.preventDefault(); 


  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById('password').value;
  const userType = document.getElementById('user-type').value;

  try {
   
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email,
      password: password,
      userType: userType
    });
    alert("User added successfully with ID: " + docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
    alert("Error adding user: " + e.message);
  }

  // Reset the form 
  document.getElementById("signup-form").reset();
}

// Function to fetch all users from Firestore
export default async function fetchUsers() {
  try {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} =>`, doc.data());  // Process each user document
    });
  } catch (e) {
    console.error("Error fetching users: ", e);
  }
}

// Call the fetchUsers function to log all users when the page loads



//    document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;