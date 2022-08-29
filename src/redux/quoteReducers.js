const initialState = {
  data: "",
  favorite: [],
  myquote: [],
  error: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_QUOTE_SUCCESS":
      return {
        ...state,
        data: action.payload,
      };
    case "GET_QUOTE_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    case "ADD_FAVORITE":
      //   state.favorite.length > 0
      //     ? duplicateFavorite(state.favorite, action.payload)
      //     :
      return {
        ...state,
        favorite: [...state.favorite, action.payload],
      };
    case "MY_QUOTE":
      return {
        ...state,
        myquote: [...state.myquote, action.payload],
      };
    default:
      return state;
  }
};

// const duplicateFavorite = (state, data) => {
//   state.map((item) => {
//     if (item === data) {
//       return {
//         ...state,
//       };
//     } else {
//       return {
//         ...state,
//         favorite: [...state, data],
//       };
//     }
//   });
// };

export default reducer;
