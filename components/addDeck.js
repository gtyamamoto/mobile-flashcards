import React,{useState} from 'react';
import {Text,View,StyleSheet,TouchableOpacity,TextInput} from 'react-native'
import { withNavigation } from 'react-navigation';
import {useStateValue} from '../utils/context';
import {addNewDeck} from '../utils/api';
import {black,white,gray} from '../utils/colors'
import { setDeck } from '../actions';
export default withNavigation(({navigation})=>{
   
    const [title,setTitle]= useState('');
    const [{activeDeck},dispatch] = useStateValue();
    const onAddNewDeck = async ()=>{
        const addDeckOps = await addNewDeck(title);
        setTitle('');
        if(addDeckOps.msg){
            alert(addDeckOps.msg);
        }else{
            
            dispatch(setDeck(addDeckOps))
           navigation.push('Deck',{name:title})
        }
    }
     return (
        <View style={styles.container}>
            <Text style={styles.header}>What is the title of your new deck?</Text>
            <TextInput
            placeholder="enter the title of deck here"
        style={styles.inputTitle}
        onChangeText={(text) => setTitle(text)}
        value={title}
      />
            <TouchableOpacity style={styles.button} onPress={onAddNewDeck}>
            <Text >Submit</Text>   
            </TouchableOpacity>
        </View>
     )
})

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignItems: 'center',
    justifyContent: 'center',
    },
    header:{
        fontSize:16,
    },
    inputTitle:{
        height: 40,
         borderColor: gray,
          borderWidth: 1
    },
    button:{
        backgroundColor:black,
        textAlign:'center',
        color:white,
        marginTop:5,
        padding:10,

    }
})