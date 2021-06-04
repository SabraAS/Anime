const initialState = {
    top10Anime: [],
    animeList: [],
    favorites: []
}

export default function animesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TOP10ANIMES':
            const top10Anime = action.payload.data.Page.media.map(anime => {
                return {
                    path: anime.bannerImage,
                    name: anime.title.userPreferred
                }
            })
            return {
                ...state,
                top10Anime
            }
        case 'GET_ANIMES':
            const animeList = action.payload.data.Page.media.map(anime => {
                return {
                    id: anime.id,
                    name: anime.title.userPreferred,
                    path: anime.bannerImage,
                    ep: anime.episodes,
                    popularity: anime.popularity,
                    averageScore: anime.averageScore
                }
            })
            return {
                ...state,
                animeList
            }
        case 'ADD_FAVORITE':
            const favorites = [ ...state.favorites ]
            favorites.push(action.payload)
            return {
                ...state,
                favorites
            }
        default:
            return state
    }
}