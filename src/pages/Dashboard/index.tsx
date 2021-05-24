/* eslint-disable camelcase */
import React from 'react';
import { Container, Title, BtnLogOut, BtnLogOutText } from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut, user } = useAuth();

  return (
    <Container>
      <BtnLogOut onPress={signOut}>
        <BtnLogOutText>Sair</BtnLogOutText>
      </BtnLogOut>
      <Title>{`Olá ${user.name}`}</Title>
    </Container>
  );
};

export default Dashboard;
