import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"   

const firebaseConfig = {
  apiKey: "AIzaSyBKjdfmy8jnQcMHCdTKxN1YjmLXnI9H7m8",
  authDomain: "simiyu-gram-ed4fb.firebaseapp.com",
  projectId: "simiyu-gram-ed4fb",
  storageBucket: "simiyu-gram-ed4fb.appspot.com",
  messagingSenderId: "1052542337169",
  appId: "1:1052542337169:web:129b8faab292cd74be7f30"
}

const app = initializeApp(firebaseConfig),
      auth = getAuth(app),
      firestore = getFirestore(app),
      storage = getStorage(app)

export { auth, firestore, storage }