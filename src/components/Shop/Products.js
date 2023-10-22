import { Row } from "react-bootstrap";
import ProductItem from "./ProductItem";
import { useSelector } from "react-redux";

const Products = () => {
  const products = useSelector((state) => state.product.items);

  return (
    <Row>
      {products.map((product) => (
        <ProductItem
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          image={product.image}
        />
      ))}
    </Row>
  );
};

export default Products;
