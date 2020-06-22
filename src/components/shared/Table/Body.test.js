import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";
import Body from "./Body";

describe("components/Table", () => {
  describe("<Body />", () => {
    const headers = [
      { column: "Coluna 1", dataValue: "column1" },
      { column: "Coluna 2", dataValue: "column2" },
      { column: "Coluna 3", dataValue: "column3" },
    ];

    const data = [{ column1: "value1", column2: "value2", column3: "value3" }];

    test("should render correctly", () => {
      const { getByText } = render(<Body headers={headers} data={data} />);

      data.map(value =>
        headers.map(header =>
          expect(getByText(value[header.dataValue])).toBeInTheDocument()
        )
      );
    });

    test("should render correctly with a callback function", () => {
      const headersWithFn = [
        ...headers,
        { column: "Coluna 4", dataValue: "column4", fn: value => `-${value}` },
      ];

      const newData = [...data, { column4: "value4" }];

      const { getByText } = render(
        <Body headers={headersWithFn} data={newData} />
      );

      expect(getByText("value1")).toBeInTheDocument();
      expect(getByText("value2")).toBeInTheDocument();
      expect(getByText("value3")).toBeInTheDocument();
      expect(getByText("-value4")).toBeInTheDocument();
    });
  });
});
