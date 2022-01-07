import React, { useEffect } from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import { Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import Payment from "./Payment";
import Orders from "./Orders";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Category from "./Category";
import AllProducts from "./AllProducts";
import Logo from "./Logo";
import Search from "./Search";
import ViewAll from "./ViewAll";
import Vegetables from "./Vegetables";
import VegetableHeader from "./VegetableHeader";
import Fruits from "./Fruits";
import FruitHeader from "./FruitHeader";
import Meats from "./Meats";
import MeatHeader from "./MeatHeader";
import Healthy from "./Healthy";
import HealthyHeader from "./HealthyHeader";
import Organics from "./Organics";
import OrganicHeader from "./OrganicHeader";
import SecondHeader from "./SecondHeader";
// import Wishlist from "./Wishlist"
import Productdetailspage from "./Productdetailspage"
import Footer from "./Footer";
import Wishlist from "./Wishlist";
// import {useAuthState} from 'react-firebase-hooks/auth';
// import Signinup from './Signinup';
import Phone from './Phone';
// import firebase from "./firebase"

const promise = loadStripe(
  // "pk_test_51HPvU9DFg5koCdLGJJbNo60QAU99BejacsvnKvT8xnCu1wFLCuQP3WBArscK3RvSQmSIB3N0Pbsc7TtbQiJ1vaOi00X9sIbazL"
  "pk_test_51KE6DLSBZqcFs7KAIKG0cyf7H5JJGXfBn2XOFcDUjUBFmN4uWpbqUOjd1hlL9C1zh3LIzxdGOoGHMoJCFa51Mxvs00k469zyco"
);

function App() {
  const [{ }, dispatch] = useStateValue();
  // const [myUser] = useAuthState(auth);

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
  
      <div className="app">
        <Switch>
        <Route path="/viewall">
            <ViewAll/>
          </Route>
          <Route path="/milk">
            {/* <ViewAll/> */}
          </Route>
          <Route path="/vegetables">
          <VegetableHeader/>
            <Vegetables/>
          </Route>
          <Route path="/fruits">
          <FruitHeader/>
            <Fruits/>
          </Route>
          <Route path="/meats">
          <MeatHeader/>
            <Meats/>
          </Route>
          <Route path="/healthyfood">
          <HealthyHeader/>
            <Healthy/>
          </Route>
          <Route path="/organicfood">
          <OrganicHeader/>
            <Organics/>
          </Route>
          <Route path="/orders">
            
            <Orders />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/phone">
          <Phone/>
          </Route>
          <Route path="/checkout">
        
            <Checkout />
          </Route>
          <Route path="/wishlist">
        
            <Wishlist/>
          </Route>
          <Route exact path="/productdetailspage">
          
            <Productdetailspage/>
          </Route>
          <Route path="/payment">
          
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
          <Logo/>
          <Search/>
        
            <SecondHeader/>
            <Home
              id="1234"
              image="https://www.kershaw2go.com/editable/templates/default/images/carousel-7.jpg"
              images="https://www.kershaw2go.com/editable/templates/default/images/carousel-7.jpg"
              title="Get 30% OFF upto ₹ 500"
              subtitle="on orders above 150"
              button="use code: FRUIT50"
            />
            <Category />
            <AllProducts />
            <Home
              id="1235"
              image="https://www.kershaw2go.com/editable/templates/default/images/carousel-7.jpg"
              images="https://www.kershaw2go.com/editable/templates/default/images/carousel-7.jpg"
              title="Order any time and enjoy hassel-free delivery"
              subtitle="In time for a fresh start to your day!"
              button="use code: FREEDELIVERY"

            />
            <Home
              id="1236"
              image="https://www.kershaw2go.com/editable/templates/default/images/carousel-7.jpg"
              images="https://www.kershaw2go.com/editable/templates/default/images/carousel-7.jpg"
              title="Get 30% OFF upto ₹ 100"
              subtitle="on orders above 150"
              button="use code: FRUIT50"
            />
            <Footer/>
          </Route>
          
        </Switch>
      </div>
    
  );
}

export default App;
