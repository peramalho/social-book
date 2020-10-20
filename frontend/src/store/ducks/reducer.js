import axios from 'axios';

// Action Types
export const Types = {
  CREATE_POST: 'CREATE_POST',
  FETCH_POSTS: 'FETCH_POSTS',
  DELETE_POST: 'DELET_POST',
  SET_ERROR: 'SET_ERROR',
};

// Reducer
const initialState = {
  posts: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_POST:
      return {
        ...state,
        posts: [...state.posts, action.payload],
      };
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
    default:
      return state;
  }
};

// Action Creators
export const addPost = (message) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/posts`,
      message
    );
    const post = await response.data;
  } catch (err) {
    console.log(err);
  }
};

export const fetchPosts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/posts`
    );
    const posts = await response.data;
    dispatch({ type: Types.FETCH_POSTS, payload: posts });
  } catch (err) {
    console.log(err);
  }
};

export const deletePost = (_id) => async (dispatch) => {
  try {
    await axios.delete(`${process.env.REACT_APP_BACKEND_URL}/posts/${_id}`);
    dispatch({ type: Types.DELETE_POST, payload: _id });
  } catch (err) {
    console.log(err);
  }
};

export default reducer;
