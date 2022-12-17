
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"





const firebaseConfig = {
    apiKey: "AIzaSyCYOZ1czkknz6qsIDVTrAnPmPPvO9KNe0g",
    authDomain: "netflix-build-d544a.firebaseapp.com",
    projectId: "netflix-build-d544a",
    storageBucket: "netflix-build-d544a.appspot.com",
    messagingSenderId: "256111015485",
    appId: "1:256111015485:web:cccd290cea6e0044281c54"
  };
  


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
 const auth = firebase.auth();


 export {auth}
  export default db;
