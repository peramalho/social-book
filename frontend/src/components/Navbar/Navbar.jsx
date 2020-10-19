import React from 'react';
import { Wrapper, Link } from './styles';

function Navbar() {
  return (
    <Wrapper>
      <Link to="/" exact>
        Posts
      </Link>
      <Link to="/new-post">New Post</Link>
    </Wrapper>
  );
}

export default Navbar;
