import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  Header,
  Name,
  Top,
  Top1,
  Top2,
  TextList,
  CustomButton,
} from './styles';
import Footer from './Footer/App';
import Tabs from './Tabs/App';
import Daily from './daily/App';

const App: React.FC = () => {
  return (
    <>
      <Container>
        <Header>
          <Top>
            <Top1>
              <CustomButton onPress={() => alert('Menu')}>
                <Icon name="menu" size={30} color="#fff" />
              </CustomButton>
            </Top1>
            <Top2>
              <CustomButton onPress={() => alert('Search')}>
                <Icon name="search" size={30} color="#fff" />
              </CustomButton>
              <CustomButton onPress={() => alert('Notifications')}>
                <Icon name="notifications" size={30} color="#fff" />
              </CustomButton>
            </Top2>
          </Top>
          <Name>What's up Olivia!</Name>
          <TextList>Lista de Tarefas:</TextList>
        </Header>
        <Tabs />
      </Container>
      <Daily />
      <Footer />
    </>
  );
};

export default App;
