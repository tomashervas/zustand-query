import {create} from 'zustand';
import {persist} from 'zustand/middleware';


type FavouriteRepoState = {
    idsFav: number[],
    addFavorite: (id: number) => void,
    removeFavorite: (id: number) => void,
}


export const useFavouriteRepos = create(
    persist<FavouriteRepoState>((set)=>({
        idsFav: [],
        addFavorite: (id) => set((state)=> ({idsFav: [...state.idsFav, id]}) ),
        removeFavorite: (id) => set((state)=> ({idsFav: state.idsFav.filter(repoId => repoId!== id)}) ),
    
    }),{name: 'favouriteRepos'})
)