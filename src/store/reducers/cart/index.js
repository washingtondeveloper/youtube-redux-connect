const INITIAL_STATE = {
  items: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "CART_ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
};

export default cartReducer;
