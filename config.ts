import { FIREBASE_CONFIG } from './constants'
import { getFirestore } from '@react-native-firebase/firestore'
import { initializeApp } from '@react-native-firebase/app'

const firebaseConfig = JSON.parse(FIREBASE_CONFIG)

initializeApp(firebaseConfig, {
  persistence: true
})

export const firestore = getFirestore()