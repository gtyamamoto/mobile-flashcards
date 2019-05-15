import {AsyncStorage} from 'react-native'
const API_KEY = 'flashcards:decks';
import _ from 'lodash'
//route to add new deck at local storage
export async function addNewDeck(title){
  const decks = await AsyncStorage.getItem(API_KEY);
  if(!decks) {//theres no deck
      await AsyncStorage.setItem(API_KEY,JSON.stringify({
        [title]:{
            title,
            questions:[]
        }
      }))
    return {title,questions:[]};
   

  }
  //title already included
  if(decks[title]){
      return {msg:'deck already exists'};
  }
  else{ // theres decks but not with the given name
    await AsyncStorage.mergeItem(API_KEY,JSON.stringify({
        [title]:{
            title,
            questions:[]
        }
    }))
    return {title,questions:[]};
  }

}
//get deck information
export async function getDeck(id){
    const decks = JSON.parse(await AsyncStorage.getItem(API_KEY));
    if(!decks) return null;//no decks added
    if(!decks[id]) return null; // no deck with given id
    return decks[id];
}
//add a card to a deck
export async function addCardToDeck(title,card){
  const decks = JSON.parse(await AsyncStorage.getItem(API_KEY));
  if(!decks) return null;//no decks added
  if(!decks[title]) return null; // no deck with given id
  decks[title].questions.push(card);
  await AsyncStorage.mergeItem(API_KEY,JSON.stringify({
    [title]:decks[title]
}))
return decks[title];
}
export async function getDecks(){ //array version of cards
 
  const cardData = JSON.parse(await AsyncStorage.getItem(API_KEY));

    return cardData
}