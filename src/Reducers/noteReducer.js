export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NOTES":
      return { ...state, arrayOfNotes: payload };
    case "CREATE_NEW_NOTE":
      localStorage.setItem(
        "notes",
        JSON.stringify([...state.arrayOfNotes, payload])
      );
      return { ...state, arrayOfNotes: [...state.arrayOfNotes, payload] };
    case "SET_TITLE":
      return { ...state, title: payload };
    case "SET_CONTENT":
      return { ...state, notesContent: payload };
    case "DELETE_NOTE":
      localStorage.setItem(
        "notes",
        JSON.stringify(state.arrayOfNotes.filter(({ id }) => id !== payload))
      );
      return {
        ...state,
        arrayOfNotes: state.arrayOfNotes.filter(({ id }) => id !== payload),
      };
    case "ADD_LABEL":
      return { ...state, tags: [...state.tags, { name: payload }] };
    default:
      return { ...state };
  }
};
