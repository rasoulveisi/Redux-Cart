import { productActions } from "./product-slice";

export const fetchProduct = () => {
  return async (dispatch) => {
    const fetchData = async () => {
      const response = await fetch("https://fakestoreapi.com/products?limit=5");

      if (!response.ok) return;
      const data = await response.json();

      const loadedData = [];

      for (const key in data) {
        loadedData.push({
          id: data[key].id,
          title: data[key].title,
          price: data[key].price,
          description: data[key].description,
          image: data[key].image,
        });
      }

      return data;
    };

    const productData = await fetchData();
    dispatch(
      productActions.replaceProduct({
        items: productData || [],
      })
    );
  };
};
