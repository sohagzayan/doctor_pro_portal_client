import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyCJlq8r96dU-cJHm2Scuk6yeqgWhS_s_Rg",
    authDomain: "doctor-portal-f3f93.firebaseapp.com",
    projectId: "doctor-portal-f3f93",
    storageBucket: "doctor-portal-f3f93.appspot.com",
    messagingSenderId: "80083971713",
    appId: "1:80083971713:web:7923811d0d0556ea412780"
};

const app = initializeApp(firebaseConfig);
export  const auth  = getAuth(app)
export default app