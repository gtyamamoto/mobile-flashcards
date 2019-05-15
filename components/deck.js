import React from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {useStateValue} from '../utils/context';
import {gray,green,red,white} from '../utils/colors'
//deck component to show deck infos 
export default ({navigation})=>{
    const [{activeDeck},dispatch] = useStateValue();
    //redirect to addcard compoent
    const onAddCard = ()=>{
        navigation.push('AddCard',{deck:activeDeck.title})
    }
    //redirect to quiz component
    const onStartQuiz = ()=>{
        navigation.push('Quiz',{deck:activeDeck.title})
    }
     return (
        <View style={styles.container}>
            <Text style={styles.title}>{activeDeck.title}</Text>
            <Text style={styles.questions}>{activeDeck.questions.length} cards</Text>
          
            <TouchableOpacity onPress={onAddCard} style={styles.btnAddCard}>
                <Text style={{color:white}}>Add Card</Text>
            </TouchableOpacity>
            {activeDeck.questions.length>0 && ( <TouchableOpacity onPress={onStartQuiz} style={styles.btnStartQuiz}>
                <Text style={{color:white}}>Start Quiz</Text>
            </TouchableOpacity>)}
           
        </View>
     )
}
const styles = StyleSheet.create({
      container:{
          flex:1,
          padding:10,
          alignItems:'center',
          justifyContent:'center'
      },
      title:{
        fontSize:16,
        fontWeight:"600"
      },
      questions:{
          fontSize:12,
          color:gray
      },
      btnAddCard:{
        backgroundColor:green,
        textAlign:'center',
    
        marginTop:5,
        padding:10,

    },
    btnStartQuiz:{
        backgroundColor:red,
        textAlign:'center',
    
        marginTop:5,
        padding:10,

    },
    
})