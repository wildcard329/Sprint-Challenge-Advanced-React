import React from "react";
import { render, fireEvent } from "@testing-library/react";

import DarkMode from "./DarkMode";

test("button test", () => {
    const { findByTestId, findByText } = render(<DarkMode />);

    findByTestId('toggle').then((res) => {
        fireEvent.click(res);
    })

    findByText(/dark mode/i)
})

test("header contains correct string", () => {
    const { findByText } = render(<DarkMode />)

    findByText("Women's World Cup Player Stats")
})
