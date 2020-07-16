declare module 'react-super-responsive-table' {
  interface TableProps {
    className?: string;
  }

  interface ThProps {
    className?: string;
  }

  interface TdProps {
    className?: string;
  }

  declare const Table: React.FC<TableProps>;
  declare const Tbody: React.FC<>;
  declare const Tr: React.FC<>;
  declare const Td: React.FC<TdProps>;
  declare const Th: React.FC<ThProps>;
  declare const Thead: React.FC<>;
}
