import styled from 'styled-components';

export const Form = styled.form`
  padding: 10px;
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  width: 400px;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Title = styled.label`
  font-size: ${(props) => props.theme.fontSize.gigantic};
  margin-bottom: 10px;
  align-self: center;
`;

export const TextArea = styled.textarea`
  padding: 10px;
  height: 200px;
  resize: none;
  border: 1px solid black;
  font-size: ${(props) => props.theme.fontSize.medium};
`;

export const Error = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
  color: red;
  align-self: flex-end;
`;

export const Button = styled.button`
  margin-top: 10px;
  font-size: ${(props) => props.theme.fontSize.gigantic};
  border-radius: 3px;
  background: violet;
  padding: 3px;
  cursor: pointer;
  :hover {
    opacity: 0.8;
  }
`;
