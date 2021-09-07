interface addNoteAction {
    type: "ADD_NOTE";
    payload: string;
  }
  
  interface deleteNoteAction {
    type: "DELETE_NOTE";
    payload: number;
  }
  
  type ActionType = addNoteAction | deleteNoteAction;
  
  const notesReducer = (state: string[] = [], action: ActionType) => {
    switch (action.type) {
      case "ADD_NOTE":
        return [...state, action.payload];
      case "DELETE_NOTE":
        return state.filter(
          (_: string, index: number) => index !== action.payload
        );
      default:
        return state;
    }
  };
  
  export default notesReducer;