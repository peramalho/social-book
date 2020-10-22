import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Comments from './Comments';
import AddComment from './AddComment';
import { PageWrapper, Loader } from '../../components/styles';
import { PostWrapper, Message, OptionBar, DeleteIcon } from './styles';
import { fetchComments, deletePost } from '../../store/ducks/reducer';

function Post() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const [post, setPost] = useState({});
  const comments = useSelector((state) => state.comments);
  const isLoading = useSelector((state) => state.isLoading);

  const fetchPost = useCallback(async () => {
    const response = await axios.get(
      `${process.env.REACT_APP_BACKEND_URL}/posts/${params._id}`
    );
    await setPost(response.data);
  }, [params._id]);

  const handleDelete = (_id) => {
    dispatch(deletePost(_id));
    history.push('/');
  };

  useEffect(() => {
    fetchPost();
    dispatch(fetchComments(params._id));
  }, [fetchPost, dispatch, params._id]);

  return (
    <PageWrapper>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <PostWrapper>
            <OptionBar>
              <DeleteIcon onClick={() => handleDelete(post._id)} />
            </OptionBar>
            <Message>{post.message}</Message>
            <Comments comments={comments} />
          </PostWrapper>
          <AddComment _id={post._id} />
        </>
      )}
    </PageWrapper>
  );
}

export default Post;
