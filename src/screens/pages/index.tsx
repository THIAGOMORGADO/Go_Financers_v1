import React from 'react';
import { Feather } from '@expo/vector-icons';
import { 
  Container, 
  Header,
  UserWrapper,
  UseInfo,
  Photo,
  User,
  UseGreetings,
  UseName,
  Icon,
  HighLightCards,
} from './styles';
import { HighLightCard } from '../../components/HighLIghtCard';

export function Dashboard() {
  return(
    <Container>
      <Header>
      <UserWrapper>
        <UseInfo>
            <Photo source={{uri: 'https://avatars.githubusercontent.com/u/27393649?v=4'}}/>
            <User>
              <UseGreetings>Ola,</UseGreetings>
              <UseName>Thiago morgado</UseName>
            </User>  
        </UseInfo>
        <Icon name='power' />  
      </UserWrapper>

      
     
      </Header>

      <HighLightCards>
        <HighLightCard 
          title='Entradas' 
          amount='17.400,00' 
          lastTransaction='Ultima entrada dia 13 de setembo'
          type="up"
        />
        <HighLightCard 
          title='Saidas' 
          amount='10.400,00' 
          lastTransaction='Ultima entrada dia 20 de setembo'
          type="down"
        />
        <HighLightCard 
          title='Total' 
          amount='17.400,00' 
          lastTransaction='Ultima entrada dia 31 de setembo'
          type="total"
        />
      </HighLightCards>
      


    </Container>
  );
}