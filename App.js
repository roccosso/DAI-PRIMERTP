import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Pressable, StyleSheet, Text, View, TextInput, SafeAreaView, TouchableOpacity } from 'react-native';

export default function App() {

  const [text, setText] = useState('')

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.ContainerArriba}>
        <TextInput
          editable
          maxLength={20}
          style={styles.input}
          placeholder="Ingrese un texto"
          value={text}
          onChangeText={text => setText(text)}
        />  
      </View >
      <View style={styles.ContainerAbajo}>
        <TouchableOpacity style={[styles.touchableOpacity]} onPress={() => setText('')} >
        <Text style={[styles.textButton]}>Resetear</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FF0000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ContainerArriba: {flex: 5,backgroundColor: 'white',},  
  ContainerAbajo: {flex: 4, backgroundColor: 'blue',},  
  Container: {
    backgroundColor: '#0000FF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  touchableOpacity: {
    marginTop: 10,
    width: '90%',
    height: 60,
    backgroundColor: 'black',
    borderRadius: 15,
  
  },
  textButton: {
    color: 'white',
    width: '100%',
    textAlign: 'center',

    fontSize: 15,
  },
  textPressable: {
    color: 'black',
    width: '100%',
    textAlign: 'center',

    fontSize: 15,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,

  },
});