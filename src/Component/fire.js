import firebase from 'firebase/compat/app';

const firebaseConfig = {
    apiKey: "AIzaSyB4YxjXKE3MUohUyS-CIMFjAE2BUku0xOA",
    authDomain: "orient-college.firebaseapp.com",
    projectId: "orient-college",
    storageBucket: "orient-college.appspot.com",
    messagingSenderId: "304379449441",
    appId: "1:304379449441:web:97796a070da4afd6039a20",
    measurementId: "G-CBBB30W9D8"
  };

  const fire=firebase.initializeApp(firebaseConfig);
  export default fire;