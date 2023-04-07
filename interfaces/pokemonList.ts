export interface PokemonLiistResponse  {
    count:    number;
    next?:     string;
    previous?: string;
    results:  SmallPokemons[];
}

export interface SmallPokemons {
    name: string;
    url:  string;
    id: number
}
