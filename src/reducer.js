export const initialState = {
  basket: [],
  user: null,
};

//usually added inside of a reducer. this is a selector
//to calle it and give the basket total
//reduce takes a function
export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_BASKET":
      //LOGIC FOR adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };

    case "REMOVE_FROM_BASKET":
      //Logic for removing item from basket

      //here we clone the basket
      let newBasket = [...state.basket];

      //here we check to see if product exits,
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );

      if (index >= 0) {
        //item exists in basket, remove it...
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove product (id: ${action.id}) as its not in basket`
        );
      }

      return { ...state, basket: newBasket };

    default:
      return state;
  }
}

export default reducer;
