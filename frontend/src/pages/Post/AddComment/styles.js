import styled from 'styled-components';

export const Wrapper = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Label = styled.div``;

export const TextArea = styled.textarea`
  padding: 10px;
  height: 90px;
  resize: none;
  border: 1px solid ${(props) => props.theme.color.light};
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const Button = styled.button`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize.gigantic};
  color: white;
  border-radius: 3px;
  background: ${(props) => props.theme.color.primary};
  color: ${(props) => props.theme.color.white};
  padding: 3px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;

export const Error = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  color: red;
  align-self: flex-end;
`;
