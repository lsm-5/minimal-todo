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

export const TabItem = styled.TouchableOpacity`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  flex-direction: row;
  margin: 0px 10px 0px;
  border-radius: 15px;
  width: 370px;
  height: 100px;
  background-color: #051956;
  justify-content: flex-end;
  align-items: center;
`;

export const TabText = styled.Text`
  font-weight: bold;
  align-self: center;
  margin-bottom: 48px;
  margin-right: 45px;
  color: white;
  font-size: 18px;
`;
export const IconList = styled.View`
  margin-bottom: 50px;
  margin-right: 60px;
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
