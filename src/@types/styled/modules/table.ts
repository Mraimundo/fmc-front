export default interface Table {
  primary: {
    thead: {
      tr: {
        backgroundColor: string;
        color: string;
      };
    };
    tbody: {
      tr: {
        borderColor: string;
        borderWidth: string;
        color: string;
      };
      td: {
        backgroundColor: string;
      };
    };
  };
  secondary: {
    thead: {
      tr: {
        backgroundColor: string;
        color: string;
      };
    };
    tbody: {
      tr: {
        borderColor: string;
        borderWidth: string;
        color: string;
      };
      td: {
        backgroundColor: string;
      };
    };
  };
}
