import { pokeApi } from "@/api"
import { PokemonFull } from "@/interfaces"



export const getPokemonInfo =  async (nameOrId: string) => {
    try{
        const {data} = await pokeApi.get<PokemonFull>(`/pokemon/${nameOrId}`);
        
        return data
        

    }catch(e){
        console.log(e)
        return null
    }

}