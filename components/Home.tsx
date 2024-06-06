import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { Button, StyleSheet, View } from 'react-native'
import { RootStackParamList } from '../App'

export default function Home() {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>()

  return (
    <View style={styles.container}>
      <Button title='Firebase Demo' onPress={() => navigation.navigate('FirebaseDemo')} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})