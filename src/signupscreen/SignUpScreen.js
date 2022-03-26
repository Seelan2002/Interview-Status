import React,{Component} from "react";
import {View, Button, TextInput, Text,ScrollView } from 'react-native'


class App extends React.Component {
  constructor()  {
    super();
    this.state = {
      username:'',
      usernameError:'',
      usernameError1:'',
      email:'',
      emailError:'',
      emailError1:'',
      password:'',
    }
  }
submit()
{
  let rjx=/^[a-zA-Z]+$/;
  let isValid=rjx.test(this.state.username)
  console.warn(isValid)
  if(!isValid) 
  {
    this.setState({usernameError1:"empname field must be alphabet "})
  }
  else
  {
    this.setState({usernameError1:""})
  }
}
submit1()
{
 const rjx=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
 const isValid1=rjx.test(this.state.password)
 console.warn(isValid1)
 if(!isValid1) 
 {
   this.setState({emailError1:"pleaseinsert correct email "})
 }
 else
 {
   this.setState({emailError1:""})
 }

}
usernameValidator()
{
  if(this.state.username=="")
  {
    this.setState({usernameError:"empname field cannot be empty"})
  }
  else
  {
    this.setState({usernameError:""})
  }
}

emailValidator()
{
  if(this.state.email=="")
  {
    this.setState({emailError:"email field cannot be empty"})
  }
  else
  {
    this.setState({emailError:""})
  }
}
render() {
  return(
    <ScrollView>
    <View style={{margin:25,marginTop:100}}>
    
    
       <Text style={{fontSize: 25,
    fontWeight: 'bold',
    color: 'teal',
      padding: 20 }}>Create an Account</Text>

      <TextInput
           placeholder="enter empname"
           onBlur={()=>this.usernameValidator()}
           onChangeText={(text) => {this.setState({username: text})}}
           style={{borderWidth: 2,borderColor:'skyblue',margin: 2}}/>
        <Text style={{color:'red',marginLeft:70}}>{this.state.usernameError}</Text>  
        <Text style={{color:'red',marginLeft:70}}>{this.state.usernameError1}</Text> 
       
      <TextInput
           placeholder="enter email"
           onBlur={()=>this.emailValidator()}
           onChangeText={(text) => {this.setState({email: text})}}
           style={{borderWidth: 2,borderColor:'skyblue',margin: 2}}/>  
        <Text style={{color:'red',marginLeft:130}}>{this.state.emailError}</Text> 
        <Text style={{color:'red',marginLeft:130}}>{this.state.emailError1}</Text> 
          
      <TextInput
           placeholder="enter password"
           secureTextEntry={true}
           keyboardType="numeric"
           maxLength={5}
           onChangeText={(text) => {this.setState({password: text})}}
           style={{borderWidth: 2,borderColor:'skyblue',margin: 2}}/> 
           <View style={{margin:20,marginTop:10}}></View>
           <Button title="Signup" onPress={() =>{this.submit1()}} />  
           
           <Text style={{color:'black',
        marginVertical: 10}}>By registering, you confirming that you Accept our {' '} 
    <Text style={{ color: 'blue'}}>Terms of Use {' '}</Text>and
    <Text style={{color:'blue'}}> Privacy Policy.</Text>
    </Text>   
               </View>
               </ScrollView>
  )
  }
}

export default App;