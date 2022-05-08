import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Title from "./Title";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

// Generate Order Data
function createData(id, date, height, bodyFat, bmi, weight) {
    return { id, date, height, bodyFat, bmi, weight };
}

export default function Recent(props) {
    const { weightList, loading } = props;

    const sortWeightListByDate = weightList?.sort((a, b) => {
        return new Date(b.createdAt) - new Date(a.createdAt);
    });

    const rows = sortWeightListByDate?.map((weight, index) => {
        const date = moment(weight.createdAt).format("LL");
        return createData(index, date, weight.height, weight.bodyFat, weight.bmi, weight.weight);
    });

    return (
        <React.Fragment>
            {loading ? (
                <Box className="process-container">
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Title>Recent Data</Title>
                    <Table size="small">
                        <TableHead>
                            <TableRow>
                                <TableCell>Date</TableCell>
                                <TableCell>Height</TableCell>
                                <TableCell>Body Fat</TableCell>
                                <TableCell>BMI</TableCell>
                                <TableCell>Weight</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {rows?.map((row) => (
                                <TableRow key={row.id}>
                                    <TableCell>{row.date}</TableCell>
                                    <TableCell>{`${row.height}m`}</TableCell>
                                    <TableCell>{`${row.bodyFat}%`}</TableCell>
                                    <TableCell>{row.bmi}</TableCell>
                                    <TableCell>{`${row.weight}kg`}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </>
            )}
        </React.Fragment>
    );
}
