import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const { title, quantity, total, price, id } = props.item;

  return (
    <li className={classes.item}>
      <div className={classes.container}>
        <div className={classes["container-image"]}>IMAGE</div>
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
