import React from "react";
import "./SearchForm.css";
import { Button, Container, CssBaseline, Grid } from "@mui/material";
import { TextValidator } from "react-material-ui-form-validator";
import { ValidatorForm } from "react-material-ui-form-validator";

const SearchForm = (props) => {
    const { handleSearch, filter, handleSearchChange, handleReset } = props;

    return (
        <Container>
            <CssBaseline />
            <ValidatorForm onSubmit={handleSearch}>
                <Grid container component="main" sx={{ width: "100%" }} spacing={2}>
                    <Grid item xs={10}>
                        <TextValidator
                            fullWidth
                            id="description"
                            label="Description"
                            name="description"
                            autoComplete="description"
                            onChange={handleSearchChange}
                            validators={["required"]}
                            errorMessages={["Description is required"]}
                            value={filter.description}
                        />
                    </Grid>
                    <Grid item xs={2} sx={{ display: "flex", alignItems: "center" }}>
                        <Grid
                            container
                            className="button-container"
                            component="main"
                            sx={{ width: "100%" }}
                            spacing={2}
                        >
                            <Grid item xs={5}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="outlined"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleReset}
                                >
                                    Reset
                                </Button>
                            </Grid>
                            <Grid item xs={5}>
                                <Button
                                    type="submit"
                                    fullWidth
                                    variant="contained"
                                    sx={{ mt: 3, mb: 2 }}
                                    onClick={handleSearch}
                                >
                                    Search
                                </Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </ValidatorForm>
        </Container>
    );
};

export default SearchForm;
