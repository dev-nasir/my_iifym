
import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from '@/components/ui/table';

interface Column<T> {
  header: string;
  accessorKey: string;
  cell?: (row: T) => React.ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: Column<T>[];
  className?: string;
}

function DataTable<T>({ data, columns, className }: DataTableProps<T>) {
  const getValue = (row: T, accessorKey: string): unknown => {
    return accessorKey.split('.').reduce((obj, key) => {
      return obj && typeof obj === 'object' ? (obj as any)[key] : undefined;
    }, row as unknown);
  };

  return (
    <div className={`w-full overflow-auto ${className || ''}`}>
      <Table>
        <TableHeader>
          <TableRow>
            {columns.map((column, index) => (
              <TableHead key={index} className="font-medium">
                {column.header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.length === 0 ? (
            <TableRow>
              <TableCell colSpan={columns.length} className="text-center py-6">
                No records found.
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns.map((column, colIndex) => (
                  <TableCell key={colIndex}>
                    {column.cell 
                      ? column.cell(row)
                      : getValue(row, column.accessorKey)?.toString() || ''}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default DataTable;
