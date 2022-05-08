import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import {
    Autocomplete,
    Avatar,
    Box,
    Container,
    CssBaseline,
    DialogContentText,
    Grid,
    Paper,
    TextField,
} from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { ValidatorForm } from "react-material-ui-form-validator";
import { TextValidator } from "react-material-ui-form-validator";

export default function FoodModal(props) {
    const { open, handleClose, handleSubmit, handleChange, form, handleChangeAuto, modalPage, handlePreSubmit } = props;
    const top100Films = [
        { title: "cup" },
        { title: "centiliter" },
        { title: "fl oz" },
        { title: "gram" },
        { title: "gallon" },
        { title: "kg" },
        { title: "liter" },
        { title: "lbs" },
        { title: "ml" },
        { title: "mg" },
        { title: "oz" },
        { title: "pound" },
        { title: "pint" },
        { title: "quart" },
        { title: "tablespoon" },
        { title: "teaspoon" },
    ];
    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <ValidatorForm style={{ display: modalPage !== 0 && "none" }} onSubmit={handlePreSubmit}>
                    <Box id="food-modal">
                        <CssBaseline />
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className="food-container">
                            <Paper
                                elevation={0}
                                className="ranking-paper"
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <DialogTitle>Create Food</DialogTitle>
                                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                    <AddCircleIcon />
                                </Avatar>
                                <DialogContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12} style={{ display: modalPage === 1 && "none" }}>
                                            <DialogContentText>New Food</DialogContentText>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                autoComplete="given-name"
                                                name="brandName"
                                                fullWidth
                                                id="brandName"
                                                label="Brand Name (Optional)"
                                                autoFocus
                                                onChange={handleChange}
                                                value={form.brandName}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="ex. Nestle"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextValidator
                                                autoComplete="given-name"
                                                name="description"
                                                fullWidth
                                                id="description"
                                                label="Description (Required)"
                                                onChange={handleChange}
                                                value={form.description}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                validators={["required"]}
                                                errorMessages={["Description is required"]}
                                                placeholder="ex. Fitnesse honey almond"
                                            />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <DialogContentText>Servings</DialogContentText>
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextValidator
                                                type="number"
                                                autoComplete="given-name"
                                                name="servingQuantity"
                                                fullWidth
                                                id="servingQuantity"
                                                label="Serving Size (Required)"
                                                onChange={handleChange}
                                                value={form.servingQuantity}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                validators={["required"]}
                                                errorMessages={["Serving Size is required"]}
                                                placeholder="1"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <Autocomplete
                                                freeSolo
                                                id="free-solo-2-demo"
                                                disableClearable
                                                options={top100Films.map((option) => option.title)}
                                                onChange={(event, newValue) => {
                                                    handleChangeAuto(event, newValue);
                                                }}
                                                renderInput={(params) => (
                                                    <TextValidator
                                                        {...params}
                                                        label="Unit (Required)"
                                                        InputProps={{
                                                            ...params.InputProps,
                                                            type: "search",
                                                        }}
                                                        InputLabelProps={{
                                                            shrink: true,
                                                        }}
                                                        autoComplete="given-name"
                                                        name="servingUnit"
                                                        fullWidth
                                                        id="servingUnit"
                                                        validators={["required"]}
                                                        errorMessages={["Unit is required"]}
                                                        value={form.servingUnit}
                                                    />
                                                )}
                                            />
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                            </Paper>
                        </Container>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">{modalPage === 1 ? "Subscribe" : "Next"}</Button>
                        </DialogActions>
                    </Box>
                </ValidatorForm>
                <ValidatorForm style={{ display: modalPage === 0 && "none" }} onSubmit={handleSubmit}>
                    <Box id="food-modal">
                        <CssBaseline />
                        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className="food-container">
                            <Paper
                                elevation={0}
                                className="ranking-paper"
                                sx={{
                                    p: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "flex-start",
                                    alignItems: "center",
                                }}
                            >
                                <DialogTitle>Nutrition Facts</DialogTitle>
                                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                    <AddCircleIcon />
                                </Avatar>
                                <DialogContent>
                                    <Grid container spacing={2}>
                                        <Grid item xs={12}>
                                            <TextValidator
                                                type="number"
                                                autoComplete="given-name"
                                                name="calories"
                                                fullWidth
                                                id="calories"
                                                label="Calories (Required)"
                                                onChange={handleChange}
                                                validators={["required"]}
                                                errorMessages={["Calories is required"]}
                                                value={form.calories}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(Calor)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="totalFat"
                                                fullWidth
                                                id="totalFat"
                                                label="Total Fat (Optional)"
                                                onChange={handleChange}
                                                value={form.totalFat}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(g)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="saturatedFat"
                                                fullWidth
                                                id="saturatedFat"
                                                label="Saturated Fat (Optional)"
                                                onChange={handleChange}
                                                value={form.saturatedFat}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(g)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="transFat"
                                                fullWidth
                                                id="transFat"
                                                label="Trans Fat (Optional)"
                                                onChange={handleChange}
                                                value={form.transFat}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(g)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="polyunsaturatedFat"
                                                fullWidth
                                                id="polyunsaturatedFat"
                                                label="Polyunsaturated Fat (Optional)"
                                                onChange={handleChange}
                                                value={form.polyunsaturatedFat}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(g)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="monounsaturatedFat"
                                                fullWidth
                                                id="monounsaturatedFat"
                                                label="Monounsaturated Fat (Optional)"
                                                onChange={handleChange}
                                                value={form.monounsaturatedFat}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(g)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="cholesterol"
                                                fullWidth
                                                id="cholesterol"
                                                label="Cholesterol (Optional)"
                                                onChange={handleChange}
                                                value={form.cholesterol}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(mg)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="sodium"
                                                fullWidth
                                                id="sodium"
                                                label="Sodium (Optional)"
                                                onChange={handleChange}
                                                value={form.sodium}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(mg)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="carbohydrates"
                                                fullWidth
                                                id="carbohydrates"
                                                label="Carbohydrates (Optional)"
                                                onChange={handleChange}
                                                value={form.carbohydrates}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(g)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="dietaryFibers"
                                                fullWidth
                                                id="dietaryFibers"
                                                label="Dietary Fibers (Optional)"
                                                onChange={handleChange}
                                                value={form.dietaryFibers}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(g)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="sugars"
                                                fullWidth
                                                id="sugars"
                                                label="Sugars (Optional)"
                                                onChange={handleChange}
                                                value={form.sugars}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(g)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="protein"
                                                fullWidth
                                                id="protein"
                                                label="Protein (Optional)"
                                                onChange={handleChange}
                                                value={form.protein}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(g)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="calcium"
                                                fullWidth
                                                id="calcium"
                                                label="Calcium (Optional)"
                                                onChange={handleChange}
                                                value={form.calcium}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(%)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="iron"
                                                fullWidth
                                                id="iron"
                                                label="Iron (Optional)"
                                                onChange={handleChange}
                                                value={form.iron}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(%)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="potassium"
                                                fullWidth
                                                id="potassium"
                                                label="Potassium (Optional)"
                                                onChange={handleChange}
                                                value={form.potassium}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(mg)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="vitaminA"
                                                fullWidth
                                                id="vitaminA"
                                                label="Vitamin A (Optional)"
                                                onChange={handleChange}
                                                value={form.vitaminA}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(%)"
                                            />
                                        </Grid>
                                        <Grid item xs={12} sm={6}>
                                            <TextField
                                                type="number"
                                                autoComplete="given-name"
                                                name="vitaminC"
                                                fullWidth
                                                id="vitaminC"
                                                label="Vitamin C (Optional)"
                                                onChange={handleChange}
                                                value={form.vitaminC}
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                placeholder="(%)"
                                            />
                                        </Grid>
                                    </Grid>
                                </DialogContent>
                            </Paper>
                        </Container>
                        <DialogActions>
                            <Button onClick={handleClose}>Cancel</Button>
                            <Button type="submit">{modalPage === 1 ? "Subscribe" : "Next"}</Button>
                        </DialogActions>
                    </Box>
                </ValidatorForm>
            </Dialog>
        </div>
    );
}
