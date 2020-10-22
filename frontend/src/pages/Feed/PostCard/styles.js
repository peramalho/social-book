import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { BsTrash } from 'react-icons/bs';
import { BiMessageAltDetail } from 'react-icons/bi';

export const Wrapper = styled.div`
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

export const Message = styled(Link)`
  flex: 1;
  cursor: pointer;
  color: ${(props) => props.theme.color.dark};
  font-size: 1.2em;
  margin-bottom: 5px;
  transition: 0.2s;
  :hover {
    background: ${(props) => props.theme.color.light};
  }
`;

export const OptionBar = styled.div`
  display: flex;
  justify-content: space-between;
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

export const MessagesIcon = styled(BiMessageAltDetail)`
  align-self: flex-end;
  width: 20px;
  height: 20px;
`;

export const MessageText = styled.span`
  font-size: ${(props) => props.theme.fontSize.small};
`;
