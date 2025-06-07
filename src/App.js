import {Route , Routes} from "react-router-dom"
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Cards from './Cards';
import Footer from './Footer';
import Subfooter from './Subfooter';
import Audio from './Audio';
import Contact from './Contact';
import Aboutus from "./Aboutus";
import Category from "./Category";
import Vedio from "./Vedio";
import Comment from "./Comment";
import Gallery from "./Gallery";
import Standard from "./Standard";
import Style from "./Style";

function App() {
  return (
    <>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path='/Contact' element={<Contact></Contact>}></Route>
      <Route path='/Aboutus' element={<Aboutus></Aboutus>}></Route>
      <Route path="/Category" element={<Category></Category>}></Route>
      <Route path="/Vedio" element={<Vedio></Vedio>}></Route>
      <Route path="/Audio" element={<Audio></Audio>}></Route>
      <Route path="/Gallery" element={<Gallery></Gallery>}></Route>
      <Route path="/Standard" element={<Standard></Standard>}></Route>
      <Route path="/Style" element={<Style></Style>}></Route>
     </Routes>
      

    </>
  );
}
export default App;
