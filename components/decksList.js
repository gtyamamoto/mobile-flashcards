import React,{useEffect,useState} from 'react';
import {Text,View,FlatList} from 'react-native'
import {getDecks} from '../utils/api';
import _ from 'lodash';
import DeckItem from './deckItem'
import { useStateValue } from '../utils/context';
import {AppLoading} from 'expo'
import {  fetchDecks, setDeck } from '../actions';
//listing component for the decks
export default (props)=>{
  //global state and gets decks
    const [{decks},dispatch] = useStateValue()
    //local state to state if the request were fully loaded
    const [isDeckLoading,setIsDeckLoading] = useState(true)
    //event press handler for each deck in flat list to show the view in the stack deck/:name
    const onPressDeck = (item)=>{
        dispatch(setDeck(item))
        props.navigation.push('Deck',{name:item.title})
    }
    //initial request for the api to get all decks info
    const deckAsyncSetter = async ()=>{
        const decksData = await getDecks();
        setIsDeckLoading(false);
        dispatch(fetchDecks(decksData))
    }
    useEffect(() => {
        deckAsyncSetter();
      }, []);
    
     return (
         isDeckLoading ? <AppLoading />
         :
        <FlatList
        data={_.toArray(decks)}
        keyExtractor={item => item.title}
        renderItem={({item})=>(<DeckItem item={item} onPress={()=>{onPressDeck(item)}} />)}
      />
     )
}