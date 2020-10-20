import reducer, { Types } from './reducer';

describe('Reducer', () => {
  it('handles actions with unknown type', () => {
    const action = {
      type: 'RANDOM WORD',
    };

    const newState = reducer({}, action);
    expect(newState).toEqual({});
  });

  it('handles actions with CREATE_POST type', () => {
    const action = {
      type: Types.CREATE_POST,
      payload: 'message',
    };

    const newState = reducer({ posts: [] }, action);
    expect(newState.posts[0]).toEqual('message');
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
});
