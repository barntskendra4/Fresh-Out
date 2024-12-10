import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { ShopContextProvider } from './context/shop-context';
import Home from './components/home/Home';
import Create from './components/create/Create';
import Footer from './components/footer/Footer';
import "./App.css";
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Login from './components/login/Login';
import Menu from './components/menu/Menu';
import Photos from './components/photos/Photos';
import Reserve from './components/reserve/Reserve';
import Schedule from './components/schedule/Schedule';
import Shop from './pages/shop/shop';
import Cart from './pages/cart/cart';
import Checkout from './components/checkout/Checkout';
import SignedIn from './components/signedIn/SignedIn';
import ComingSoon from './components/comingSoon/ComingSoon';

const App = () => {
  return (
    <ShopContextProvider>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/create' element={<Create />} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/photos' element={<Photos />} />
          <Route path='/reserve' element={<Reserve />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/signedin' element={<SignedIn />} />
          <Route path='/comingsoon' element={<ComingSoon />} />
        </Routes>
        <Footer/>
      </Router>
    </ShopContextProvider>
  );
}

export default App;