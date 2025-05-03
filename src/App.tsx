import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import PersistTasks from "./commponents/PersistTasks"

function App() {

  return(
    <div className="container py=5">
      <nav className="mb-4 d-flex justify-between">
        <Link to="/" className="btn btn-outline-primary mx-1">Home</Link>
        <Link to="about" className="btn btn-outline-secondary">About</Link>
      </nav>
      
      <PersistTasks />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
    </div>
  );
}
export default App;
