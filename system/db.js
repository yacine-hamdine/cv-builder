import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAGy70pqP0bL8ivTmAlIP5Cx7IpXz6qyRs",
    authDomain: "cv-builder-8f3b3.firebaseapp.com",
    projectId: "cv-builder-8f3b3",
    storageBucket: "cv-builder-8f3b3.appspot.com",
    messagingSenderId: "824241983990",
    appId: "1:824241983990:web:1de25a7891431e875437d7",
    measurementId: "G-GZXN00HXSX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

try {
  const docRef = await addDoc(collection(db, "cv"), {
    first: "Ada",
    last: "Lovelace",
    born: 0
  });
  console.log("Document written with ID: ", docRef.id);
} catch (e) {
  console.error("Error adding document: ", e);
}