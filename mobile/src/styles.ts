import styled from 'styled-components';

export const Container = styled.View`
  flex: 1;
  background-color: #3451a1;
`;
export const Header = styled.View`
  padding: 38px 0 0;
  max-height: 220px;
  flex: 1;
`;
export const Top = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  flex: 1;
`;
export const Top1 = styled.View`
  align-items: flex-start;
  flex-direction: row;
  flex: 2;
  margin: 0px 30px 0px;
`;

export const Top2 = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-between;
  flex: 1;
  margin: 0px 30px 0;
`;

export const Name = styled.Text`
  flex: 1;
  color: white;
  font-size: 30px;
  font-weight: bold;
  margin: 50px 10px 0px;
  padding-left: 20px;
  text-shadow: 1px -1px 5px #000;
`;
export const TextList = styled.Text`
  font-weight: bold;
  margin: 20px 30px 0;
  color: white;
  font-size: 16px;
`;

export const CustomButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
`;
