import { Route, Routes } from "react-router-dom";
import { Header } from "./Components";
import { Home } from "./Routes";
import "./index.css";
import { useEffect, useState } from "react";
import { UseStateContext } from "./Context/stateContext";
import { Footer } from "./Components/Footer/footer";
import { DialogBox } from "./Components/Dialog box/dialogbox";
function App() {
  const {
    state: { arrayOfNotes, dialogbox },
  } = UseStateContext();
  const [searchText, setSearchText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  useEffect(() => {
    setFilteredNotes(
      arrayOfNotes.filter(
        (note) =>
          note.title.toUpperCase().match(searchText.toUpperCase()) ||
          note.notesContent.toUpperCase().match(searchText.toUpperCase()) ||
          note.label.toUpperCase().match(searchText.toUpperCase())
      )
    );
  }, [searchText, arrayOfNotes]);
  console.log(dialogbox)
  return (
    <div className="App">
      {dialogbox && <DialogBox />}
      <Header searchText={searchText} setSearchText={setSearchText} />
      <Routes>
        <Route path="/" element={<Home filteredNotes={filteredNotes} />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
