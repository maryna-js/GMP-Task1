
export function movies(state = [], action) {
    switch (action.type) {
        case "MOVIES_FETCH_DATA_SUCCESS":
            return action.movies;
        case "CREATE_MOVIE_SUCCESS":
            return action.movie;
        case "UPDATE_MOVIE_BY_ID_SUCCESS":
            return action.movie;
        case "REMOVE_MOVIE_BY_ID_SUCCESS":
            return action.movie;
        default:
            return state;
    }
}