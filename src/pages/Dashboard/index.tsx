import React from 'react';
import {} from 'react-native';

import { useAuth } from '../../hooks/auth';

import { Container, Title, ButtonText, Button } from './styles';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Title style={{ fontSize: 20 }}>Dashboard</Title>
      <Button onPress={signOut}>
        <ButtonText>Sair</ButtonText>
      </Button>
    </Container>
  );
};
export default Dashboard;
