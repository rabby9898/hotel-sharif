import { Routes,  Route, } from 'react-router-dom';
import './App.css';
import Navbar from './common/Navbar/Navbar';
import About from './components/About/About';
import Blog from './components/Blog/Blog';
import BlogSinglePage from './components/Blog/blog-single-page/BlogSInglePage';
import Contact from './components/Contact/Contact';
import Destinations from './components/Destinations/Destinations';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Testimonial from './components/Testimonial/Testimonial';
import Home from './pages/Home';
import SinglePage from './singlePage/singlePage';

function App() {
  return (
    <>
      <Navbar/>
     <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/gallery' element={<Gallery/>}/>
        <Route path='/destination' element={<Destinations/>}/>
        <Route path='/singlepage/:title/:id' element={<SinglePage/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/blogsingle/:title/:id' element={<BlogSinglePage/>}/>
        <Route path='/testimonial' element={<Testimonial/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/sign-in' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>

      </Routes>
      
    </>
  );
}

export default App;
