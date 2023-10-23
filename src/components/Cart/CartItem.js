import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cart-slice";

const CartItem = (props) => {
  const dispatch = useDispatch();
  const { title, quantity, total, price, id, image } = props.item;

  const plusHandler = () => {
    dispatch(
      cartActions.addItemToCart({
        id,
        title,
        price,
        image,
      })
    );
  };

  const minusHandler = () => {
    dispatch(cartActions.removeItemFromCart(id));
  };

  return (
    <div class="card mb-3">
      <div class="row g-0">
        <div class="col-md-2 d-flex justify-content-center">
          <img src={image} class="img-fluid rounded-start " alt="..."></img>
        </div>
        <div class="col-md-10">
          <div class="card-body d-flex flex-column h-100">
            <h3 class="card-title">{title}</h3>
            <p class="card-text flex-grow-1">
              <small class="text-body-secondary">
                <span className="me-2">${total.toFixed(2)}</span>
                <span>(${price.toFixed(2)}/item)</span>
              </small>
            </p>
            <div>
              <span>{quantity}x </span>
              <button onClick={minusHandler}>-</button>
              <button onClick={plusHandler}>+</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
