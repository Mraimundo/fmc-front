import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";
import Loading from "./Loading";

describe("components/Table", () => {
  describe("<Loading />", () => {
    test("should render", () => {
      const loading = render(<Loading colSpan={4} />);

      expect(loading.baseElement).toBeInTheDocument();
    });

    test("should render with correct text", () => {
      const { getByText } = render(<Loading colSpan={4} />);

      expect(getByText("carregando...")).toBeInTheDocument();
    });
  });
});
