import React, { Component } from 'react';
// import './index.scss';

export default class MenuDropdown extends Component {
    constructor() {
        super();

        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
    }

    showMenu(event) {
        event.preventDefault();
        this.setState(prevState => ({
            showMenu: !prevState.showMenu
        }))
    }

    closeMenu() {
        this.setState({ showMenu: false });
    }

    render() {
        return (
            <div className="menu-container">
                <div className="menu-button">
                    <button onClick={this.showMenu}>
                        &#8942;
                </button>
                </div>

                {
                    this.state.showMenu
                        ? (
                            <div
                                className="menu"
                            >
                                <button
                                    className="menu-button-item"
                                    onClick={() => {
                                        this.props.showEditMovieModal(this.props.id, true);
                                        this.closeMenu();
                                    }}> Edit </button>
                                <button
                                    className="menu-button-item"
                                    onClick={(e) => {
                                        this.props.showDeleteMovieModal(this.props.id, true);
                                        this.closeMenu();
                                    }

                                    }> Delete </button>
                            </div>
                        )
                        : (
                            null
                        )
                }
            </div>
        );
    }
}