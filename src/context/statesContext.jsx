import React, { createContext, useState } from "react"


export const StatesContext = createContext()

export function StatesProvider({ children }) {
    const [favorite, setFavorite] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState([]);

    return (
        <StatesContext.Provider value={{ favorite, setFavorite, pokemonDetails, setPokemonDetails}}>
            {children}
        </StatesContext.Provider>
    )
}