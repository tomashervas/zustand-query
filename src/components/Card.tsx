import { Repository } from "../interfaces"
import { useFavoriteRepos } from "../store/favoriteRepos"

type Props = {
    repo: Repository,
    isFavourite: boolean
}

const Card = ({repo, isFavourite}: Props) => {

    const {addFavorite, removeFavorite} = useFavoriteRepos()

    const addRemoveFavourite = () => {
        if (isFavourite) removeFavorite(repo.id)
        else addFavorite(repo.id)
    }

  return (
    <div>
        <li>{repo.name}</li>
        <button onClick={ addRemoveFavourite } >{isFavourite ? 'Dislike' : 'Like!'}</button>
    </div>
    
  )
}
export default Card