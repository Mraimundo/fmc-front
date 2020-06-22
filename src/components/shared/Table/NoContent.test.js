import "@testing-library/jest-dom/extend-expect";

import React from "react";
import { render } from "@testing-library/react";
import NoContent from "./NoContent";

describe("components/Table", () => {
  describe("<NoContent />", () => {
    test("should render", () => {
      const noContent = render(<NoContent colSpan={4} />);

      expect(noContent.baseElement).toBeInTheDocument();
    });

    test("should render with correct text", () => {
      const { getByText } = render(<NoContent colSpan={4} />);

      expect(getByText("sem resultados")).toBeInTheDocument();
    });
  });
});
