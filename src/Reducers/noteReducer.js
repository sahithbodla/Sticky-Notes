export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "CREATE_NEW_NOTE":
      return { ...state, arrayOfNotes: [...state.arrayOfNotes, payload] };
    case "SET_TITLE":
      return { ...state, title: payload };
    case "SET_CONTENT":
      return { ...state, notesContent: payload };
    case "DELETE_NOTE":
        console.log(payload,state)
      return {
        ...state,
        arrayOfNotes: state.arrayOfNotes.filter(({ id }) => id !== payload),
      };
    default:
      return { ...state };
  }
};
