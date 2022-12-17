import ProductItem from "./ProductItem";
import classes from "./Products.module.css";

const DUMMY_PRODUCT = [
  {
    id: "p1",
    price: 1,
    title: "First Product",
    description: "The first product description",
  },
  {
    id: "p2",
    price: 2,
    title: "Secound Product",
    description: "The secound product description",
  },
];

const Products = (props) => {
  return (
    <section className={classes.products}>
      <ul>
        {DUMMY_PRODUCT.map((product) => (
          <ProductItem
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
          />
        ))}
      </ul>
    </section>
  );
};

export default Products;
