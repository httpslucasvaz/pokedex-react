import React, { createContext, useState, useEffect } from "react";


export const PokemonContext = createContext({})

export function PokemonProvider({ children }) {
    const baseUrl = (id) => `https://pokeapi.co/api/v2/pokemon/${id}`
    
    const [pokemonsData, setPokemonsData] = useState([])
    const [loaded, setLoaded] = useState(false)
    
    
    const resultsFetch = []
    
    async function getPokemons() {
        for (let id = 1; id <= 151; id++) {
          const response =  await fetch(baseUrl(id))
          resultsFetch.push(await response.json())
        }
    
        setPokemonsData(await Promise.all(resultsFetch))
        setLoaded(true)
        
      }

    useEffect(() => {
        getPokemons()
    }, []) 


    return(
    <PokemonContext.Provider value={{ pokemonsData, setPokemonsData, loaded }}>
      {children}
    </PokemonContext.Provider>

    )
}