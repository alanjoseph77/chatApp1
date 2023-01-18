import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import { signInWithEmailAndPassword } from "firebase/auth";
import{auth} from"../config/firebase";




export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onHandleLogin = () => {
    if (email !== '' && password !== '') {
     signInWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Login success'))
        .catch(err => console.log(`Login err: ${err}`));
    }
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/downloads.jpg")} />
      <Text style={styles.title}>Welcome back!</Text>
      
      <TextInput
        style={styles.input}
        placeholder='Enter email'
        autoCapitalize='none'
        keyboardType='email-address'
        textContentType='emailAddress'
        autoFocus={true}
        value={email}
        onChangeText={text => setEmail(text)}
      />
      
        
      <TextInput
        style={styles.input}
        placeholder='Enter password'
        autoCapitalize='none'
        autoCorrect={false}
        secureTextEntry={true}
        textContentType='password'
        value={password}
        onChangeText={text => setPassword(text)}
      />
    {/* <TouchableOpacity style={styles.loginBtn} onPress={onHandleLogin}>
      <Button onPress={onHandleLogin} color='#f57c00' title='Login' />
      </TouchableOpacity> */}
      <TouchableOpacity style={styles.loginBtn} onPress={onHandleLogin}>
        <Text style={styles.loginText}>Login</Text> 
      </TouchableOpacity>

      <Button 
        onPress={() => navigation.navigate('Signup')}
        title='Dont have an account? Signup'
        color='none'

      />
      {/* <TouchableOpacity onPress={()=>navigation.navigate("Signup")}>
            <Text style={{fontSize:14,fontWeight:"600" ,color:"red"}}>already have an account? Login</Text> 
      </TouchableOpacity>  */}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
    paddingHorizontal: 12
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: 'blue',
    alignSelf: 'center',
    paddingBottom: 24
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 30,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 900,
    padding: 12
  },
  image: {
    width:"110%",
    height:"100%",
    position:"absolute",
    top:50,
    bottom:0,
    backgroundColor:"#fff",
    borderTopRightRadius:600,
    borderBottomRightRadius:600,

  },
  loginBtn: {
    width: "-20%",
    borderRadius: 35,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "red",
  },
});