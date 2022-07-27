import { initializeApp } from "firebase/app";
import { getFirestore ,getDocs, collection, query} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBoUO_d4yTssEXpRgIfCO2clT4l-NLLEns",
    authDomain: "chalilo-ecommerce.firebaseapp.com",
    projectId: "chalilo-ecommerce",
    storageBucket: "chalilo-ecommerce.appspot.com",
    messagingSenderId: "730562972919",
    appId: "1:730562972919:web:77dd77753293d1bfaa97f2"
}

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);