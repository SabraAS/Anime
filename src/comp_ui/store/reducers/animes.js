const initialState = {
    top10: []
}

    export default function animesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_TOP10ANIMES':
            const top10 = action.payload.data.Page.media.map(anime => {
                return {
                    path: anime.bannerImage,
                    name: anime.title.userPreferred
                }
            })
            return {
                top10Anime: [...top10]
            }
        case 'GET_ANIMES':
            const animeList = action.payload.data.Page.media.map(anime => {
                return {
                    path: anime.bannerImage,
                    name: anime.title.userPreferred
                }
            })
            return {
                top10Anime: [...animeList]
            }
        default:
            return state
    }
}