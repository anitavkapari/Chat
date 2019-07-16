/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React  from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,AsyncStorage,
  View,TextInput,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import User from '../User';

export default class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
	this.state={
		name:'',
		phone:'',
	}
  }
	handleChange = key => val =>{
		this.setState({   [key]: val})
  }
  /*componentWillMount(){
AsyncStorage.getItem('userPhone').then(val=>{
  if(val){
    this.setState({phone:val})
  }
})
  }*/
	submitForm = async () =>{
    if(this.state.phone.length < 10){
      alert('Error','Wrong Phone Number')
    }else if(this.state.name.length < 3){
    alert('Error','Wrong name')
    }else {
await AsyncStorage.setItem('userPhone',this.state.phone);
User.phone = this.state.phone;
this.props.navigation.navigate['Test'];
    }
		//alert(this.state.phone +'\n'+ this.state.name )
	}
	render(){
  return (

      <View style={styles.body}>
              <TextInput 
			  placeholder="phone Number"
			  keyboardType="number-pad"
			  value={this.state.phone}
			  onChangeText={this.handleChange('phone')}
			  style={styles.sectionDescription}/>
			  
			  <TextInput 
			  placeholder="Name"
			  			  value={this.state.name}
			  onChangeText={this.handleChange('name')}
			  style={styles.sectionDescription}/>
			  <TouchableOpacity
			  onPress={this.submitForm}>
			  <Text style={styles.text}>Save</Text>
			  </TouchableOpacity>
			            </View>

  );
}
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },

 body: {
    backgroundColor: Colors.linkColor,
	
  },
  text:{
    color:'darkblue',
    fontSize:20,
  },
  sectionDescription: {
    color: Colors.dark,
	padding:5,
	margin:10,
	borderColor:Colors.bgColor,
	borderWidth:1,
  },
  highlight: {
    fontWeight: '700',
  },
});

