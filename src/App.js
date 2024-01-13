import "./App.css";
import  Topbar  from "./component/Navbar";
import {
  Routes,
  Route
} from "react-router-dom";
import About from '../src/component/About';
import Contact from '../src/component/Contact';
import Home from './component/screen/Home';
import Nav2 from "./Nav2";

function App() {
  return (
    <>
  <Topbar/>
  <Nav2 />
  <Routes>
    <Route exact path="/"><Home/></Route>
    <Route exact path="/about" ><About /></Route>
    <Route exact path="/contact" ><Contact /></Route>
  </Routes>
    </>
  );
}

export default App;
