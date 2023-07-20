import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import OurStorie from './pages/OurStore';
import Blog from './pages/Blog';
import CompareProduct from './pages/CompareProduct';
import Wishlist from './pages/Wishlist';
import Login from './pages/Login';
import ForgetPassword from './pages/ForgetPassword';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <>   
     <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="store" element={<OurStorie />} />
          <Route path="blogs" element={<Blog />} />
          <Route path="contact" element={<Contact />} />
          <Route path="compare-product" element={<CompareProduct />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="login" element={<Login />} />
          <Route path="forgot-password" element={<ForgetPassword />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="reset-password" element={<ResetPassword />} />
        </Route>
      </Routes>
      </BrowserRouter>    
    </>
  );
}

export default App;
