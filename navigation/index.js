import {
  createStackNavigator,
  createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import React from 'react';
import {TouchableOpacity,Text} from 'react-native'
import DeckList from "../components/decksList";
import { white, black, red } from "../utils/colors";
import AddDeck from "../components/addDeck";
import AddQuiz from "../components/addQuiz";
import Deck from "../components/deck";
import Quiz from "../components/quiz";
const Tabs = createBottomTabNavigator(
  {
    Decks: {
      screen: DeckList,

    },
    AddDeck: {
      screen: AddDeck,
    
    }
  },
  {
    tabBarOptions:{
    
      style:{
        height:56,
        alignContent:'center',
        backgroundColor:black,
        color:white,
        shadowColor : 'rgba(0,0,0,0.3)',
        shadowOffset:{
          width:0,
          height:3
        },
        shadowRadius:6,
        shadowOpacity:1
      }
    },
    navigationOptions:{
      header:null
    }
  }
);
const MainNavigator = createStackNavigator({
  Home: {
    screen: Tabs
  },
  Deck: {
    screen: Deck,
    path: "deck/:name",
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.name}`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    })
  },
  AddQuiz: {
    screen: AddQuiz,
    path: "newcard/:deck",
    navigationOptions: ({ navigation }) => ({
      title: `Add a Card to the  Deck ${navigation.state.params.deck}`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    })
  },
  Quiz: {
    screen: Quiz,
    path: "quiz/:deck",
    navigationOptions: ({ navigation }) => ({
      title: `Quiz`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    })
  }

},{ initialRouteName: 'Home' });
export default createAppContainer(MainNavigator)