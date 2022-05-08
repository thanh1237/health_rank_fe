import React from "react";
import "./HomePage.css";
import { useDispatch, useSelector } from "react-redux";
import { weightActions } from "redux/actions";
import FirstRegister from "containers/FirstRegister/FirstRegister";
import { Avatar, Box, Button, Container, createTheme, CssBaseline, Grid, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { ValidatorForm } from "react-material-ui-form-validator";
import { TextValidator } from "react-material-ui-form-validator";
import MonitorWeightOutlinedIcon from "@mui/icons-material/MonitorWeightOutlined";
import Link from "@mui/material/Link";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";

const theme = createTheme();

const HomePage = (props) => {
    const { todayWeight, currentUser, weightStorage, loading } = props;
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const userId = useSelector((state) => state.auth.user._id);
    const [formData, setFormData] = React.useState({
        weight: "",
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        const height = weightStorage.height * 100;
        const gender = currentUser.gender;
        const age = currentUser.age;
        const bodyFat = 0;
        const body = { ...formData, height, author: userId, bodyFat, gender, age };
        try {
            dispatch(weightActions.createWeightByUser(body));
            dispatch(weightActions.getWeightStorageByUser(userId));
            navigate("/profile");
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            {loading ? (
                <Box className="process-container">
                    <CircularProgress />
                </Box>
            ) : !loading && weightStorage.length < 2 ? (
                <FirstRegister />
            ) : (
                <div>
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xl">
                            <CssBaseline />
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                }}
                            >
                                <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                                    <MonitorWeightOutlinedIcon />
                                </Avatar>
                                <Typography
                                    component="h1"
                                    variant="h5"
                                    style={{ marginBottom: "10px", textAlign: "center" }}
                                >
                                    {todayWeight ? "You have submitted your today weight" : "Submit your today Weight"}
                                </Typography>
                                {todayWeight ? (
                                    <Link href="/profile" variant="body2">
                                        Click here to view your Profile
                                    </Link>
                                ) : (
                                    <ValidatorForm onSubmit={handleSubmit}>
                                        <Grid container>
                                            <Grid item xs={12}>
                                                <TextValidator
                                                    autoComplete="given-weight"
                                                    name="weight"
                                                    fullWidth
                                                    id="weight"
                                                    label="Weight"
                                                    autoFocus
                                                    onChange={handleChange}
                                                    validators={["required"]}
                                                    errorMessages={["Weight is required"]}
                                                    value={formData.weight}
                                                />
                                            </Grid>
                                            <Grid item xs={12}>
                                                <Button
                                                    type="submit"
                                                    fullWidth
                                                    variant="contained"
                                                    sx={{ mt: 3, mb: 2 }}
                                                >
                                                    Submit
                                                </Button>
                                            </Grid>
                                        </Grid>
                                    </ValidatorForm>
                                )}
                            </Box>
                        </Container>
                    </ThemeProvider>
                </div>
            )}
        </Container>
    );
};

export default HomePage;
