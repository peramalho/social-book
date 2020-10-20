import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from '../../store/ducks/reducer';
import PostCard from '../../components/PostCard';
import { PageWrapper } from '../../components/styles';

function Feed() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (_id) => {
    dispatch(deletePost(_id));
  };

  return (
    <PageWrapper>
      {posts &&
        posts.map((post) => (
          <PostCard
            key={post._id}
            _id={post._id}
            message={post.message}
            handleDelete={handleDelete}
          />
        ))}
    </PageWrapper>
  );
}

export default Feed;
