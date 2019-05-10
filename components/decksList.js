import React,{useEffect,useState} from 'react';
import {Text,View,FlatList} from 'react-native'
import {getDecks} from '../utils/api';
import _ from 'lodash';
import DeckItem from './deckItem'
import { useStateValue } from '../utils/context';
import {AppLoading} from 'expo'
import { GET_DECKS, fetchDecks, setDeck } from '../actions';
export default (props)=>{
    const [{decks},dispatch] = useStateValue()
    const [isDeckLoading,setIsDeckLoading] = useState(true)
    const onPressDeck = (item)=>{
        dispatch(setDeck(item))
        props.navigation.push('Deck',{name:item.title})
    }
    const navigationOptions = () => {
        return {
          tabBarOnPress({ jumpToIndex, scene }) {
            // perform your logic here
            // this is mandatory to perform the actual switch
            // you can omit this if you want to prevent it
            deckAsyncSetter();
            jumpToIndex(scene.index);
          }
        };
      };
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