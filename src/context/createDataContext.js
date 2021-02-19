import React from 'react';

export default (reducer, actions, initialState) => {
  const Context = React.createContext();

  const Provider = ({ children }) => {
    const [ state, dispatch ] = React.useReducer(reducer, initialState);
    const boundActions = {};
    
    for(let key in actions) {
      boundActions[key] = actions[key](dispatch);
    }
    
    return (
      <Context.Provider value={{ state, ...boundActions }}>
        {children}
      </Context.Provider>
    );
  };

  return { Context, Provider };
};
