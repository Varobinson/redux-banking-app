import { Grid, Header, Segment } from 'semantic-ui-react';
import './App.css';
import Account from './components/Accont/Account';



function App() {
  return (
   <Segment vertical align="center">
     <Header as="h1" textAlign="center" >My Bank</Header>
     <Grid columns="2">
       <Grid.Row>
        <Grid.Column>
        <Account title="Checking" />
        </Grid.Column>
        <Grid.Column>
        <Account title="Savings" />
        </Grid.Column>
       </Grid.Row>
     </Grid>
   </Segment>
  );
}

export default App;
