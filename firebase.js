import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBNElBgGB9pmLjGJeB13ElT3xF80hIdRJM",
    authDomain: "my-app-76816.firebaseapp.com",
    projectId: "my-app-76816",
    storageBucket: "my-app-76816.appspot.com",
    messagingSenderId: "832793158324",
    appId: "1:832793158324:web:f83bbf11a50dc7f3276de1",
    measurementId: "G-HJNP3LCJYH"
  };
  const firebaseapp =firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const provider = new firebase,auth.GoogleAuthProvider()

const  db = firebaseapp.firestore()
export {auth,provider}
export default db

