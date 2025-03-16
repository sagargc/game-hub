import { useState } from 'react';
import { Button, ButtonGroup, Grid, GridItem, Show } from '@chakra-ui/react'
import NavBar from './components/NavBar';
import GameGrid from './components/GameGrid';
import GenreList from './components/GenreList';
import PlatformSelector from './components/PlatformSelector';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/useGames';


export interface GameQuery {
    genre: Genre | null;
    platform: Platform | null;
}

function App() {


  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(null);

  // New way:
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid 
      templateAreas={{ 
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      
      templateColumns={{ base: '1fr', lg: '200px 1fr' }}
      // templateRows={{ base: 'auto', lg: 'auto 1fr' }}
    >
      <GridItem gridArea="nav">  
          <NavBar />
      </GridItem>

      <Show above="lg">
        <GridItem gridArea="aside" paddingX={5}>
          {/* <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre) => setSelectedGenre(genre)}/>  */}
          <GenreList selectedGenre={gameQuery.genre} onSelectGenre={(genre) => setGameQuery({...gameQuery, genre})}/>
        </GridItem>
      </Show>

      <GridItem gridArea="main">
        <PlatformSelector selectedPlatform={gameQuery.platform} onSelectPlatform={(platform) => setGameQuery({...gameQuery, platform})}/>
        {/* <GameGrid selectedPlatform={gameQuery.platform} selectedGenre={gameQuery.genre}/> */}
        <GameGrid gameQuery={gameQuery}/>
      </GridItem>

    </Grid> 
  );

}

export default App
