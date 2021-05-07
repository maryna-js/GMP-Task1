import React from "react";
import SearchPanel from "./index";
import { render, fireEvent, screen } from "@testing-library/react";

const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
}));


describe("SearchPanel", () => {
    const mockSetSearchValue = jest.fn();


    const renderSearchPanel = () =>
        render(
            <SearchPanel
                setSearchValue={mockSetSearchValue}
            />
        );

    it("can render", () => {
        const { asFragment } = renderSearchPanel();
        expect(asFragment()).toMatchSnapshot();
    });

    it("can set value by input change", () => {
        renderSearchPanel();
        fireEvent.change(screen.getByPlaceholderText("What do you want to watch?"), {
            target: { value: "a" },
        });

        expect(mockSetSearchValue);
    });

    it("can set value by input change", () => {
        renderSearchPanel();
        fireEvent.click(screen.getByText("Search"));
        expect(mockSetSearchValue);
    });
});

