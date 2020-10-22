import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const Comment = styled.span`
  width: 70%;
  font-size: ${(props) => props.theme.fontSize.medium};
  border-bottom: 1px solid ${(props) => props.theme.color.light};
`;
