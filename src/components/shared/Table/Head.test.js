import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";
import Head from "./Head";

describe("components/Table", () => {
  describe("<Head />", () => {
    test("should render", () => {
      const headers = [
        { column: "Coluna 1", dataValue: "column1" },
        { column: "Coluna 2", dataValue: "column2" },
        { column: "Coluna 3", dataValue: "column3" },
      ];

      const { getByText } = render(<Head headers={headers} />);

      headers.map(header =>
        expect(getByText(header.column)).toBeInTheDocument()
      );
    });
  });
});
