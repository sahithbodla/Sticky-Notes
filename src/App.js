import { Route, Routes } from "react-router-dom";
import { Header } from "./Components";
import { Home } from "./Routes";
import './index.css';
import { useEffect, useState } from "react";
import { UseStateContext } from "./Context/stateContext";
import { Footer } from "./Components/Footer/footer";
import { DialogBox } from "./Components/Dialog box/dialogbox";
function App() {
  const {
    state: { arrayOfNotes,dialogbox },
  } = UseStateContext();
  const [searchText, setSearchText] = useState("");
  const [filteredNotes, setFilteredNotes] = useState([]);
  useEffect(() => {
    setFilteredNotes(
      arrayOfNotes.filter(
        (note) =>
          ( (note.title.match(searchText) ||
          note.notesContent.match(searchText) ||note.label.match(searchText) )
          )
      )
    );
  },[searchText,arrayOfNotes]);
  return (
    <div className="App">
          {dialogbox&&<DialogBox/>}
      <Header setSearchText={setSearchText}/>
      <Routes>
        <Route path="/" element={<Home  filteredNotes={filteredNotes} />} />
      </Routes>
        <Footer/>
    </div>
  );
}
export default App;
