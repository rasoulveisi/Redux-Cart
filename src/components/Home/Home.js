import React from "react";
import Products from "../Shop/Products";
import { Row } from "react-bootstrap";

const Home = () => {
  return (
    <>
      <Row className="card bg-dark text-white border-0 mb-3">
        <img
          className="card-img object-fit-cover px-0"
          alt="Background"
          height="300px"
          src="https://images.unsplash.com/photo-1455849318743-b2233052fcff?auto=format&fit=crop&q=80&w=2069&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        ></img>
        <div className="d-flex hero-header flex-column justify-content-center">
          <div className="container">
            <p className="card-text lead fs-2">CHECK OUT ALL THE TRENDS</p>
          </div>
        </div>
      </Row>
      <Products />
    </>
  );
};

export default Home;
