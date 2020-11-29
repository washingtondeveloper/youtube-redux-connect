const INITIAL_STATE = {
  items: [],
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case "CART_ADD_ITEM":
      return { ...state, items: [...state.items, action.payload] };
    default:
      return state;
  }
}
