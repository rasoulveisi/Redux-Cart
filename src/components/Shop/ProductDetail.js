import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

export default function ProductDetail() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json);
      });
  }, [id]);

  if (!product) {
    return <>Loading...</>;
  }

  const { title, price, description, image } = product;
  const onAddToCart = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        description,
        image,
      })
    );
  };

  return (
    <Card>
      <Card.Img src={image} alt={title} className="w-25" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button onClick={onAddToCart}>Add to Cart</Button>
      </Card.Body>
    </Card>
  );
}
