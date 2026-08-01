import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home"
import Racipes from "../pages/Racipes"
import About from "../pages/About"
import Create from "../pages/Create"


const Mainroutes = () => {
  return (
     <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Racipes />} />
        <Route path="/about" element={<About />} />
        <Route path="/create-recipe" element={<Create />} />
     </Routes>
    );
}

export default Mainroutes
