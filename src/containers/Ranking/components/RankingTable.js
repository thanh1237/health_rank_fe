import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

const columns = [
    { id: "rank", label: "Rank", minWidth: 80, align: "center" },
    { id: "name", label: "Name", minWidth: 170, align: "center" },
    { id: "weight", label: "Weight", minWidth: 100, align: "center" },
    {
        id: "bmi",
        label: "BMI",
        minWidth: 170,
        align: "center",
    },
    {
        id: "bodyFat",
        label: "Body Fat",
        minWidth: 170,
        align: "center",
    },
];

function createData(rank, name, weight, bmi, bodyFat, userId) {
    return { rank, name, weight, bmi, bodyFat, userId };
}

export default function RankingTable(props) {
    const { rankList, currentUser, page, setPage, rowsPerPage, setRowsPerPage, loading } = props;

    const rows = rankList?.map((rank) => {
        const userInfo = rank._doc;
        return createData(
            rank.rank,
            userInfo.author.name,
            userInfo.weight[userInfo.weight.length - 1].weight,
            userInfo.averageBMI,
            userInfo.averageBodyFat,
            userInfo.author._id
        );
    });

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: "100%", overflow: "hidden", minHeight: "30%" }}>
            {loading ? (
                <Box sx={{ height: "100%", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <CircularProgress />
                </Box>
            ) : rows && rows.length !== 0 ? (
                <>
                    <TableContainer sx={{ maxHeight: 440 }}>
                        <Table stickyHeader aria-label="sticky table">
                            <TableHead>
                                <TableRow>
                                    {columns.map((column) => (
                                        <TableCell
                                            key={column.id}
                                            align={column.align}
                                            style={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                                    return (
                                        <TableRow hover role="checkbox" tabIndex={-1} key={row.rank}>
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                        style={{ color: row.userId === currentUser._id && "red" }}
                                                    >
                                                        {value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <TablePagination
                        rowsPerPageOptions={[10, 25, 100]}
                        component="div"
                        count={rows?.length}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </>
            ) : (
                "There is no data please come back later"
            )}
        </Paper>
    );
}
