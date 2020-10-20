import React from 'react';
import { useParams } from 'react-router-dom';

function Post() {
  const params = useParams();

  return <div>id: {params._id}</div>;
}

export default Post;
