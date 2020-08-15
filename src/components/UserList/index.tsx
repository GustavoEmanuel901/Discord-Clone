import React from 'react';

import { Container, User, Role, Avatar } from './styles';

interface UserProps {
  nickname: string;
  isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({nickname, isBot}) => {
  return (
    <User>
      <Avatar className={isBot ? 'bot' : ''}/>

      <strong>{nickname}</strong>

      {isBot && <span>Bot</span>}
    </User>
  )
}

const UserList: React.FC = () => {
  return (
    <Container>
      <Role>Disponível - 1</Role>
      <UserRow nickname='Gustavo Emanuel'/>

      <Role>Offline - 1</Role>
      <UserRow nickname='Diego Fernandes' isBot/>
      <UserRow nickname='Fulana'/>
      <UserRow nickname='Fulana' isBot/>
      <UserRow nickname='Fulana'/>
      <UserRow nickname='Fulana'/>
      <UserRow nickname='Fulana'/>
      <UserRow nickname='Fulana' isBot/>
      <UserRow nickname='Fulana'/>
      <UserRow nickname='Fulana'/>
      <UserRow nickname='Fulana'/>
      <UserRow nickname='Fulana'/>
      <UserRow nickname='Fulana'/>

    </Container>
  );
}

export default UserList;