import axios from "axios";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { movies } from "./movies";
import { createMovieSuccess, getMovieByIdSuccess, updateMovieByIdSuccess, removeMovieByIdSuccess, moviesFetchData, createMovieData, getMovieByIdData, updateMovieByIdData, removeMovieByIdData } from '../actions/movies'


const mockStore = configureMockStore([thunk]);

describe("movie reducer", () => {
    let initialState;
    let mockMovie;

    beforeEach(() => {
        initialState = {
            movies: [],
            movie: [],
        };

        mockMovie = {
            id: 337167,
            title: "Fifty Shades Freed",
            tagline: "Don't miss the climax",
            vote_average: 6,
            vote_count: 1195,
            release_date: "2018-02-07",
            poster_path: "https://image.tmdb.org/t/p/w500/3kcEGnYBHDeqmdYf8ZRbKdfmlUy.jpg",
            overview: "Believing they have left behind shadowy figures from their past, newlyweds Christian and Ana fully embrace an inextricable connection and shared life of luxury. But just as she steps into her role as Mrs. Grey and he relaxes into an unfamiliar stability, new threats could jeopardize their happy ending before it even begins.",
            budget: 55000000,
            revenue: 136906000,
            runtime: 106
        };
    });



    it("returns the initial state when an action type is not passed", () => {
        expect(movies(undefined, {})).toEqual(initialState.movies);
    });

    describe("fetch action creator", () => {
        it("dispatches fetch action and returns data on success", async () => {
            const store = mockStore(initialState);
            axios.get = jest.fn(() => Promise.resolve())

            store.dispatch(moviesFetchData()).then(() => {
                expect(axios.get).toHaveBeenCalled()
            });
        });
    });

    describe("create action axios to be called", () => {
        it("dispatches create action and returns data on success", async () => {
            const store = mockStore(initialState);
            axios.post = jest.fn(() => Promise.resolve())

            store.dispatch(createMovieData()).then(() => {
                expect(axios.post).toHaveBeenCalled()
            });
        });
    });

    describe("getMovieByIdData action axios to be called", () => {
        it("dispatches getMovieByIdData action and returns data on success", async () => {
            const store = mockStore(initialState);
            axios.get = jest.fn(() => Promise.resolve())

            store.dispatch(getMovieByIdData()).then(() => {
                expect(axios.get).toHaveBeenCalled()
            });
        });
    });

    describe("updateMovieByIdData action axios to be called", () => {
        it("dispatches updateMovieByIdData action and returns data on success", async () => {
            const store = mockStore(initialState);
            axios.put = jest.fn(() => Promise.resolve())

            store.dispatch(getMovieByIdData()).then(() => {
                expect(axios.put).toHaveBeenCalled()
            });
        });
    });

    describe("removeMovieByIdData action axios to be called", () => {
        it("dispatches removeMovieByIdData action and returns data on success", async () => {
            const store = mockStore(initialState);
            axios.delete = jest.fn(() => Promise.resolve())

            store.dispatch(getMovieByIdData()).then(() => {
                expect(axios.delete).toHaveBeenCalled()
            });
        });
    });

    it("handles CREATE_MOVIE_SUCCESS as expected", () => {
        const reducer = createMovieSuccess({
            type: "CREATE_MOVIE_SUCCESS",
            mockMovie
        });

        expect(reducer.movie).toEqual({
            mockMovie,
            "type": "CREATE_MOVIE_SUCCESS",

        });
    });

    it("handles GET_MOVIE_BY_ID_SUCCESS as expected", () => {
        const reducer = getMovieByIdSuccess({
            type: "GET_MOVIE_BY_ID_SUCCESS",
            mockMovie
        });

        expect(reducer.movie).toEqual({
            mockMovie,
            "type": "GET_MOVIE_BY_ID_SUCCESS",

        });
    });

    it("handles UPDATE_MOVIE_BY_ID_SUCCESS as expected", () => {
        const reducer = updateMovieByIdSuccess({
            type: "UPDATE_MOVIE_BY_ID_SUCCESS",
            mockMovie
        });

        expect(reducer.movie).toEqual({
            mockMovie,
            "type": "UPDATE_MOVIE_BY_ID_SUCCESS",
        });
    });

    it("handles REMOVE_MOVIE_BY_ID_SUCCESS as expected", () => {
        const reducer = removeMovieByIdSuccess({
            type: "REMOVE_MOVIE_BY_ID_SUCCESS",
            mockMovie
        });

        expect(reducer.movie).toEqual({
            mockMovie,
            "type": "REMOVE_MOVIE_BY_ID_SUCCESS",
        });
    });

});