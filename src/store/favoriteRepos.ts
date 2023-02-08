import {create} from 'zustand';
import {persist} from 'zustand/middleware';


type FavoriteRepoState = {
    idsFav: number[],
    addFavorite: (id: number) => void,
    removeFavorite: (id: number) => void,
}


export const useFavoriteRepos = create(
    persist<FavoriteRepoState>((set)=>({
        idsFav: [],
        addFavorite: (id) => set((state)=> ({idsFav: [...state.idsFav, id]}) ),
        removeFavorite: (id) => set((state)=> ({idsFav: state.idsFav.filter(repoId => repoId!== id)}) ),
    
    }),{name: 'favoriteRepos'})
)