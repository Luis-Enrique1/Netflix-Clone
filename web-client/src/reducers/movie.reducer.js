import actionTypes from "@/actionTypes";

const initialState = {
  searchMovieResult: [],
  selectedMovie: {},
  trendingCollectionList: [],
  popularCollectionList: [],
  topRatingCollectionList: [],
  isLoading: false
};

export default (state = initialState, action) => {
  const newState = { ...state };
  switch (action.type) {
    /* Fetch initiated */
    case actionTypes.MOVIE_FETCH:
      newState.isLoading = true;
      return newState;

    case actionTypes.MOVIE_COLLECTION_FETCH:
      newState.isLoading = true;
      return newState;

    /* Fetch Success */
    case actionTypes.MOVIE_FETCH_SUCCESS:
      newState.isLoading = false;
      if (action.payload.movie.length > 0)
        newState.selectedMovie = action.payload.movie[0];
      return newState;

    case actionTypes.MOVIE_COLLECTION_FETCH_SUCCESS:
      newState.isLoading = false;
      switch (action.payload.collectionName) {
        case "trending":
          newState.trendingCollectionList = action.payload.movieCollection;
          break;
        case "popular":
          newState.popularCollectionList = action.payload.movieCollection;
          break;
        case "rating":
          newState.topRatingCollectionList = action.payload.movieCollection;
          break;
        default:
          break;
      }
      return newState;

    /* Fetch Errors */
    case actionTypes.MOVIE_FETCH_ERROR:
      newState.isLoading = false;
      return newState;

    case actionTypes.MOVIE_COLLECTION_FETCH_ERROR:
      newState.isLoading = false;
      return newState;

    /* clear data */
    case actionTypes.CLEAR_SELECTED_MOVIE:
      newState.selectedMovie = {};
      return newState;

    case actionTypes.MOVIE_SEARCH_RESULT_CLEAR:
      newState.searchMovieResult = [];
      return newState;

    default:
      return state;
  }
};
