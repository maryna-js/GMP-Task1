import React from "react";
import { connect } from 'react-redux';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TextInput from '../form/TextInput';
import SelectInput from '../form/SelectInput';
import { createMovieData } from '../../actions/movies';


function AddMovieModal(props) {
    const { showAddMovie, closeAddMovieModal } = props;
    if (!showAddMovie) {
        return null;
    }
    return (
        <div className="add-modal">
            <div className="add-modal-header">
                <button className="add-modal-close" onClick={() => closeAddMovieModal(false)}>X</button>
            </div>
            <div>
                <h2 className="add-modal-heading">Add movie</h2>
            </div>

            <Formik
                initialValues={{
                    title: "",
                    release_date: "",
                    poster_path: "",
                    overview: "",
                    runtime: 0,
                    tagline: "",
                    vote_average: 0,
                    vote_count: 0,
                    budget: 0,
                    revenue: 0,
                    genres: [],
                }}
                enableReinitialize={true}
                validationSchema={Yup.object({
                    title: Yup.string()
                        .min(1, 'Must be 1 character or more')
                        .required('Required'),
                    poster_path: Yup.string().url().min(1, 'Must be 1 character or more').
                        required('Required'),
                    overview: Yup.string()
                        .min(10, 'Must be 10 character or more')
                        .required('Required'),
                    runtime: Yup.number()
                        .min(0, 'Must be 0 or more')
                        .required('Required'),
                    genres: Yup.array().of(Yup.string()).min(1, "Must be selected 1 genre or more").required('Required'),
                    release_date: Yup.date().min(1, 'Must be 1 character or more')
                        .required('Required'),
                    tagline: Yup.string()
                        .min(1, 'Must be 1 character or more').required('Required'),
                    vote_average: Yup.number().max(10, 'Must be not more then 10 '),
                    vote_count: Yup.number(),
                    budget: Yup.number()
                        .min(0, 'Must be 0 or more'),
                    revenue: Yup.number()
                        .min(0, 'Must be 0 or more'),
                })}
                onSubmit={(values, { setSubmitting }) => {
                    props.createMovieData(values);
                    closeAddMovieModal();
                }}
            >
                <Form>
                    <TextInput
                        label="Title *"
                        name="title"
                        type="text"
                        placeholder="Title"
                    />

                    <TextInput
                        label="Tagline *"
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
                        label="Release date *"
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

                        <button type="reset" className="add-modal-button-reset"
                        >Reset</button>
                        <button type="submit" className="add-modal-button-submit"
                        >Save</button>
                    </div>
                </Form>

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
        createMovieData: data => dispatch(createMovieData(data))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AddMovieModal);