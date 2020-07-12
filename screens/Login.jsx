import 'react-native-gesture-handler'
import React, { useState } from 'react'
import { StyleSheet, View, Text } from 'react-native'
import ViewBackground from '../components/ViewBackground'
import HeroTitle from '../components/HeroTitle'
import HeroButton from '../components/HeroButton'
import MTextInput from '../components/MTextInput'

import { login } from '../modules/authenticate'

export default function Login({ navigation }) {
  const [error, setError] = useState(false)
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')
  const authenticate = Authenticator({ setError, navigate: navigation.navigate })

  return (
    <ViewBackground>
      <View style={styles.mainWrapper}>
        <View style={ styles.topHalf }>
          <HeroTitle title="Meander" />
          <Text>{ error }</Text>
        </View>
        <View style={ styles.bottomHalf }>
          <MTextInput placeholder ="type your name" value={name} setValue={setName} maxLength={20} mutators={[s => s.toLowerCase()]} />
          <MTextInput placeholder ="type your password" value={password} setValue={setPassword} maxLength={50} secureTextEntry={true} onSubmitEditing={() => authenticate(name, password)} />
          <HeroButton title="Enter" color={ error ? '#f00' : '#fff' } onPress={() => authenticate(name, password)} />
        </View>
      </View>
    </ViewBackground>
  )
}

const Authenticator = ({setError, navigate}) => (name, password) => {
  if(login(name, password)) {
    navigate('Home')
  } else {
    setError(true)
    setTimeout(() => setError(false), 1000)
  }
}

//Style
const alignedCenter = { flex: 1, alignItems: "center", justifyContent: "center" }
const styles = StyleSheet.create({
  mainWrapper: {
    flexDirection: "column",
    flex: 1,
  },
  topHalf: {
    ...alignedCenter,
    justifyContent: "flex-end"
  },
  bottomHalf: {
    ...alignedCenter,
    paddingTop: 50
  },
})
