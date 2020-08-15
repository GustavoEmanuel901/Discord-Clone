import React from 'react';

import { Container, Profile, Avatar, UserData, Icons, MicIcon, HeadphoneIcon, SettingsIcon } from './styles';

const UserInfo: React.FC = () => {
  return (
    <Container>
      <Profile>
        <Avatar/>
        <UserData>
          <strong>Gustavo Emanuel</strong>
          <span>#901</span>
        </UserData>
      </Profile>
     
      <Icons>
        <MicIcon/>
        <HeadphoneIcon/>
        <SettingsIcon/>
      </Icons>
    </Container>
  );
}

export default UserInfo;