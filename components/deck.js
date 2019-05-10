import React from 'react';
import {Text,View} from 'react-native'
import {useStateValue} from '../utils/context';
export default ({navigation})=>{
    const [{activeDeck},dispatch] = useStateValue();
     return (
        <View>
            <Text>{activeDeck.title}</Text>
            <Text>{navigation.getParam('name','404')}</Text>
        </View>
     )
}