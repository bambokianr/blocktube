import React from 'react';

import logo from '../../assets/logo.png';

import { Container, Content, Profile, Avatar } from './styles';

function Header({ account }) {
  return (
    <Container>
      <Content>
        <img src={logo} alt="BlockTube" />
        <Profile>
          <p>{account}</p>
          <Avatar>
            <span>{account.charAt(account.length-1)}</span>
          </Avatar>
        </Profile>
      </Content>
    </Container>
  );
}
export default Header;