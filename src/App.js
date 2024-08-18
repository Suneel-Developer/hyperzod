import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hyperzod from './pages/Hyperzod.js';
import Home from './pages/home';
import MerchantsDetails from './pages/merchantdetails/index.js';
import ServiceArea from './pages/service-area/index.js';
import Checkout from './pages/checkout/index.js';
import Search from './pages/search/index.js';
import Profile from './pages/profile/index.js';
import Orders from './pages/profile/Orders.js';
import TrackOrder from './pages/profile/TrackOrder.js';
import ManageAddress from './pages/profile/ManageAddress.js';
import ChangeLanguage from './pages/profile/ChangeLanguage.js';
import Category from './pages/Category/index.js';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Hyperzod />} />
        <Route path='/home' element={<Home />} />
        <Route path='/merchants-details' element={<MerchantsDetails />} />
        <Route path='/search' element={<Search />} />
        <Route path='/service-area' element={<ServiceArea />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/orders' element={<Orders />} />
        <Route path='/profile/track-order' element={<TrackOrder />} />
        <Route path='/profile/manage-address' element={<ManageAddress />} />
        <Route path='/profile/change-language' element={<ChangeLanguage />} />
        <Route path='/category' element={<Category />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
