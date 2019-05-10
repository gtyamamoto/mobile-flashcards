import React from 'react';
import {Text,View,TouchableOpacity,StyleSheet} from 'react-native'

export default (props)=>{
   
   
     return (
        <TouchableOpacity onPress={props.onPress} style={styles.itemList}>
        <View>
          <Text style={styles.title}>{props.item.title}</Text>
          <Text style={styles.cards}>{props.item.questions.length} cards</Text>
        </View>
      </TouchableOpacity>
     )
}
const styles = StyleSheet.create({
    itemList:{
        flex:1,
        padding:20,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center'
    },  
    title:{
        flex:1,
        fontSize:14,
        color:'black'
       
    },
    cards:{
        flex:1,
        marginTop:5,
        fontSize:10,
        color:'grey'
       
    }
})