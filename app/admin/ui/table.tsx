import { PenIcon } from "@/assets/icons/pen";
import { TrashIcon } from "@/assets/icons/trash";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue } from "@nextui-org/table";
import { User } from "../types/user";
import { colors } from "@nextui-org/theme";

type ColumnProps = {
  key: string;
  label: string;
};

type TableProps = {
  columns: ColumnProps[];
  rows: User[];
  handleEdit?: (id: number) => void;
  handleDelete?: (id: number) => void;
};

export default function CustomTable({ columns, rows, handleEdit, handleDelete }: TableProps) {
  return (
    <Table
      aria-label="table"
      isHeaderSticky
      radius="lg"
      shadow="md"
      className="max-h-[90%] no-scrollbar"
      classNames={{
        wrapper: "p-0 no-scrollbar text-white bg-transparent",
        th: `text-center text-[14px] text-white font-semibold bg-slate-800`,
        td: "text-center text-[12px] text-white",
      }}
    >
      <TableHeader>
        {columns.map((column) => (
          <TableColumn key={column.key}>{column.label}</TableColumn>
        ))}
      </TableHeader>
      <TableBody>
        {rows.map((row) => (
          <TableRow key={row.id}>
            {(columnKey) =>
              columnKey === "options" ? (
                <TableCell>
                  <div className="w-full flex items-center justify-evenly">
                    <span onClick={() => handleEdit!(row.id)}>
                      <PenIcon />
                    </span>
                    |
                    <span onClick={() => handleDelete!(row.id)}>
                      <TrashIcon />
                    </span>
                  </div>
                </TableCell>
              ) : (
                <TableCell>{getKeyValue(row, columnKey)}</TableCell>
              )
            }
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
