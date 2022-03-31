export const notesReducer = (state, { type, payload }) => {
  switch (type) {
    case "SET_NOTES":
      return { ...state, arrayOfNotes: payload };
    case "UPDATE_NOTE":
      localStorage.setItem("notes", JSON.stringify(payload));
      return {
        ...state,
        arrayOfNotes: payload,
        toast: "Notes Updated",
        dialogbox: false,
      };
    case "CREATE_NEW_NOTE":
      localStorage.setItem(
        "notes",
        JSON.stringify([...state.arrayOfNotes, payload])
      );
      return {
        ...state,
        arrayOfNotes: [...state.arrayOfNotes, payload],
        toast: "Notes Created",
      };
    case "SET_TITLE":
      return { ...state, title: payload };
    case "SET_CONTENT":
      return { ...state, notesContent: payload };
    case "SET_LABEL_TO_NOTE":
      return { ...state, label: payload };
    case "DELETE_NOTE":
      localStorage.setItem(
        "notes",
        JSON.stringify(state.arrayOfNotes.filter(({ id }) => id !== payload))
      );
      return {
        ...state,
        arrayOfNotes: state.arrayOfNotes.filter(({ id }) => id !== payload),
        toast: "Notes Deleted",
        dialogbox: false,
      };
    case "SET_LABELS":
      return { ...state, tags: payload };
    case "CREATE_NEW_LABEL":
      localStorage.setItem(
        "label",
        JSON.stringify([...state.tags, { name: payload }])
      );
      return { ...state, tags: [...state.tags, { name: payload }] };
    case "TOAST":
      return { ...state, toast: payload };
    case "CLEAR_TOAST":
      return { ...state, toast: "" };
    case "SHOW_DIALOG_BOX":
      return {
        ...state,
        dialogbox: payload.flag,
        id: payload.id,
        showIndividualNotes:payload.showIndividualNotes
      };
    default:
      return { ...state };
  }
};
