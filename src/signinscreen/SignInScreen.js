import React,{Component} from "react";
import {View, Button, TextInput, Text,ScrollView,Image} from 'react-native'
import Logo from './assets/images/Logo.jpeg';

class App extends React.Component {
  constructor()  {
    super();
    this.state = {
      username:'',
      usernameError:'',
      usernameError1:'',
      password:'',
      passwordError:'',
     
    }
  }
submit()
{
  let rjx=/^[a-zA-Z]+$/;
  let isValid=rjx.test(this.state.username) 
  console.warn(isValid)
  if(!isValid) 
  {
    this.setState({usernameError1:"Empname field must be alphabet "})
  }
  else
  {
    this.setState({usernameError1:""})
  }
}

passwordValidator()
{
  if(this.state.password=="")
  {
    this.setState({passwordError:"password field cannot be empty"})
  }
  else
  {
    this.setState({passwordError:""})
  }
}

usernameValidator()
{
  if(this.state.username=="")
  {
    this.setState({usernameError:"Empname field cannot be empty"})
  }
  else
  {
    this.setState({usernameError:""})
  }
}
render() {
  return(
      <ScrollView>
    <View style={{margin:25,marginTop:100}}>
    <Image 
    source={Logo} 
    style={{ width: '50%',
    maxWidth:200,
    maxHeight: 150,}} 
    resizeMode="contain" 
    />
    
       <Text style={{fontSize: 25,
    fontWeight: 'bold',
    color: 'teal',
      padding: 20 }}>Log In To My App</Text>
      <TextInput
           placeholder="Empname"
           onBlur={()=>this.usernameValidator()}
           
           onChangeText={(text) => {this.setState({username: text})}}
           
           style={{borderWidth: 2,borderColor:'skyblue',margin: 2}}/>
        <Text style={{color:'red',marginLeft:70}}>{this.state.usernameError}</Text>  
        <Text style={{color:'red',marginLeft:70}}>{this.state.usernameError1}</Text> 

      <TextInput
           placeholder="password"
           secureTextEntry={true}
           keyboardType="numeric"
           maxLength={8}
           onBlur={()=>this.passwordValidator()}
           onChangeText={(text) => {this.setState({password: text})}}
           style={{borderWidth: 2,borderColor:'skyblue',margin: 2}}/>
           <Text style={{color:'red',fontSize: 14}}>Forgetpassword?                         Resetpassword?</Text>
            <Text style={{color:'red',marginLeft:70}}>{this.state.passwordError}</Text>   
           <View style={{margin:20,marginTop:10}}></View>
           <Button title="login"onPress={() => {this.submit()}} /> 
           <Text style={{color:'black',
         marginVertical: 10}}>If you do not have a account {' '} 
     <Text style={{ color: 'black'}}>press{' '}</Text>here<Button title 
     ="signup"onPress={() => alert(" Signup page opened")}/>
     </Text>    
           
               </View>
               </ScrollView>
  )
  }
}

export default App;