import firebase from 'firebase'
require("@firebase/firestore")
require('firebase/auth')

 const firebaseConfig = {
    apiKey: "AIzaSyBM1kv6XPK3EOYRCVUPRn4evUWMg8SwaRU",
    authDomain: "community2-b661a.firebaseapp.com",
    projectId: "community2-b661a",
    storageBucket: "community2-b661a.appspot.com",
    messagingSenderId: "1070533697499",
    appId: "1:1070533697499:web:bc363ced90e719c2f3d1fe"
  }
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.firestore()