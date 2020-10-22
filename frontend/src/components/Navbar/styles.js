import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  border-bottom: 1px solid ${(props) => props.theme.color.light};
`;

export const Link = styled(NavLink)`
  padding: 20px;
  color: ${(props) => props.theme.color.dark};
  :hover,
  &.active {
    background: ${(props) => props.theme.color.secondary};
    color: white;
  }
`;
