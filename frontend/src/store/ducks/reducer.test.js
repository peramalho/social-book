import reducer, { Types } from './reducer';

describe('Reducer', () => {
  it('handles actions with unknown type', () => {
    const action = {
      type: 'RANDOM WORD',
    };

    const newState = reducer({}, action);
    expect(newState).toEqual({});
  });

  it('handles actions with DELETE_POST type', () => {
    const action = {
      type: Types.DELETE_POST,
      payload: '1234',
    };

    const newState = reducer({ posts: [{ _id: '1234' }] }, action);
    expect(newState.posts).toEqual([]);
  });

  it('handles actions with FETCH_POSTS type', () => {
    const posts = [
      { message: '123', _id: '123' },
      { message: '456', _id: '456' },
    ];
    const action = {
      type: Types.FETCH_POSTS,
      payload: posts,
    };

    const newState = reducer({ posts: [] }, action);
    expect(newState.posts).toEqual(posts);
  });

  it('handles actions with FETCH_COMMENTS type', () => {
    const comments = [
      { comment: '123', _id: '123' },
      { comment: '456', _id: '456' },
    ];
    const action = {
      type: Types.FETCH_COMMENTS,
      payload: comments,
    };

    const newState = reducer({ comments: [] }, action);
    expect(newState.comments).toEqual(comments);
  });

  it('handles actions with ADD_COMMENT type', () => {
    const comment = '123';
    const action = {
      type: Types.ADD_COMMENT,
      payload: comment,
    };

    const newState = reducer({ comments: [] }, action);
    expect(newState.comments).toEqual([comment]);
  });

  it('handles actions with SET_LOADING type', () => {
    const action = {
      type: Types.SET_LOADING,
      payload: true,
    };

    const newState = reducer({ isLoading: false }, action);
    expect(newState.isLoading).toEqual(true);
  });
});
