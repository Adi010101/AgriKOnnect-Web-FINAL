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
import ProductReviews from './pages/ProductReviews';
import RecentTransactions from './pages/RecentTransactions';
import NoSearchResult from './pages/NoSearchResult';
import EmptyTransactions from './pages/EmptyTransactions';
import EmptyOngoingTransactions from './pages/EmptyOngoingTransactions';
import EmptyDeliveredTransactions from './pages/EmptyDeliveredTransactions';
import EmptyHome from './pages/EmptyHome';
import EmptyReviews from './pages/EmptyReviews';
import Landing from './pages/Landing';
import Selection from './pages/Selection';
import SellerLogin from './pages/SellerLogin';
import CustomerLogin from './pages/CustomerLogin';
import SellerRegister from './pages/SellerRegister';
import CustomerRegister from './pages/CustomerRegister';
import SellerForgotPassword from './pages/SellerForgotPassword';
import SellerChangePassword from './pages/SellerChangePassword';
import CustomerChangePassword from './pages/CustomerChangePassword';
import CustomerForgotPassword from './pages/CustomerForgotPassword';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/selection' element={<Selection/>} />
          <Route path='/seller/login' element={<SellerLogin/>} />
          <Route path='/customer/login' element={<CustomerLogin/>} />
          <Route path='/seller/register' element={<SellerRegister/>} />
          <Route path='/customer/register' element={<CustomerRegister/>} />
          <Route path='/seller/forgotpass' element={<SellerForgotPassword/>} />
          <Route path='/seller/changepass' element={<SellerChangePassword/>} />
          <Route path='/customer/forgotpass' element={<CustomerForgotPassword/>} />
          <Route path='/customer/changepass' element={<CustomerChangePassword/>} />
          <Route path='/home' element={<Home/>} />
          <Route path='/home/empty' element={<EmptyHome/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/products/empty' element={<EmptyProductPage/>} />
          <Route path='/products/add' element={<AddProduct/>} />
          <Route path='/products/edit' element={<EditProduct/>} />
          <Route path='/transactions' element={<Transactions/>} />
          <Route path='/transactions/empty' element={<EmptyTransactions/>} />
          <Route path='/transactions/recent' element={<RecentTransactions/>} />
          <Route path='/transactions/ongoing/details' element={<OngoingTransactionDetails/>} />
          <Route path='/transactions/ongoing' element={<Ongoing/>} />
          <Route path='/transactions/ongoing/empty' element={<EmptyOngoingTransactions/>} />
          <Route path='/transactions/delivered' element={<Delivered/>} />
          <Route path='/transactions/delivered/empty' element={<EmptyDeliveredTransactions/>} />
          <Route path='/account' element={<Account/>} />
          <Route path='/account/personalInformation' element={<UserInfo/>} />
          <Route path='/account/edit/personalInformation' element={<EditUserInfo/>} />
          <Route path='/account/password' element={<Password/>} />
          <Route path='/account/review' element={<Reviews/>} />
          <Route path='/account/review/empty' element={<EmptyReviews/>} />
          <Route path='/account/review/product' element={<ProductReviews/>} />
          <Route path='/account/logout' element={<LogoutDialog/>} />
          <Route path='/error' element={<ErrorAlert/>} />
          <Route path='/noresult' element={<NoSearchResult/>} />
        </Routes>
    </Router>
  );
}

export default App;
