import {
  createStackNavigator,
  createBottomTabNavigator,
    createAppContainer
} from "react-navigation";
import React from 'react';
import DeckList from "../components/decksList";
import { white, black, red } from "../utils/colors";
import AddDeck from "../components/addDeck";
import AddCard from "../components/addCard";
import Deck from "../components/deck";
import Quiz from "../components/quiz";

//tab component navigation only for decks and add deck
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
//stack main component for navigation
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
  AddCard: {
    screen: AddCard,
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
    path: "quiz",
    navigationOptions: ({ navigation }) => ({
      title: `Quiz`,
      headerTintColor: white,
      headerStyle: {
        backgroundColor: black
      }
    })
  }

},{ initialRouteName: 'Home' });
//exports as a component to be rendered in the App.js
export default createAppContainer(MainNavigator)