import React from 'react';
import { StyleSheet} from 'react-native';
import Navigator from './navigation'
import reducer from './reducers'
import { StateProvider } from './utils/context';
import {setLocalNotification} from './utils/notifications';
//Store simulation using react context and react hooks
const initialState = {
  decks:{},
  activeDeck:null
}
export default class App extends React.Component {
  //create local notifications
  componentDidMount(){
    setLocalNotification()
  }
  render() {
    return (
      <StateProvider initialState = {initialState} reducer={reducer}>
 <Navigator  style={styles.container}/>
      </StateProvider>
       
      
       
    
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
