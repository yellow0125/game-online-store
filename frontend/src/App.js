import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

//components and screen
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import SearchScreen from './screens/SearchSreen'
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import DetailScreen from "./screens/DetailScreen";
import CartScreen from "./screens/CartScreen";
import ProfileScreen from "./screens/ProfileScreen";
import AllProductScreen from "./screens/AllProductScreen";
import TopProductScreen from "./screens/TopProductScreen";
import CheckoutScreen from './screens/CheckoutScreen'
import AdScreen from "./screens/AdScreen";
import Footer from "./components/Footer";
import AdminScreen from "./screens/AdminScreen";
import ScrollToTop from "./components/ScrollToTop";
import OrderScreen from "./screens/OrderScreen";
import ItemEditScreen from "./screens/ItemEditScreen";


function App() {
  return (
      <Router>
        <ScrollToTop />
        <Header />
        <main>
          <Container>
            <Routes>
              <Route path='/' element={<HomeScreen />} exact />
              <Route path='/ad' element={<AdScreen />} exact />
              <Route path='/admin/product' element={<AdminScreen />} exact />
              <Route path='/admin/product/:id/edit' element={<ItemEditScreen />} exact />

              <Route path='/search' element={<SearchScreen />} exact />
              <Route path='/search/:searchCriteria' element={<SearchScreen />} exact />

              <Route path='/products' element={<AllProductScreen />} exact />
              <Route path='/products/top' element={<TopProductScreen />} exact />
              <Route path='/details/:id' element={<DetailScreen />} exact />

              <Route path='/cart/' element={<CartScreen />} exact />
              <Route path='/cart/:id' element={<CartScreen />} exact />

              <Route path='/order/:id' element={<OrderScreen />} exact />
              <Route path='/checkout' element={<CheckoutScreen />} exact />

              <Route path='/login' element={<LoginScreen />} exact />
              <Route path='/register' element={<RegisterScreen />} exact />
              <Route path='/profile' element={<ProfileScreen />} exact />
            </Routes>
          </Container>
        </main>
        <Footer />
      </Router>
  );
}

export default App;
