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
  import User from '../User';

  export default class HomeScreen extends React.Component{
    static navigationOptions = {
        title:'Chat'
      }
    logout = async () => {
        await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
    }
    render(){
          return(
<View>
    <Text>{User.phone}</Text>
    <TouchableOpacity onPress = {this.logout}>
        <Text>Logout</Text>
        </TouchableOpacity>
</View>
          )
      }
  }