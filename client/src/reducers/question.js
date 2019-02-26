const initialState = {
  total: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_TOTAL":
      return { ...state, total: payload };

    default:
      return state;
  }
};
