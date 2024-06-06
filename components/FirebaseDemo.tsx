import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { Alert, Button, StyleSheet, Text, TextInput, View } from 'react-native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../App'
import { useState } from 'react'
import { addDoc, collection, getDocs } from 'firebase/firestore'
import { firebaseDb } from '../config'
import uuid from 'react-native-uuid'

export default function FirebaseDemo() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  const [name, setName] = useState<string>('')
  const [age, setAge] = useState<number>(0)
  const [persons, setPersons] = useState<string>('')

  const savePerson = async () => {
    try {
      await addDoc(collection(firebaseDb, 'users'), {
        id: uuid.v4(),
        name,
        age,
      })
      Alert.alert(`Saved person with name = ${name} and age = ${age}`)
    } catch (err: any) {
      Alert.alert('Error while saving person data: ', err.toString())
    }
  }

  const showPersons = async () => {
    try {
      const retrievedPersons: any[] = []
      const personsRef = await getDocs(collection(firebaseDb, 'users'))
      personsRef.forEach(person => {
        retrievedPersons.push(JSON.stringify(person.data(), null, 2))
      })

      setPersons(retrievedPersons.toString())
    } catch (err: any) {
      Alert.alert('Error while trying to retrieve persons: ', err)
    }
  }

  return (
    <View style={styles.container}>
      <Button title='Go Back' onPress={() => navigation.goBack()} />
      <TextInput
        placeholder='Enter name'
        value={name}
        onChangeText={text => setName(text)}
      />
      <TextInput
        keyboardType='numeric'
        placeholder='Enter age'
        value={age.toString()}
        onChangeText={text => setAge(parseFloat(text))}
      />
      <Button title='Save' onPress={savePerson} />
      <Button title='Retrieve' onPress={showPersons} />
      <Text>{persons}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})
