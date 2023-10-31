import React, { Suspense, lazy, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";

import MainHeader from "./components/Layout/MainHeader";
import { fetchProduct } from "./store/product-action";
import { getCart, setCart } from "./store/cart-action";

const Cart = lazy(() => import("./components/Cart/Cart"));
const Products = lazy(() => import("./components/Shop/Products"));
const Home = lazy(() => import("./components/Home/Home"));
const ProductDetail = lazy(() => import("./components/Shop/ProductDetail"));

let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    }

    if (cart.changed) {
      dispatch(setCart(cart));
    }
  }, [cart, dispatch]);

  return (
    <>
      <MainHeader />
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/product-detail/:id" element={<ProductDetail />} />
            </Route>
          </Routes>
        </Suspense>
      </Container>
    </>
  );
}

export default App;
