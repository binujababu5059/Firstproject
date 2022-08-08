import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,ImageBackground,TextInput,TouchableHighlight } from 'react-native'
 class FlexContent extends Component {
  render() {
    return (
      <View>
        <Text style={styles.contentStyle}>Hi My Name is {this.props.name}</Text>
      </View>
    )
  }
}


export default class Flexbox extends Component{
    constructor(){
        super();
        this.state={
            main_text:'Hello',
            sub_text :'React'
        }
    }
    componentDidMount(){
        console.log('the username is : ',this.props.route.params.username)
    }
updateText(){
    this.setState({
        main_text:'Hi (Hello updated)',
        sub_text:'Framework(React updated)'
    })
}
render(){
    return(
        <View style={styles.container}>
            <Text style={styles.text}>{this.state.main_text}</Text>
            <Text style={styles.text}>{this.state.sub_text}</Text>
            <Text style={styles.text}>Native</Text>
            <TouchableHighlight style={styles.button}
            underlayColor = 'red'
            onPress={()=>this.updateText()} >
                <Text style={styles.buttonText}>UPDATE</Text>
            </TouchableHighlight>
            <FlexContent name={this.props.route.params.username}></FlexContent>
        </View>
    )
}

}

const styles= StyleSheet.create({
    container:{
     height:'100%',
     width:'100%',
       justifyContent:'center',
       alignSelf:'center',
       backgroundColor:'#fff'
    },
    text:{
        fontSize:24,
        color:"#000",
        fontWeight:"bold",
        alignSelf:'center'
    },
    button:{
        width:'60%',
        height:55,
        backgroundColor:"#fff",
        alignSelf:'center',
        justifyContent:'center',
        borderRadius:6,
        marginTop:20,
        borderWidth:1
    },
    buttonText:{
        fontSize:18,
        color:"#000",
        fontWeight:"bold",
        alignSelf:'center'
    
    },
    contentStyle:{
        fontSize:18,
        color:"red",
        alignSelf:'center'
    }
})