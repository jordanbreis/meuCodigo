const pokemons = [
    {
        name: 'Pikachu',
        type: 'eletric',
        evolucao: 'Primeiro Estagio'
    },
    {
        name: 'Elekid',
        type: 'eletric',
        evolucao: 'Segundo Estagio'
    },
    {
        name: 'Bulbassauro',
        type: 'grass',
        evolucao: 'Primeiro Estagio'
    },
    {
        name: 'Chikorita',
        type: 'grass',
        evolucao: 'Segundo Estagio'
    },
]


const pokemonsPorTipo = pokemons.reduce((pokemonsPorTipo:any, pokemonAtual) => {
    
    pokemonsPorTipo[pokemonAtual.evolucao] = pokemonsPorTipo[pokemonAtual.evolucao] || []
    pokemonsPorTipo[pokemonAtual.evolucao].push(pokemonAtual)
    
    return pokemonsPorTipo

}, {})

console.log(pokemonsPorTipo)