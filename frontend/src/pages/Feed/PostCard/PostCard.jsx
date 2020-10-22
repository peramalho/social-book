import React from 'react';
import PropTypes from 'prop-types';
import {
  Wrapper,
  Message,
  OptionBar,
  DeleteIcon,
  MessageInfo,
  MessagesIcon,
  MessageText,
} from './styles';

function PostCard({ message, _id, handleDelete, comments }) {
  const clipedMessage =
    message.length < 100
      ? message
      : `${message.replace(/^(.{100}[^\s]*).*/, '$1')}...`;

  return (
    <Wrapper>
      <Message to={`/post/${_id}`}>{clipedMessage}</Message>
      <OptionBar>
        <DeleteIcon onClick={() => handleDelete(_id)} />
        <MessageInfo>
          <MessagesIcon />
          <MessageText>{comments}</MessageText>
        </MessageInfo>
      </OptionBar>
    </Wrapper>
  );
}

PostCard.propTypes = {
  message: PropTypes.string,
  _id: PropTypes.number,
  handleDelete: PropTypes.func,
  comments: PropTypes.string,
};

PostCard.defaultProps = {
  message: '',
  _id: 0,
  handleDelete: null,
  comments: '',
};

export default PostCard;
