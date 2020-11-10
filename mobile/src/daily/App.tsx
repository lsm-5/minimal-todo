import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {
  Container,
  TarefasText,
  TarefasContainer,
  ListaDeTarefas,
  ListasDeTarefasText,
  IconeRadio,
} from './styles';

const Daily: React.FC = () => {
  return (
    <Container>
      <TarefasText>Tarefas de hoje:</TarefasText>
      <TarefasContainer>
        <ListaDeTarefas>
          <IconeRadio>
            <Icon name="radio-button-unchecked" size={20} color="#fff" />
          </IconeRadio>
          <ListasDeTarefasText>Tirar o lixo.</ListasDeTarefasText>
        </ListaDeTarefas>
        <ListaDeTarefas>
          <IconeRadio>
            <Icon name="radio-button-unchecked" size={20} color="#fff" />
          </IconeRadio>
          <ListasDeTarefasText>Ir no mercado</ListasDeTarefasText>
        </ListaDeTarefas>
        <ListaDeTarefas>
          <IconeRadio>
            <Icon name="radio-button-unchecked" size={20} color="#fff" />
          </IconeRadio>
          <ListasDeTarefasText>Ler o artigo.</ListasDeTarefasText>
        </ListaDeTarefas>
        <ListaDeTarefas>
          <IconeRadio>
            <Icon name="radio-button-unchecked" size={20} color="#fff" />
          </IconeRadio>
          <ListasDeTarefasText>Limpar o quarto.</ListasDeTarefasText>
        </ListaDeTarefas>
        <ListaDeTarefas>
          <IconeRadio>
            <Icon name="radio-button-unchecked" size={20} color="#fff" />
          </IconeRadio>
          <ListasDeTarefasText>Fazer planilha da viagem</ListasDeTarefasText>
        </ListaDeTarefas>
        <ListaDeTarefas>
          <IconeRadio>
            <Icon name="radio-button-unchecked" size={20} color="#fff" />
          </IconeRadio>
          <ListasDeTarefasText>Ligar para o laboratório</ListasDeTarefasText>
        </ListaDeTarefas>
        <ListaDeTarefas>
          <IconeRadio>
            <Icon name="radio-button-unchecked" size={20} color="#fff" />
          </IconeRadio>
          <ListasDeTarefasText>Ligar para o fornecedor.</ListasDeTarefasText>
        </ListaDeTarefas>
      </TarefasContainer>
    </Container>
  );
};

export default Daily;
