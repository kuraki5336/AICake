import React from "react";

export const ContextStore = React.createContext({
  headerIndex: 0,
});

export function headerReducer(state, action) {
  switch (action.type) {
    case "onheaderChange":
      return (state = action.index);
    default:
      return state;
  }
}
