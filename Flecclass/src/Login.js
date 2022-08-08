import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,ImageBackground,TextInput,TouchableHighlight } from 'react-native'
export default class Login extends Component {
    constructor(){
        super();
            this.state={
                name:null
            }
        }

        updateValue(username){
                //console.log(username)
                this.setState({name:username})
        }
    
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.textView}>Welcome to React Native journey</Text>
      <TextInput style={styles.inputView}
       placeholder='Username'
       placeholderTextColor="grey"
      maxLength={10}
      onChangeText={(username)=>this.updateValue(username)}
      ></TextInput>
        <TextInput style={styles.inputView}
       placeholder='Password'
       placeholderTextColor="grey"
      secureTextEntry={true}
      ></TextInput>
      <TouchableHighlight style={styles.buttonView}
      underlayColor = 'transparent'
      onPress={()=>this.props.navigation.navigate('Flexbox',{username:this.state.name}) } >
          <Text style={styles.buttonText}>Login</Text>
      </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container:{
         height:'100%',
         width:'100%',
         justifyContent:'center',
       backgroundColor:"#fff",
       alignItems:'center'

    },
    textView:{
        fontSize:20,
        fontWeight:'bold',
    
    },
    inputView:{
        width:'80%',
        height:55,
        borderWidth:1,
        borderColor:"grey",
        marginTop:50

    },
    buttonText:{
        fontSize:20,
        fontWeight:'bold',
        color:"#000",
  alignSelf:'center'

    },
    buttonView:{
        height:40,
        width:'70%',
        borderWidth:1,
        marginTop:30  
 }
})