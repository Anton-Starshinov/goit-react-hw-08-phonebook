import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MailStyled = styled.p`
  font-weight: bold;
  font-size: 19px;
  color: black;
  padding: 0;
`;

export const ButtonStyled = styled.button`
  width: 100px;
  height: 27px;
  border-radius: 4px;
  background-color: lightsteelblue;
  color: black;
  font-size: 17px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  &.active {
    color: rgb(100, 156, 202);
  }
`;
