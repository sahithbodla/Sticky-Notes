import { Route, Routes } from "react-router-dom";
import { Header } from "./Components";
import { Home } from "./Routes";
import './index.css';
function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      {/* <Footer/> */}
    </div>
  );
}
export function Footer(){
  return<div>
       This is footer
  </div>
}
export default App;
