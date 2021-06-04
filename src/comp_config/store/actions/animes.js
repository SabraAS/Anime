import axios from "axios";

const url = 'https://anilist-graphql.p.rapidapi.com/'
const config = {
    headers: {
        'x-rapidapi-key': '054aa9228bmsh950bfb7d6e2d0f1p1e706ejsn200aadeffb41',
        'x-rapidapi-host': 'anilist-graphql.p.rapidapi.com'
    },
}

export const getTop10Animes = () => async dispatch => {
    const data = {
        query: `query($page:Int = 1,
                $id:Int ,
                $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC])
                    {
                        Page(page:$page,perPage:10)
                        {
                            media(
                                id:$id
                                sort:$sort
                            )
                            {
                                id
                                title{
                                    userPreferred
                                }
                                bannerImage
                            }
                        }
                    }`
    };
    try {
        const success = await axios.post(url, data, config);
        dispatch({ type: 'GET_TOP10ANIMES', payload: success.data });
    } catch (error) {
        console.log(error);
    }
}

export const getAnimes = (currentPage) => async dispatch => {
    const data = {
        query: `query($page:Int = ${currentPage},
                $id:Int ,
                $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC])
                    {
                        Page(page:$page,perPage:10)
                        {
                            pageInfo{
                                total
                                perPage
                                currentPage
                                lastPage
                                hasNextPage
                            }
                            media(
                                id:$id
                                sort:$sort
                            )
                            {
                                id
                                title{
                                    userPreferred
                                }
                                bannerImage
                                episodes
                                averageScore
                                popularity
                            }
                        }
                    }`
    };
    try {
        const success = await axios.post(url, data, config);
        dispatch({ type: 'GET_ANIMES', payload: success.data });
    } catch (error) {
        console.log(error);
    }
}

export const addFavorite = ({id, name, path}) => async dispatch => {
    dispatch({ type: 'ADD_FAVORITE', payload: {id, name, path} });
}