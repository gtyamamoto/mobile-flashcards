import React,{useState,Fragment} from 'react';
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'
import {red,black,green,white} from '../utils/colors'
import {useStateValue} from '../utils/context'
import { clearLocalNotification, setLocalNotification } from '../utils/notifications';

export default (props)=>{
    const [{activeDeck}] = useStateValue();
    const [currentQuestion,setCurrentQuestion] = useState(0);
    const [correctAnswers,setCorrectAnswers] = useState(0);
    const [wrongAnswers,setWrongAnswers] = useState(0);
    const [showAnswer,setShowAnswer] = useState(false);
    const [showScore,setShowScore] = useState(false);
    //restart onpress handler to reanitialize the local states
    const restart = ()=>{
        setShowAnswer(false);
        setCurrentQuestion(0);
        setCorrectAnswers(0);
        setWrongAnswers(0);
        setShowScore(false);
      
       
    }
    //computes a correct btn onpress event and update state
    const onCorrectAnswer = ()=>{
        
        setCorrectAnswers(correctAnswers+1);
        if((correctAnswers+wrongAnswers+1)!=activeDeck.questions.length){
            setShowAnswer(false);
            setCurrentQuestion(currentQuestion+1);
        }
        //if it reached the last question, will show the resuts from the quiz
        else{
              //restart notification process
            clearLocalNotification()
        .then(setLocalNotification)
            setShowScore(true);
        }
        
    }
    //computes a wrong btn onpress event and update state
    const onWrongAnswer = ()=>{
        
        setWrongAnswers(wrongAnswers+1);
        if((correctAnswers+wrongAnswers+1)!=activeDeck.questions.length){
            setShowAnswer(false);
            setCurrentQuestion(currentQuestion+1);
        }
         //if it reached the last question, will show the resuts from the quiz
        else{
              //restart notification process
            clearLocalNotification()
            .then(setLocalNotification)
            setShowScore(true);
        }
    }

     
    return  showScore ? 
    //View to show Final Results
    (<View style={styles.container}>
        <Text style={styles.questiontitle}>Congratulations! you got {`${correctAnswers}/${(correctAnswers+wrongAnswers)}`} corrects!</Text>
        <TouchableOpacity style={styles.btnRetry} onPress={()=>restart()}>
            <Text style={{color:white}} >Retry</Text>   
            </TouchableOpacity> 
    </View>) : 
    
    //View for show question
    (
        <View style={{flex:1,alignContent:"center",justifyContent:"center"}}>
        <View style={styles.breadcrumb}><Text>{`${currentQuestion+1}/${activeDeck.questions.length}`}</Text></View>
            <View style={styles.container}>
           
                <Text style={styles.questiontitle}>{showAnswer?activeDeck.questions[currentQuestion].answer:activeDeck.questions[currentQuestion].question}</Text>
                <Text onPress={()=>setShowAnswer(!showAnswer)} style={styles.questionToggle}>{showAnswer?'Question':'Answer'}</Text>
               {
                showAnswer && <Fragment>
                <TouchableOpacity style={styles.btnCorrect} onPress={onCorrectAnswer}>
            <Text style={{color:white}} >Correct</Text>   
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnWrong} onPress={onWrongAnswer}>
            <Text style={{color:white}} >Wrong</Text>   
            </TouchableOpacity> 
            </Fragment>
               } 
            </View>
            </View>
       ) 
       
        
     
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        padding:10,
        alignSelf:"center",
        justifyContent:"center"
    },
    questiontitle:{
        fontSize:24,
        marginTop:10,
        fontWeight:"600",
        textTransform:"capitalize"
    },
    questionToggle:{
        fontSize:14,
        color:red,
        marginTop:10
    },  
    breadcrumb:{
        alignSelf:'flex-start',
        marginTop:5,
        marginLeft:5,
        fontSize:12,
        fontWeight:"600"
    },
    btnWrong:{
        backgroundColor:red,
        textAlign:'center',
  
        marginTop:5,
        padding:5,

  },
  btnRetry:{
    backgroundColor:red,
    textAlign:'center',

    marginTop:5,
    padding:5,

},
  btnCorrect:{
    backgroundColor:green,
    textAlign:'center',

    marginTop:20,
    padding:5,

}

})