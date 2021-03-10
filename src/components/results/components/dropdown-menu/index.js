import React, { Component } from 'react';
import './index.scss';

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

    closeMenu(event) {
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
                            // ref={(element) => {
                            //     this.dropdownMenu = element;
                            // }}
                            >
                                <button
                                    className="menu-button-item"
                                    onClick={() => {
                                        this.props.showEditMovieModal();
                                        this.closeMenu();
                                    }}> Edit </button>
                                <button
                                    className="menu-button-item"
                                    onClick={() => {
                                        this.props.showDeleteMovieModal();
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