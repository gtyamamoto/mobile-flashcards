import React, {createContext, useContext, useReducer} from 'react';
//Context Creation to simulate a store for global state management
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) =>(
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//similarly to useState from react hooks but for global management
export const useStateValue = () => useContext(StateContext);