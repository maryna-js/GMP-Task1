import React, { Component } from "react";
import Logo from '../logo';
import AddMovie from '../add-movie';
import './index.scss';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { show: false };
    }

    showModal() {
        this.setState({
            show: true
        });
    }
    render() {


        return (
            <div className="wrapper" >
                <Logo />
                <button className="add-button" onClick={e => {
                    this.props.showAddMovieModal();
                }}>
                    + Add movie
            </button>
                <AddMovie show={this.state.show} />
            </div>
        );
    }
}
export default Header;