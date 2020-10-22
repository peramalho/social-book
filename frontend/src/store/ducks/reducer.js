import axios from 'axios';

// Action Types
export const Types = {
  FETCH_POSTS: 'FETCH_POSTS',
  DELETE_POST: 'DELETE_POST',
  FETCH_COMMENTS: 'FETCH_COMMENTS',
  ADD_COMMENT: 'ADD_COMMENT',
  SET_LOADING: 'SET_LOADING',
};

// Reducer
const initialState = {
  posts: [],
  comments: [],
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.FETCH_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case Types.DELETE_POST:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case Types.FETCH_COMMENTS:
      return {
        ...state,
        comments: action.payload,
      };
    case Types.ADD_COMMENT:
      return {
        ...state,
        comments: [...state.comments, action.payload],
      };
    case Types.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};

// Action Creators

export const setLoading = (isLoading) => ({
  type: Types.SET_LOADING,
  payload: isLoading,
});

export const fetchPosts = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/posts`
    );
    const posts = await response.data;
    dispatch({ type: Types.FETCH_POSTS, payload: posts });
  } catch (err) {
    console.log(err);
  }
  dispatch(setLoading(false));
};

export const deletePost = (_id) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/posts/${_id}`);
    dispatch({ type: Types.DELETE_POST, payload: _id });
  } catch (err) {
    console.log(err);
  }
};

export const fetchComments = (_id) => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/posts/${_id}/comments`
    );
    const comments = await response.data;
    dispatch({ type: Types.FETCH_COMMENTS, payload: comments });
  } catch (err) {
    console.log(err);
  }
  dispatch(setLoading(false));
};

export const addComment = (_id, comment) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/posts/${_id}/comments`,
      comment
    );
    const newComment = await response.data;
    dispatch({ type: Types.ADD_COMMENT, payload: newComment });
  } catch (err) {
    console.log(err);
  }
};

export default reducer;
