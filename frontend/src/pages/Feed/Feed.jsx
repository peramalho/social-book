import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchPosts, deletePost } from '../../store/ducks/reducer';
import PostCard from './PostCard';
import { PageWrapper, Loader } from '../../components/styles';

function Feed() {
  const posts = useSelector((state) => state.posts);
  const isLoading = useSelector((state) => state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleDelete = (_id) => {
    dispatch(deletePost(_id));
  };

  return (
    <PageWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        posts &&
        posts.map((post) => (
          <PostCard
            key={post._id}
            _id={post._id}
            message={post.message}
            comments={post.comments.length}
            handleDelete={handleDelete}
          />
        ))
      )}
    </PageWrapper>
  );
}

export default Feed;
