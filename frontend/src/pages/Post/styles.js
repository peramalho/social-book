import styled from 'styled-components';
import { BsTrash } from 'react-icons/bs';

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${(props) => props.theme.color.dark};
  width: 500px;
  margin-bottom: 20px;
  padding: 10px;
  min-height: 120px;
  word-break: break-word;
  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const Message = styled.p`
  flex: 1;
  color: ${(props) => props.theme.color.dark};
  font-size: 1.2em;
  margin-bottom: 5px;
`;

export const OptionBar = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const DeleteIcon = styled(BsTrash)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  z-index: 10;
  :hover {
    color: red;
  }
`;

export const MessageInfo = styled.span`
  display: flex;
`;
