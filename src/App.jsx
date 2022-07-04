import { Home } from "./pages/home";
import { CssBaseline } from "@mui/material";

import { PokemonProvider } from "./context/fetchPokemons";
import { StatesProvider } from "./context/statesContext";
import { PokemonDetail } from "./pages/pokemonDetails";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles"

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: [
        'Poppins',
         'Arial'
      ].join(','),
    }
  })


  return (
    <>
    <ThemeProvider theme={theme}>
      <PokemonProvider>
        <StatesProvider>
          <CssBaseline />

          <BrowserRouter>
            <Routes>
              
              <Route index element={<Home />} />
              <Route path='details' element={ <PokemonDetail /> } />
              
            </Routes>
          </BrowserRouter>
        </StatesProvider>
      </PokemonProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
