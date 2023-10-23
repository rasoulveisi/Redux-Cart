import { Button, Card, Container } from "react-bootstrap";
import CartItem from "./CartItem";
import { useSelector, useDispatch } from "react-redux";
import { Checkout } from "./Checkout";
import { useState } from "react";
import { cartActions } from "../../store/cart-slice";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const [showOrder, setShowOrder] = useState(false);

  const onOrderCheckout = () => {
    setShowOrder(!showOrder);
  };

  const onConfirm = () => {
    alert("confrimed");
    dispatch(cartActions.removeAll());
  };

  return (
    <Container className="bg-secondary text-light rounded">
      {!!cart.length && (
        <div className="py-3 px-1">
          {!showOrder && (
            <>
              <h2>Your Shopping Cart</h2>
              <Card className="bg-transparent border-0">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={{
                      id: item.id,
                      title: item.title,
                      quantity: item.quantity,
                      total: item.totalPrice,
                      price: item.price,
                      image: item.image,
                      description: item.description,
                    }}
                  />
                ))}
              </Card>

              <Button onClick={onOrderCheckout}>Order</Button>
            </>
          )}

          {showOrder && (
            <Checkout onCancel={onOrderCheckout} onConfirm={onConfirm} />
          )}
        </div>
      )}

      {!cart.length && <h2 className="py-5">Your cart is empty...</h2>}
    </Container>
  );
};

export default Cart;
