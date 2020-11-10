import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  TabsContainer,
  TabItem,
  TabText,
  IconList,
  CustomButton,
} from './styles';

const Tabs: React.FC = () => {
  return (
    <Container>
      <TabsContainer>
        <TabItem>
          <CustomButton onPress={() => alert('Pessoal')}>
            <TabText>Pessoal</TabText>
            <IconList>
              <Icon name="person-outline" size={40} color="#fff" />
            </IconList>
          </CustomButton>
        </TabItem>
        <TabItem>
          <CustomButton onPress={() => alert('Trabalho')}>
            <TabText>Trabalho</TabText>
            <IconList>
              <Icon name="work-outline" size={40} color="#fff" />
            </IconList>
          </CustomButton>
        </TabItem>
        <TabItem>
          <CustomButton onPress={() => alert('Faculdade')}>
            <TabText>Faculdade</TabText>
            <IconList>
              <Icon name="library-books" size={40} color="#fff" />
            </IconList>
          </CustomButton>
        </TabItem>
        <TabItem>
          <CustomButton onPress={() => alert('Compras')}>
            <TabText>Compras</TabText>
            <IconList>
              <Icon name="shopping-cart" size={40} color="#fff" />
            </IconList>
          </CustomButton>
        </TabItem>
        <TabItem>
          <CustomButton onPress={() => alert('Viagem')}>
            <TabText>Viagem</TabText>
            <IconList>
              <Icon name="flight" size={40} color="#fff" />
            </IconList>
          </CustomButton>
        </TabItem>
      </TabsContainer>
    </Container>
  );
};
export default Tabs;
