import { FIREBASE_CONFIG } from './constants'
import { initializeApp } from 'firebase/app'
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore'

const firebaseConfig = JSON.parse(FIREBASE_CONFIG)
export const firebaseApp = initializeApp(firebaseConfig)

export const firebaseDb = initializeFirestore(firebaseApp, {localCache: persistentLocalCache({})})
