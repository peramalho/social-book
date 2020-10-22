import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, Comment } from './styles';

function Comments({ comments }) {
  return (
    <Wrapper>
      {comments &&
        comments.length > 0 &&
        comments.map((comment) => (
          <Comment key={comment._id}>{comment.comment}</Comment>
        ))}
      {console.log(comments)}
    </Wrapper>
  );
}

Comments.propTypes = {
  comments: PropTypes.string,
};

Comments.defaultProps = {
  comments: '',
};

export default Comments;
