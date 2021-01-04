declare module 'jspdf-react' {
  const jspdf: (props?: any) => any;

  export const Text: (props?: any) => any;
  export const AddPage: (props?: any) => any;
  export const Line: (props?: any) => any;
  export const Image: (props?: any) => any;
  export const Table: (props?: any) => any;
  export const Html: (props?: any) => any;

  export default jspdf;
}
