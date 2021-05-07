import React from "react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import AddMovieModal from "./index";
import { render, fireEvent, screen, waitFor } from "@testing-library/react";

const mockStore = configureMockStore();
const store = mockStore({});

describe("AddMovieModal", () => {
    const mockCreateMovieData = jest.fn();
    const mockShowAddMovie = jest.fn();
    const mockCloseAddMovieModal = jest.fn();

    const renderModalForm = () =>
        render(
            <Provider store={store}>
                <AddMovieModal
                    createMovieData={mockCreateMovieData}
                    showAddMovie={mockShowAddMovie}
                    closeAddMovieModal={mockCloseAddMovieModal}
                />
            </Provider>
        );

    it("can render correctly", () => {
        const { asFragment } = renderModalForm();
        expect(asFragment()).toMatchSnapshot();
    });

    it("if empty form will not call save", () => {
        renderModalForm();
        fireEvent.click(screen.getByText("Save"));
        expect(mockCreateMovieData).not.toBeCalled();
    });
});

