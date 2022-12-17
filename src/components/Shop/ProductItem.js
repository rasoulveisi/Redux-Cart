import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const ProductItem = (props) => {
  const dispatch = useDispatch();
  const { title, price, description, id, image } = props;

  const addToCartHandler = () => {
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
    <li className={classes.item}>
      <Card>
        <div className={classes.card}>
          <img src={image} alt={title} className={classes["card-image"]} />
          <div>
            <header>
              <h3>{title}</h3>
            </header>
            <p>{description}</p>
          </div>
        </div>
        <div className={classes.actions}>
          <div className={classes.price}>${price.toFixed(2)}</div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
