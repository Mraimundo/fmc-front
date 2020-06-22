import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";
import Table from ".";

describe("components/Table", () => {
  describe("<Table />", () => {
    const headers = [
      { column: "Coluna 1", dataValue: "column1" },
      { column: "Coluna 2", dataValue: "column2" },
      { column: "Coluna 3", dataValue: "column3" },
    ];

    const data = [{ column1: "value1", column2: "value2", column3: "value3" }];

    test("should render with is fetching", () => {
      const { getByText } = render(<Table headers={headers} isFetching />);

      expect(getByText("carregando...")).toBeInTheDocument();
    });

    test("should render with is fetching and later without results", () => {
      const { getByText, rerender } = render(
        <Table headers={headers} isFetching />
      );

      expect(getByText("carregando...")).toBeInTheDocument();

      rerender(<Table headers={headers} isFetching={false} />);

      expect(getByText("sem resultados")).toBeInTheDocument();
    });

    test("should render without data", () => {
      const { getByText } = render(<Table headers={headers} data={[]} />);

      expect(getByText("sem resultados")).toBeInTheDocument();
    });

    test("should render with data", () => {
      const { getByText, rerender } = render(
        <Table headers={headers} data={[]} isFetching />
      );

      expect(getByText("carregando...")).toBeInTheDocument();

      rerender(<Table headers={headers} data={data} isFetching={false} />);

      expect(getByText("value1")).toBeInTheDocument();
      expect(getByText("value2")).toBeInTheDocument();
      expect(getByText("value3")).toBeInTheDocument();
    });
  });
});
