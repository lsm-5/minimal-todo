import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, TabsContainer, TabItem, TabText, IconList } from './styles';

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabsContainer>
        <TabItem onPress={() => alert('Pessoal')}>
          <TabText>Pessoal</TabText>
          <IconList>
            <Icon name="person-outline" size={45} color="#fff" />
          </IconList>
        </TabItem>
        <TabItem onPress={() => alert('Trabalho')}>
          <TabText>Trabalho</TabText>
          <IconList>
            <Icon name="work-outline" size={45} color="#fff" />
          </IconList>
        </TabItem>
        <TabItem onPress={() => alert('Faculdade')}>
          <TabText>Faculdade</TabText>
          <IconList>
            <Icon name="library-books" size={45} color="#fff" />
          </IconList>
        </TabItem>
        <TabItem onPress={() => alert('Compras')}>
          <TabText>Compras</TabText>
          <IconList>
            <Icon name="shopping-cart" size={45} color="#fff" />
          </IconList>
        </TabItem>
        <TabItem onPress={() => alert('Viagem')}>
          <TabText>Viagem</TabText>
          <IconList>
            <Icon name="flight" size={45} color="#fff" />
          </IconList>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};
export default Tabs;
