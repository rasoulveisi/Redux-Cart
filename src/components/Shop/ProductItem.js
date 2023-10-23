import "./ProductItems.css";
import { useDispatch } from "react-redux";
import { Card, Button } from "react-bootstrap";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id, image } = props;

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
    <Card className="col-lg-3 col-md-4 col-sm-6 col-12 p-2 ml-1 mb-2">
      <Card.Img src={image} alt={title} className="mx-auto img-container" />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{title}</Card.Title>
        <Card.Text className="flex-grow-1 ellipse-2line">
          {description}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center">
          <span>${price.toFixed(2)}</span>
          <Button variant="primary" onClick={onAddToCart}>
            Add to Cart
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ProductItem;
