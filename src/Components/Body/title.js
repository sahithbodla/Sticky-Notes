import { UseStateContext } from "../../Context/stateContext";
import { Title } from "../../Routes/Home/style";

export const TitleDiv = ({noteColor}) => {
    const {
        state: { title },
        dispatch,
      } = UseStateContext();
 return <Title
    style={{ backgroundColor: `${noteColor}` }}
    name={"title"}
    value={title}
    onChange={(event) =>
      dispatch({ type: "SET_TITLE", payload: event.target.value })
    }
    placeholder="Title"
  />;
};
