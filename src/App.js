import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro.jsx"
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx"
import Skills from "./components/skills/Skills.jsx";
import Contact from "./components/contact/Contact.jsx"
import Menu from "./components/menu/Menu.jsx"
import "./app.scss"
import {useState} from "react"
function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
      <Intro/>
      <Portfolio/>
      <Skills/>
      <Works/>
      <Contact/>
      </div>

    </div>
  );
}

export default App;
