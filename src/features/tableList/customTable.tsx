import { Paper, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";


export interface Column<T> {
    id: keyof T;
    label: string;
}

interface Props<T> {
    columns: Column<T>[];
    rows: T[];
}

export default function CustomTable<T>(props: Props<T>) {
    const { columns, rows } = props;

    return (
        <Paper>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            {columns.map((column, index) => (
                                <TableCell key={index}>{column.label}</TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row, index) => {
                            return (
                                <TableRow key={index}>
                                    {columns.map((column, index) => {
                                        return <TableCell key={index}>{row[column.id]}</TableCell>;
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}