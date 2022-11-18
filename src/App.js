import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Products from './pages/Products';
import Account from './pages/Account';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ErrorAlert from './components/ErrorAlert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import EmptyProductPage from './pages/EmptyProductPage';
import Ongoing from './pages/Ongoing';
import Delivered from './pages/Delivered';
import OngoingTransactionDetails from './pages/OngoingTransactionDetails';
import UserInfo from './pages/UserInfo';
import EditUserInfo from './pages/EditUserInfo';
import Password from './pages/ChangePassword';
import LogoutDialog from './components/LogoutDialog';
import Reviews from './pages/Reviews';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/empty' element={<EmptyProductPage/>} />
          <Route path='/products/add' element={<AddProduct/>} />
          <Route path='/products/edit' element={<EditProduct/>} />
          <Route path='/transactions' element={<Transactions/>} />
          <Route path='/transactions/ongoing/details' element={<OngoingTransactionDetails/>} />
          <Route path='/transactions/ongoing' element={<Ongoing/>} />
          <Route path='/transactions/delivered' element={<Delivered/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/account/personalInformation' element={<UserInfo/>} />
          <Route path='/account/edit/personalInformation' element={<EditUserInfo/>} />
          <Route path='/account/password' element={<Password/>} />
          <Route path='/account/review' element={<Reviews/>} />
          <Route path='/account/logout' element={<LogoutDialog/>} />
          <Route path='/error' element={<ErrorAlert/>} />
        </Routes>
    </Router>
  );
}

export default App;
