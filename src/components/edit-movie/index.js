import React, { useEffect } from "react";
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { getMovieByIdData, updateMovieByIdData } from "../../actions/movies";
import TextInput from '../form/TextInput';
import SelectInput from '../form/SelectInput';
// import './index.scss';


function EditMovie(props) {
    const { showEditMovie, closeEditMovieModal, getMovieByIdData, movie, id, updateMovieByIdData } = props;
    if (!showEditMovie) {
        return null;
    }
    useEffect(() => {
        getMovieByIdData(id, movie);
    }, [id])

    return (
        <div className="add-modal">
            <div className="add-modal-header">
                <button className="add-modal-close" onClick={() => closeEditMovieModal(false)}>X</button>
            </div>
            <div>
                <h2 className="add-modal-heading">Edit movie</h2>
            </div>
            <Formik
                initialValues={{
                    id: movie?.id ?? "",
                    title: movie?.title ?? "",
                    release_date: movie?.release_date ?? "",
                    poster_path: movie?.poster_path ?? "",
                    overview: movie?.overview ?? "",
                    runtime: movie?.runtime ?? "",
                    tagline: movie?.tagline ?? "",
                    vote_average: movie?.vote_average ?? "",
                    vote_count: movie?.vote_count ?? "",
                    budget: movie?.budget ?? "",
                    revenue: movie?.revenue ?? "",
                    genres: movie?.genres ?? "",

                }}
                enableReinitialize={true}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .min(1, 'Must be 1 character or more')
                        .required('Required'),
                    poster_path: Yup.string().url().
                        required('Required'),
                    overview: Yup.string()
                        .min(10, 'Must be 10 character or more')
                        .required('Required'),
                    runtime: Yup.number()
                        .min(0, 'Must be 0 or more')
                        .required('Required'),
                    genres: Yup.array().of(Yup.string()).min(1, "Must be selected 1 genre or more").required('Required'),
                    release_date: Yup.date(),
                    tagline: Yup.string()
                        .min(1, 'Must be 1 character or more'),
                    vote_average: Yup.number().max(10, 'Must be not more then 10 '),
                    vote_count: Yup.number(),
                    budget: Yup.number()
                        .min(0, 'Must be 0 or more'),
                    revenue: Yup.number()
                        .min(0, 'Must be 0 or more'),

                })}

            >
                {({
                    values,
                    resetForm
                }) => {
                    return (
                        <Form>
                            <TextInput
                                label="Movie ID"
                                name="movie-id"
                                type="text"
                                placeholder="MO356984"
                                value={movie.id || ''}
                            />

                            <TextInput
                                label="Title *"
                                name="title"
                                type="text"
                                placeholder="Title"
                            />

                            <TextInput
                                label="Tagline"
                                name="tagline"
                                type="text"
                                placeholder="tagline"
                            />

                            <TextInput
                                label="Vote Average"
                                name="vote_average"
                                type="number"
                                placeholder="Vote Average"
                            />

                            <TextInput
                                label="Vote Count"
                                name="vote_count"
                                type="number"
                                placeholder="Vote Count"
                            />

                            <TextInput
                                label="Release date"
                                name="release_date"
                                type="date"
                                placeholder="Release date"
                            />

                            <TextInput
                                label="Movie URL *"
                                name="poster_path"
                                type="text"
                                placeholder="Movie URL"
                            />

                            <SelectInput label="Genre *" name="genres">
                                <option value="">Select a genre</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                            </SelectInput>



                            <TextInput
                                label="Overview *"
                                name="overview"
                                type="text"
                                placeholder="Overview"
                            />

                            <TextInput
                                label="Runtime *"
                                name="runtime"
                                type="number"
                                placeholder="Runtime"
                            />

                            <TextInput
                                label="Budget"
                                name="budget"
                                type="number"
                                placeholder="Budget"
                            />

                            <TextInput
                                label="Revenue"
                                name="revenue"
                                type="number"
                                placeholder="Revenue"
                            />
                            <div className="add-modal-button-container">

                                <button type="reset" className="add-modal-button-reset" onClick={() => {
                                    resetForm();
                                }}>Reset</button>
                                <button type="submit" className="add-modal-button-submit"
                                    onClick={() => {
                                        updateMovieByIdData(values);
                                        closeEditMovieModal();
                                    }}
                                >Save</button>
                            </div>
                        </Form>);
                }}
            </Formik>
        </div >
    );
}

const mapStateToProps = (state) => {
    return {
        movie: state.movie
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getMovieByIdData: id => dispatch(getMovieByIdData(id)),
        updateMovieByIdData: data => dispatch(updateMovieByIdData(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditMovie);