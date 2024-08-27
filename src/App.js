import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Navbar from "./components/common/Navbar";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Contact from "./components/Contact";
import About from "./components/About";
import Resume from "./components/Resume";
function App() {
  return (
   <div className="px-10  bg-white border rounded-md">
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/blogs" element={<Blogs/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<Signup/>}></Route>
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<About />} />
     
      <Route path="/resume" element={<Resume />} />
      

    </Routes>

    </BrowserRouter>
   </div>
  );
}

export default App;
