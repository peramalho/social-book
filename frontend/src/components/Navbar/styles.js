import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid gray;
`;

export const Link = styled(NavLink)`
  padding: 20px;
  color: black;
  :hover,
  &.active {
    background: gray;
    color: white;
  }
`;
