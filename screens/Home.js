import React, { useEffect } from 'react';
import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import colors from '../colors';
import{FontAwesome} from'@expo/vector-icons'
import{Entypo} from '@expo/vector-icons'


const catimgUrl="https://th.bing.com/th/id/OIP.L51qzGCLtslIZn42Q0BFhgHaE7?w=266&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7"
const Home = () =>{
 const navigation=useNavigation();
     useEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>(
                <FontAwesome name="search" size={24} color={colors.black} style={{marginLeft:15}}/>

            ),
            headerRight:()=>(
                
                <Image source={{uri:catimgUrl}}
                style={
                    {
                        width:40,
                        height:40,
                        marginRight:15,
                    }
                }/>
        ),
            });
        },[navigation]);
     
  
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={require("../assets/R.png")} />
            <TouchableOpacity
                onPress={()=>navigation.navigate("Chat")}
                style={styles.chatButton}>
                    <Entypo name="chat" size={29} color={colors.lightGray}/>
            </TouchableOpacity>

        </View>

    );
};
export default Home;
const styles = StyleSheet.create({
    container: {
      flex:1,
      justifyContent:"flex-end"
      ,alignItems:"flex-end",
      backgroundColor:"#fff"
    },
    logo:{
      width: 280,
      height: 280,
      marginLeft: '15%',
      marginTop: '10%'
    },
    text: {
      color: 'white',
      marginTop: '-55%',
      marginLeft: '26%',
      fontSize:47
    },
    chatButton: {
      backgroundColor: colors.primary,
      height:50,
      width: 50,
      alignItems:"center",
      borderRadius: 25,
      justifyContent: 'center',
      shadowColor:colors.primary,
      shadowOffset:{
        width:0,
        height:2
      },
      shadowOpacity:.9,

    },
    image: {
        width:"97%",
        height:"70%",
        position:"absolute",
        top:50,
        bottom:0,
        backgroundColor:"#fff",
        // borderTopRightRadius:600,
    
      },
    
});