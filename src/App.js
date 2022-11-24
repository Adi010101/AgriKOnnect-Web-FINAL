import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

//Pages of Seller
import SellerLogin from './pages/SellerLogin';
import SellerRegister from './pages/SellerRegister';
import SellerForgotPassword from './pages/SellerForgotPassword';
import SellerChangePassword from './pages/SellerChangePassword';
import Home from './pages/Home';
import Transactions from './pages/Transactions';
import Products from './pages/Products';
import Account from './pages/Account';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';
import ErrorAlert from './components/ErrorAlert';
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

//First pages
import Landing from './pages/Landing';
import Selection from './pages/Selection';

//Pages of Customers
import CustomerLogin from './pages/CustomerLogin';
import CustomerRegister from './pages/CustomerRegister';
import CustomerChangePassword from './pages/CustomerChangePassword';
import CustomerForgotPassword from './pages/CustomerForgotPassword';
import CustomerHome from './pages/CustomerHome';
import CustomerBasket from './pages/CustomerBasket';
import CustomerAccount from './pages/CustomerAccount';
import EmptyBasket from './pages/EmptyPages/EmptyBasket';
import NoSearchFound from './pages/EmptyPages/NoSearchFound';
import AddedtoCartDialog from './components/AddedtoCartDialog';
import Vegetables from './pages/Categories/Vegetables';
import Fruits from './pages/Categories/Fruits';
import Sale from './pages/Categories/Sale';
import FreeDelivery from './pages/Categories/FreeDelivery';
import ToPay from './pages/AccountPages/ToPay';
import ToShip from './pages/AccountPages/ToShip';
import ToReceive from './pages/AccountPages/ToReceive';
import ToReview from './pages/AccountPages/ToReview';
import ReviewForm from './pages/AccountPages/ReviewForm';
import EditCustomerInfo from './pages/AccountPages/EditCustomerInfo';
import CustomerRecentTransactions from './pages/AccountPages/RecentTransactions';
import Coupon from './pages/AccountPages/Coupon';
import Review from './pages/AccountPages/Review';
import ProductDetails from './pages/ProductPages/ProductDetails';
import CustomerProductReviews from './pages/ProductPages/ProductReviews';
import SellerDetails from './pages/SellerPages/SellerDetails';
import SellerVegetables from './pages/SellerPages/SellerVegetables';
import SellerFruits from './pages/SellerPages/SellerFruits';
import Checkout from './pages/Checkout';
import SelectAddress from './pages/SelectAddress';
import EditAddress from './pages/EditAddress';
import AddAddress from './pages/AddAddress';
import PaymentMethod from './pages/PaymentMethod';

function App() {
  return (
    <Router>
        <Routes>
          <Route path='/' element={<Landing/>} />
          <Route path='/selection' element={<Selection/>} />

          {/**Seller routes */}
          <Route path='/seller/login' element={<SellerLogin/>} />
          <Route path='/seller/register' element={<SellerRegister/>} />
          <Route path='/seller/forgotpass' element={<SellerForgotPassword/>} />
          <Route path='/seller/changepass' element={<SellerChangePassword/>} />
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

          {/**Customer routes */}
          <Route path='/customer/login' element={<CustomerLogin/>} />
          <Route path='/customer/register' element={<CustomerRegister/>} />
          <Route path='/customer/forgotpass' element={<CustomerForgotPassword/>} />
          <Route path='/customer/changepass' element={<CustomerChangePassword/>} />
          <Route path='/customer/home' element={<CustomerHome/>} />
          <Route path='/customer/home/noresult' element={<NoSearchFound/>} />
          <Route path='/vegetables' element={<Vegetables/>} />
          <Route path='/fruits' element={<Fruits/>} />
          <Route path='/sale' element={<Sale/>} />
          <Route path='/freedelivery' element={<FreeDelivery/>} />
          <Route path='/customer/addeddialog' element={<AddedtoCartDialog/>} />
          <Route path='/customer/basket' element={<CustomerBasket/>} />
          <Route path='/customer/basket/empty' element={<EmptyBasket/>} />
          <Route path='/customer/account' element={<CustomerAccount/>} />
          <Route path='/customer/editaccount' element={<EditCustomerInfo/>} />
          <Route path='/topay' element={<ToPay/>} />
          <Route path='/toship' element={<ToShip/>} />
          <Route path='/toreceive' element={<ToReceive/>} />
          <Route path='/toreview' element={<ToReview/>} />
          <Route path='/reviewing' element={<ReviewForm/>} />
          <Route path='/customer/account/recenttransactions' element={<CustomerRecentTransactions/>} />
          <Route path='/customer/account/discounts' element={<Coupon/>} />
          <Route path='/customer/account/review' element={<Review/>} />
          <Route path='/productdetails' element={<ProductDetails/>} />
          <Route path='/allreviews' element={<CustomerProductReviews/>} />
          <Route path='/sellerdetails' element={<SellerDetails/>} />
          <Route path='/seller/vegetables' element={<SellerVegetables/>} />
          <Route path='/seller/fruits' element={<SellerFruits/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/selectaddress' element={<SelectAddress/>} />
          <Route path='/editaddress' element={<EditAddress/>} />
          <Route path='/addaddress' element={<AddAddress/>} />
          <Route path='/paymentmethod' element={<PaymentMethod/>} />
        </Routes>
    </Router>
  );
}

export default App;
