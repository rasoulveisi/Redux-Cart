import { Card, Container } from "react-bootstrap";
import CartItem from "./CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  let cardBody;

  if (cart.length) {
    cardBody = (
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
      </>
    );
  } else {
    cardBody = <h2 className="py-5">Your cart is empty...</h2>;
  }

  return (
    <Container className="bg-secondary text-light rounded">
      {cardBody}
    </Container>
  );
};

export default Cart;
