import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Row } from "react-bootstrap";
import ProductItem from "./ProductItem";

const Products = () => {
  const products = useSelector((state) => state.product.items);
  const [filter, setFilter] = useState(products);

  useEffect(() => {
    setFilter(products);
  }, [products]);

  const onFilter = (cat) => {
    let filteredProduct = products.filter((x) => x.category === cat);
    setFilter(filteredProduct);
  };

  const onRemoveFilter = () => {
    setFilter(products);
  };

  return (
    <Row>
      <div className="px-0 mb-3 d-flex gap-3">
        <Button onClick={() => onRemoveFilter()}>All</Button>
        <Button onClick={() => onFilter("men's clothing")}>Men</Button>
        <Button onClick={() => onFilter("women's clothing")}>Women</Button>
      </div>
      {filter.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </Row>
  );
};

export default Products;
