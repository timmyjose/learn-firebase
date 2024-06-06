import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './components/Home'
import FirebaseDemo from './components/FirebaseDemo'

const Stack = createNativeStackNavigator()

export type RootStackParamList = {
  Home: {} | undefined,
  FirebaseDemo: {} | undefined
}


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='FirebaseDemo' component={FirebaseDemo} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}