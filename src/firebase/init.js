import { initializeApp } from 'firebase/app'
import { getFirestore }  from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyC7b0eWc7Dm4HKU0vNf0mpOetSRSFhIC0A",
    authDomain: "weather-forecast-app-c7b39.firebaseapp.com",
    projectId: "weather-forecast-app-c7b39",
    storageBucket: "weather-forecast-app-c7b39.appspot.com",
    messagingSenderId: "894524506665",
    appId: "1:894524506665:web:e0f4f103ef2c91d58c9238",
    measurementId: "G-DGKPEMPSN7"
}

initializeApp(firebaseConfig)

export const db = getFirestore()
export const auth = getAuth()