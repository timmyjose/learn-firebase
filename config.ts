import { FIREBASE_CONFIG } from './constants'
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = JSON.parse(FIREBASE_CONFIG)
console.log('firebaseConfig = ', firebaseConfig)

export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseDb = getFirestore(firebaseApp)

