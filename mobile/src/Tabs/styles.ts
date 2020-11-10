import { StatusBar } from 'react-native';
import styled from 'styled-components';

export const Container = styled.View`
  height: 115px;
  margin-top: 20px;
`;

export const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: { paddinLeft: 10, paddingRight: 20 },
  showsHorizontalScrollIndicator: false,
  pagingEnabled: true,
})`
margin: 0px 10px 0px;
`;

export const TabItem = styled.View`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  flex-direction: row;
  margin: 0px 10px 0px;
  border-radius: 15px;
  width: 200px;
  height: 100px;
  background-color: #051956;
  align-items: center;
  justify-content: space-evenly;
`;

export const TabText = styled.Text`
  font-weight: bold;
  margin: -50px 10px 0;
  color: white;
  font-size: 15px;
`;
export const IconList = styled.View`
  margin: -50px 5px 0;
`;
export const CustomButton = styled.TouchableOpacity`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  flex-direction: row;
  margin: 0px 5px 0px;
  border-radius: 15px;
  width: 200px;
  height: 100px;
  background-color: #051956;
  align-items: center;
  justify-content: space-evenly;
`;
