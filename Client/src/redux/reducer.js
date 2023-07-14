const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    // REDUCER | ADD_FAV
    case "ADD_FAV":
      return { ...state, myFavorites: payload, allCharacters: payload };

    // REDUCER | REMOVE_FAV
    case "REMOVE_FAV":
      return { ...state, myFavorites: payload };


    //-------------------------------------------------------------
    case "FILTER":
      let copy3 = state.allCharacters.filter((char) => {
        return char.gender === payload;
      });
      return { ...state, myFavorites: copy3 };

    case "ORDER":
      let copy4 = state.allCharacters.sort((a, b) => {
        return payload === "A" ? a.id - b.id : b.id - a.id;
      });
      return {
        ...state,
        myFavorites: copy4,
      };

    default:
      return state;
  }
};

export default rootReducer;
