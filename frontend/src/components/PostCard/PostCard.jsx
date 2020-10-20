import React from 'react';
import {
  Wrapper,
  Message,
  OptionBar,
  DeleteIcon,
  MessageInfo,
  MessagesIcon,
  MessageText,
} from './styles';

function PostCard({ message, _id, handleDelete }) {
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
          <MessageText>50</MessageText>
        </MessageInfo>
      </OptionBar>
    </Wrapper>
  );
}

export default PostCard;
