# Mobile Flashcards Project

This is the project assignment 'Mobile Flashcards' for the  Udacity's React Developer course.

This project used the [Create React Native App](https://github.com/react-community/create-react-native-app)
to develop an React Native application that one user can add many flashcard decks for any content to study as a quiz format and has a notification inapp to remember to study if the user didn't took a quiz next day.



## Installation
It is required that you have already installed [npm](https://www.npmjs.com/get-npm).


To install the project use any terminal interface to run these commands :
* `git clone https://github.com/gtyamamoto/mobile-flashcards.git`
* `cd ./mobile-flashcards`
* `npm install`
* and finally to run it every time `npm start`

## Project Structure
```bash

├── README.md - This file.

├── package.json # npm package manager file contains all the dependencies from the project

├── app.json # configurations to set up correctly a expo build for the app

├── App.js # root app component,contains initial global context


├── components
    ├── addCard.js # Component to add a Card to a deck
    ├── addDeck.js # Component to add a new Deck
    ├── deck.js # Component to the deck details
    ├── deckItem.js # Component to show the deck in the deck list
    ├── decksList.js # Component to show the list of decks,Homepage
    ├── quiz.js # Component to display a quiz

├── actions
    ├── index.js # Contains all the actions used by the reducers for the global state management.

├── navigation
    ├── index.js # Contains the navigation components and the routes for each component.  
├── reducers
    ├── activeDeck.js # activeDeck reducer.  
    ├── decks.js # deck's reducer.  
    ├── index.js # merge both states.  
├── reducers
    ├── api.js # contains api with the asyncstorage for decks data.  
    ├── colors.js # colors hexacodes for the whole app.  
    ├── context.js # implementation of a store by using React createContext.  
    ├── notifications.js # notification system for the app. 

```



## Dependencies

To improve the UX,validations and javascript operation functions it is used in this project:

* [`lodash`](https://lodash.com/docs/4.17.10)




