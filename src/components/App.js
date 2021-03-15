import React, { Component } from "react";
import Header from './header';
import SearchPanel from './search';
import SearchResults from './results';
import Footer from './footer';
import ErrorBoundary from './error-boundary';
import AddMovie from './add-movie';
import EditMovie from './edit-movie';
import DeleteMovie from './delete-movie';
import '../styles/style.scss';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addMovie: false,
            editMovie: false,
            deleteMovie: false,
        };
        this.showAddMovieModal = this.showAddMovieModal.bind(this);
        this.showEditMovieModal = this.showEditMovieModal.bind(this);
        this.showDeleteMovieModal = this.showDeleteMovieModal.bind(this);
        this.closeAddMovieModal = this.closeAddMovieModal.bind(this);
        this.closeEditMovieModal = this.closeEditMovieModal.bind(this);
        this.closeDeleteMovieModal = this.closeDeleteMovieModal.bind(this);
    }

    componentDidMount() {
        console.log("Component Did Mount")
    }

    componentDidUpdate() {
        console.log("Component Did Update")
    }

    componentWillUnmount() {
        console.log("Component Will Unmount")
    }


    showAddMovieModal() {
        this.setState({
            addMovie: true
        });
    }

    closeAddMovieModal() {
        this.setState({
            addMovie: false
        });
    }

    showEditMovieModal() {
        this.setState({
            editMovie: true
        });
    }

    closeEditMovieModal() {
        this.setState({
            editMovie: false
        });
    }

    showDeleteMovieModal() {
        this.setState({
            deleteMovie: true
        });
    }

    closeDeleteMovieModal() {
        this.setState({
            deleteMovie: false
        });
    }

    render() {
        const { addMovie, editMovie, deleteMovie } = this.state;
        return (
            <div className="container">
                <ErrorBoundary>
                    <div className={`${(addMovie || editMovie || deleteMovie) && 'container-blur'}`}>
                        <Header showAddMovieModal={this.showAddMovieModal} />
                        <SearchPanel />
                        <SearchResults showEditMovieModal={this.showEditMovieModal} showDeleteMovieModal={this.showDeleteMovieModal} />
                        <Footer />
                    </div>
                    <AddMovie showAddMovie={addMovie} closeAddMovieModal={this.closeAddMovieModal} />
                    <EditMovie showEditMovie={editMovie} closeEditMovieModal={this.closeEditMovieModal} />
                    <DeleteMovie showDeleteMovie={deleteMovie} closeDeleteMovieModal={this.closeDeleteMovieModal} />
                </ErrorBoundary>
            </div>
        );
    }
}

export default App;