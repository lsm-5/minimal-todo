import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Header, Name, Top, Top1, Top2 } from './styles';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <Top>
            <Top1>
              <Icon name="menu" size={30} color="#fff" />
            </Top1>
            <Top2>
              <Icon name="search" size={30} color="#fff" />
              <Icon name="notifications" size={30} color="#fff" />
            </Top2>
          </Top>
          <Name>What's up Olivia!</Name>
        </Header>
      </Container>
    </>
  );
};

export default App;
