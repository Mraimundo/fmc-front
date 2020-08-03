import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";
import { ThemeContext } from 'styled-components';

import Head from "./Head";
import { defaultTheme } from 'styles/theme';

describe("components/Table", () => {
  describe("<Head />", () => {
    test("should render", () => {
      const headers = [
        { column: "Coluna 1", dataValue: "column1" },
        { column: "Coluna 2", dataValue: "column2" },
        { column: "Coluna 3", dataValue: "column3" },
      ];

      const { getByText } = render(
        <ThemeContext.Provider theme={defaultTheme}>
          <Head headers={headers} />
        </ThemeContext.Provider>
      );

      headers.map(header =>
        expect(getByText(header.column)).toBeInTheDocument()
      );
    });
  });
});
