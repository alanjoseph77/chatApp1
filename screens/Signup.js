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
import {createUserWithEmailAndPassword} from "firebase/auth";
import{auth} from"../config/firebase";




export default function Signin({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  const onHandleSignup = () => {
    if (email !== '' && password !== '') {
  createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log('Signup success'))
        .catch(err => console.log(`Login err: ${err}`));
    }
  };



  return (
    
    <View style={styles.container}>
      <Image style={styles.image} source={require("../assets/paithalmala.jpg")} /> 
      
      
      <Text style={styles.title}>Signup</Text>
      
      
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          keyboardType="email-address"
          textContentType="emailadress"
          onChangeText={(email) => setEmail(email)}
        /> 
      </View> 
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          autoCorrect={false}
         
          onChangeText={(password) => setPassword(password)}
        /> 
      </View> 
{/*       
      <TouchableOpacity style={styles.loginBtn} onPress={onHandleLogin}>
        <Text style={styles.loginText}>Signup</Text> 
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>navigation.navigate("Login")}>
            <Text style={{fontSize:14,fontWeight:"600" ,color:"red"}}>already have an account? Login</Text> 
      </TouchableOpacity>  */}
     
    {/* <TouchableOpacity style={styles.loginBtn} onPress={onHandleSignup}>
        <Text style={styles.loginText}>Signup</Text> 
      </TouchableOpacity> */}

      {/* <Button 
        onPress={() => navigation.navigate('Login')}
        title='already have an account? login'
        

      /> */}
      <Button onPress={onHandleSignup} color='#f57c00' title='Signup' />
      <Button
        onPress={() => navigation.navigate('Login')}
        title='Go to Login'
      />
    </View> 
    
    
    
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width:"100%",
    height:"100%",
    position:"absolute",
    bottom:100,
    backgroundColor:"#fff",
    borderBottomLeftRadius:460,
    

  },
  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "red",
  },
  title: {
    color: "gray",
    textDecorationColor: "yellow",
    textShadowColor: "red",
    textShadowRadius: 1,
    margin: 24,
    fontWeight:"600",
    fontSize:24
    
  },
  srt: {
    flex: 1,
    backgroundColor: "#3B5323",
  },
});