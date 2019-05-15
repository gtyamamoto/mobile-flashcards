import React from 'react'
const NOTFICATION_KEY ="mobileflashcards:notifications";
import {Permissions, Notifications} from 'expo'
import {AsyncStorage} from 'react-native'
//notification structure and configs
export function createNotification(){
    return {
      title:'Study your cards',
      body:'dont forget study and review contents from mobile Flashcards!',
      ios:{
        sound:true
      },
      android:{
        sound:true,
        priority:"high",
        sticky:false,
        vibrate:true
      }
    }
}
//clear local notification
export function clearLocalNotification(){
  return AsyncStorage.removeItem(NOTFICATION_KEY)
  .then(Notifications.cancelAllScheduledNotificationsAsync)
}
//set permissions and conigure in async storage
export function setLocalNotification(){
    AsyncStorage.getItem(NOTFICATION_KEY)
    .then(JSON.parse)
    .then((data)=>{
      if(data==null){
        Permissions.askAsync(Permissions.NOTIFICATIONS)
        .then(({status})=>{
          if(status=='granted'){
            Notifications.cancelAllScheduledNotificationsAsync()
            let tomorrow = new Date()
            tomorrow.setDate(tomorrow.getDate()+1)
            tomorrow.setHours(13)
            tomorrow.setMinutes(0)
            Notifications.scheduleLocalNotificationAsync(createNotification(),{
              time:tomorrow,
              repeat:'day'
            }
            )
            AsyncStorage.setItem(NOTFICATION_KEY,JSON.stringify(true))
          }
        })
      }
    })
}