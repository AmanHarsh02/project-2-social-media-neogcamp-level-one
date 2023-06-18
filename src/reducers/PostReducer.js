export const postInitialState = {
  post: null,
  likedPosts: [],
  savedPosts: [],
  postLoading: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "SET_POST":
      return { ...state, post: action.payload };
    case "CASE_LIKE":
      return { ...state, likedPosts: action.payload };
    case "CASE_DISLIKE":
      return { ...state, likedPosts: action.payload };
    case "CASE_SAVE":
      return { ...state, savedPosts: action.payload };
    case "CASE_UNSAVE":
      return { ...state, savedPosts: action.payload };
    case "SET_LOADING":
      return { ...state, postLoading: !state.postLoading };
    default:
      return { ...state };
  }
};
