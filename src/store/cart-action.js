import { cartActions } from "./cart-slice";

export const getCart = () => {
  return async (dispatch) => {
    const getData = async () => {
      const response = localStorage.getItem("reduxState")
        ? JSON.parse(localStorage.getItem("reduxState"))
        : {};

      const data = response;
      return data;
    };

    const cartData = await getData();
    dispatch(
      cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity ?? 0,
      })
    );
  };
};

export const setCart = (cart) => {
  return async (dispatch) => {
    const setData = async () => {
      localStorage.setItem(
        "reduxState",
        JSON.stringify({
          items: cart.items,
          totalQuantity: cart.totalQuantity,
        })
      );
    };

    await setData();
  };
};
