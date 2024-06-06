import { FIREBASE_CONFIG } from './constants'
import { initializeApp } from 'firebase/app'
import { getFirestore, initializeFirestore } from 'firebase/firestore'

const firebaseConfig = JSON.parse(FIREBASE_CONFIG)

export const firebaseApp = initializeApp(firebaseConfig)

// export const firebaseDb = initializeFirestore(firebaseApp, {localCache: memoryLocalCache({})})
export const firebaseDb = getFirestore(firebaseApp)
