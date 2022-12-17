import Card from "../UI/Card";
import classes from "./ProductItem.module.css";

const ProductItem = (props) => {
  const { title, price, description, id, image } = props;

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
          <button>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
