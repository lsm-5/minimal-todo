import styled from 'styled-components';

export const Container = styled.View`
  background-color: #3451a1;
  flex: 1;
`;

export const TarefasText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
  margin: -20px 30px 0;
`;
export const TarefasContainer = styled.ScrollView.attrs({
  contentContainerStyle: { paddinLeft: 10, paddingRight: 20 },
  showsVerticalScrollIndicator: false,
  pagingEnabled: true,
})`
  margin: 1px 0 3px;
  padding: 5px 0px 0px;
`;

export const ListaDeTarefas = styled.View`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 1);
  flex-direction: row;
  margin: 15px 30px 10px;
  border-radius: 15px;
  width: 350px;
  height: 60px;
  align-items: center;
  background-color: #051956;
`;
export const ListasDeTarefasText = styled.Text`
  margin: 0 5px 0;
  color: white;
  font-size: 13px;
`;
export const IconeRadio = styled.View`
  margin: 0 20px 0px;
  width: 20px;
`;
