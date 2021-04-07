export function movie(state = [], action) {
    switch (action.type) {
        case "GET_MOVIE_BY_ID_SUCCESS":
            return action.movie;
        default:
            return state;
    }
}