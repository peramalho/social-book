import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Link = styled(NavLink)`
  padding: 20px;
  color: black;
  :hover,
  &.active {
    background: gray;
  }
`;
