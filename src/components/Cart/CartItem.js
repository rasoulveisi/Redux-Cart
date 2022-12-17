import classes from "./CartItem.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, image, description } = props.item;

  const plusHandler = () => {
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

  const minusHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <li className={classes.item}>
      <div className={classes.container}>
        <img className={classes["container-image"]} src={image} />
        <div className={classes["container-detail"]}>
          <header>
            <h3>{title}</h3>
          </header>
          <p className={classes.price}>
            ${total.toFixed(2)}
            <span className={classes.itemprice}>
              (${price.toFixed(2)}/item)
            </span>
          </p>
          <div className={classes.quantity}>
            {quantity}
            <span>x</span>
          </div>
        </div>
        <div className={classes["container-actions"]}>
          <button onClick={minusHandler}>-</button>
          <button onClick={plusHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
