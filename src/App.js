import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.scss";
import Header from "./components/header/header.component";
import MobileHeader from "./components/mobile-header/mobile-header";
import HomePage from "./pages/homepage/homepage";
import CategoryPage from "./pages/categorypage/categorypage";
import SearchResultPage from "./pages/searchresult-page/searchresult-page";
import CartPage from "./pages/cartpage/cartpage";
import ProductDetailPage from "./pages/productdetailpage/productdetailpage";
import Footer from "./components/footer/footer.component";

function App() {
  return (
    <div className="App">
      <Header />
      <MobileHeader />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/category/:id/:url" component={CategoryPage} />
        <Route path="/search/:keyword" component={SearchResultPage} />
        <Route path="/checkout/" component={CartPage} />
        <Route path="/products/:id/:url" component={ProductDetailPage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
