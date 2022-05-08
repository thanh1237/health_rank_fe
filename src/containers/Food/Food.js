import React, { useEffect, useState } from "react";
import "./Food.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { Avatar, Box, Button, Container, CssBaseline, Paper, Typography } from "@mui/material";
import FoodTable from "containers/Food/components/FoodTable/FoodTable";
import { foodActions } from "redux/actions";
import FoodModal from "containers/Food/components/FoodModal/FoodModal";
import EggIcon from "@mui/icons-material/Egg";
import SearchForm from "containers/Food/components/SearchForm/SearchForm";

const mdTheme = createTheme();

const Food = () => {
    const dispatch = useDispatch();

    const currentUser = useSelector((state) => state.auth.user);
    const foodList = useSelector((state) => state.food.foods.foods);
    const loading = useSelector((state) => state.food.loading);

    const [page, setPage] = React.useState(0);
    const [modalPage, setModalPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const [filter, setFilter] = useState({ description: "", author: currentUser._id });
    const [open, setOpen] = useState(false);
    const [form, setForm] = useState({
        brandName: "",
        description: "",
        author: currentUser._id,
        servingQuantity: "",
        servingUnit: "",
        calories: "",
        totalFat: "",
        saturatedFat: "",
        transFat: "",
        polyunsaturatedFat: "",
        monounsaturatedFat: "",
        cholesterol: "",
        sodium: "",
        carbohydrates: "",
        dietaryFibers: "",
        sugars: "",
        protein: "",
        calcium: "",
        iron: "",
        potassium: "",
        vitaminA: "",
        vitaminC: "",
    });

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setModalPage(0);
        setForm({
            brandName: "",
            description: "",
            author: currentUser._id,
            servingQuantity: "",
            servingUnit: "",
            calories: "",
            totalFat: "",
            saturatedFat: "",
            transFat: "",
            polyunsaturatedFat: "",
            monounsaturatedFat: "",
            cholesterol: "",
            sodium: "",
            carbohydrates: "",
            dietaryFibers: "",
            sugars: "",
            protein: "",
            calcium: "",
            iron: "",
            potassium: "",
            vitaminA: "",
            vitaminC: "",
        });
        setOpen(false);
        dispatch(foodActions.searchFood(filter));
    };

    const handleChangeAuto = (event, newValue) => {
        setForm({ ...form, servingUnit: newValue });
    };

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSearchChange = (e) => setFilter({ ...filter, [e.target.name]: e.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(foodActions.createFood({ ...form, type: "ingredient" }));
        handleClose();
    };

    const handlePreSubmit = (event) => {
        event.preventDefault();
        if (modalPage === 0) {
            setModalPage(1);
        }
    };
    const handleDoubleClick = (e) => {
        console.log(">>>>>>>>>>>>>>>>>");
    };

    const handleSearch = (event) => {
        event.preventDefault();
        setFilter({ ...filter, description: filter.description });
        console.log(filter);
        dispatch(foodActions.searchFood(filter));
    };

    const handleReset = (event) => {
        event.preventDefault();
        setFilter({ ...filter, description: "" });
        console.log(filter);
    };

    useEffect(() => {
        dispatch(foodActions.searchFood(filter));
    }, [dispatch]);

    return (
        <ThemeProvider theme={mdTheme}>
            <Box id="food" sx={{ display: "flex" }}>
                <CssBaseline />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className="food-container">
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                        <EggIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ marginBottom: "10px" }}>
                        Food
                    </Typography>
                    <Paper
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                            width: "100%",
                            marginBottom: "10px",
                        }}
                    >
                        <SearchForm
                            handleSearch={handleSearch}
                            filter={filter}
                            setFilter={setFilter}
                            handleSearchChange={handleSearchChange}
                            handleReset={handleReset}
                        />
                    </Paper>

                    <Paper
                        className="food-paper"
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <div className="food-button">
                            <Button variant="contained" onClick={handleClickOpen}>
                                Add New
                            </Button>
                            <FoodModal
                                open={open}
                                handleClose={handleClose}
                                handleSubmit={handleSubmit}
                                handleChange={handleChange}
                                form={form}
                                handleChangeAuto={handleChangeAuto}
                                modalPage={modalPage}
                                handlePreSubmit={handlePreSubmit}
                            />
                        </div>
                        <FoodTable
                            foodList={foodList}
                            page={page}
                            setPage={setPage}
                            rowsPerPage={rowsPerPage}
                            setRowsPerPage={setRowsPerPage}
                            loading={loading}
                        />
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default React.memo(Food);
