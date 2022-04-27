import './App.css';
import {BrowserRouter,Routes,Route, Link} from "react-router-dom";
import Home from "./components/Home/Home"
import Contact from "./components/Contact/Contact"
import About from "./components/About/About"
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="header">
          <div className="logo">
            Taimorr<br/>Shahzada
          </div>
          <ul>
            <li>
              <Link className="link" to="/">Home</Link>
            </li>
            <li>
              <Link className="link" to="/about">About</Link>
            </li>
            <li>
              <Link className="link" to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>

      </BrowserRouter>

    </div>
  );
}

export default App;
