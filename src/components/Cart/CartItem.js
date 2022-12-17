import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price, id, image, description } = props.item;

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
          <button>-</button>
          <button>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
