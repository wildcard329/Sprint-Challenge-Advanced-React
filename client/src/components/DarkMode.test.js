import React from "react";
import { render, fireEvent, findByText } from "@testing-library/react";

import DarkMode from "./DarkMode";


test("button test", () => {
    const { findByTestId } = render(<DarkMode />);

    findByTestId('toggle').then((res) => {
        fireEvent.click(res);
    })

    findByText(/dark mode/i)
})