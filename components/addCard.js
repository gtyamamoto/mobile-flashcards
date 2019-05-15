import React, { useState } from "react";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View,
  StyleSheet
} from "react-native";
import { addCardToDeck } from "../utils/api";
import { black, gray, green, red, white } from "../utils/colors";
import { useStateValue } from "../utils/context";
import { setDeck } from "../actions";
//add a card component form
export default props => {
  const [{ activeDeck }, dispatch] = useStateValue();
  //local state to question value input
  const [question, setQuestion] = useState("");
  //local state for answer value input
  const [answer, setAnswer] = useState("");
  const { navigation } = props;
  // method handler to add new card to the deck and if successfully clear the form
  const onAddNewCard = async () => {
    const deckUpdate = await addCardToDeck(
      navigation.getParam("deck", activeDeck.title),
      { question, answer }
    );
    if (deckUpdate === null) return alert("Internal App Error,try again");

    dispatch(setDeck(deckUpdate));
    setQuestion("");
    setAnswer("");
    alert("Card Added!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a Card</Text>
      <TextInput
        placeholder="enter the question here"
        style={styles.inputTitle}
        onChangeText={question => setQuestion(question)}
        value={question}
      />
      <TextInput
        placeholder="enter the answer here"
        style={styles.inputTitle}
        onChangeText={answer => setAnswer(answer)}
        value={answer}
      />
      <TouchableOpacity style={styles.btn} onPress={onAddNewCard}>
        <Text style={{ color: white }}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  inputTitle: {
    height: 40,
    borderColor: gray,
    borderWidth: 1
  },
  title: {
    fontSize: 16,
    fontWeight: "600"
  },
  questions: {
    fontSize: 12,
    color: gray
  },
  btn: {
    backgroundColor: black,
    textAlign: "center",

    marginTop: 5,
    padding: 10
  }
});
