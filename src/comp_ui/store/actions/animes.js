import axios from "axios";

export const getTop10Animes = () => async dispatch => { {
    const data = {
            query: `query($page:Int = 1,
                $id:Int ,
                $sort:[MediaSort]=[POPULARITY_DESC,SCORE_DESC])
                    {
                        Page(page:$page,perPage:7)
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
    const config = {
        headers: {
        },
    }
        try {
            const success = await axios.post('', data, config);
            dispatch({ type: 'GET_TOP10ANIMES', payload: success.data });
        } catch (error) {
            console.log(error);
        }
    }
}

export const getAnimes = (currentPage) => async dispatch => {
    console.log(currentPage)
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
    const config = {
        headers: {
        }
    };
    try {
        const success = await axios.post('', data, config);
        dispatch({ type: 'GET_ANIMES', payload: success.data });
    } catch (error) {
        console.log(error);
    }
}
