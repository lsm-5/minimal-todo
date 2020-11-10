import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, IconPlus, BotaoIcone } from './styles';

// import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <IconPlus onPress={() => alert('Add')}>
        <Icon name="add" size={40} color="#fff" />
      </IconPlus>
    </Container>
  );
};

export default Footer;
