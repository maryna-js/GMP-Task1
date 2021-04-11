import axios from 'axios'

export function moviesFetchDataSuccess(movies) {
    return {
        type: "MOVIES_FETCH_DATA_SUCCESS",
        movies
    }
}

export function moviesFetchData(url) {
    return async (dispatch) => {
        const response = await axios.get(url);
        return dispatch(moviesFetchDataSuccess(response.data))
    }
}

export function createMovieSuccess(movie) {
    return {
        type: "CREATE_MOVIE_SUCCESS",
        movie
    }
}

export function createMovieData(movie) {
    return async (dispatch) => {
        const response = await axios.post('http://localhost:4000/movies', movie);
        return dispatch(createMovieSuccess(response.data))
    }
}

export function getMovieByIdSuccess(movie) {
    return {
        type: "GET_MOVIE_BY_ID_SUCCESS",
        movie
    }
}

export function getMovieByIdData(id) {
    return async (dispatch) => {
        const response = await axios.get(`http://localhost:4000/movies/${id}`);
        return dispatch(getMovieByIdSuccess(response.data))
    }
}

export function updateMovieByIdSuccess(movie) {
    return {
        type: "UPDATE_MOVIE_BY_ID_SUCCESS",
        movie
    }
}

export function updateMovieByIdData(movie) {
    return async (dispatch) => {
        const response = await axios.put(`http://localhost:4000/movies/`, movie);
        return dispatch(getMovieByIdSuccess(response.data))
    }
}

export function removeMovieByIdSuccess(movie) {
    return {
        type: "REMOVE_MOVIE_BY_ID_SUCCESS",
        movie
    }
}

export function removeMovieByIdData(id) {
    return async (dispatch) => {
        const response = await axios.delete(`http://localhost:4000/movies/${id}`);
        return dispatch(removeMovieByIdSuccess(response.data))
    }
}