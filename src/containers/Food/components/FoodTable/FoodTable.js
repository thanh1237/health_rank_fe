import * as React from "react";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { useDemoData } from "@mui/x-data-grid-generator";
import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";
const FoodTable = (props) => {
    const { foodList, page, setPage, rowsPerPage, setRowsPerPage, loading } = props;
    const createData = (id, description, brandName, author, calories) => {
        return { id, description, brandName, author, calories };
    };
    const columns = [
        {
            editable: false,
            field: "id",
            name: "id",
            headerName: "ID",
            type: "number",
            valueParser: (value) => Number(value),
            width: 50,
        },
        {
            editable: false,
            field: "description",
            name: "description",
            headerName: "Description",
            width: 250,
        },
        {
            editable: false,
            field: "brandName",
            name: "brandName",
            headerName: "Brand Name",
            width: 250,
        },
        {
            editable: false,
            field: "author",
            name: "author",
            headerName: "Author",
            width: 150,
        },
        {
            editable: false,
            field: "calories",
            name: "calories",
            headerName: "Calories",
            type: "number",
            valueParser: (value) => Number(value),
            width: 150,
        },
    ];
    const rows = foodList?.map((food, idx) => {
        return createData(idx + 1, food.description, food.brandName, food.author.name, food.calories);
    });
    const data = { columns, rows };
    console.log(data.rows);
    return (
        <div style={{ width: "100%" }}>
            {data.rows ? (
                <DataGrid
                    className="food-data-grid"
                    {...data}
                    components={{
                        Toolbar: GridToolbar,
                    }}
                    autoHeight={true}
                    disableColumnFilter={true}
                />
            ) : loading === "true" ? (
                <Box className="process-container">
                    <CircularProgress />
                </Box>
            ) : (
                "There is no data"
            )}
        </div>
    );
};

export default React.memo(FoodTable);
