import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import Navigation from "./components/navigation/navigation.component";
import HomePage from "./pages/homepage/homepage";
import CategoryPage from "./pages/categorypage/categorypage";
import CheckoutPage from "./pages/checkoutpage/checkoutpage";
import ProductDetailPage from "./pages/productdetailpage/productdetailpage";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <Navigation />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/category/:id/:url" component={CategoryPage} />
        <Route path="/checkout/" component={CheckoutPage} />
        <Route path="/products/:id/:url" component={ProductDetailPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
