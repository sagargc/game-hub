import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';

function App() {

  return (
    <Grid templateAreas={{ 
      base: `"nav" "main"`,
      lg: `"nav nav nav" "aside main main"`,
    }}>
      <GridItem gridArea="nav">  
          <NavBar />
      </GridItem>
      <Show above="lg">
        <GridItem gridArea="aside">
          Aside
        </GridItem>
      </Show>
      <GridItem gridArea="main">
        Main
      </GridItem>
    </Grid> 
  );

}

export default App
