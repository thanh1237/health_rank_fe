import React, { useEffect } from "react";
import { Box, Container, createTheme, CssBaseline, Grid, Paper, Toolbar, Typography } from "@mui/material";
import { ThemeProvider } from "@mui/styles";
import { useDispatch, useSelector } from "react-redux";
import { dailyIntakeAction } from "redux/actions";
import BasalMetabolicRate from "containers/DailyIntake/components/BasalMetabolicRate/BasalMetabolicRate";
import LeanBodyMass from "containers/DailyIntake/components/LeanBodyMass/LeanBodyMass";
import Protein from "containers/DailyIntake/components/Protein/Protein";
import Carb from "containers/DailyIntake/components/Carb/Carb";
import Fat from "containers/DailyIntake/components/Fat/Fat";
import TotalDailyEnergyExpenditure from "containers/DailyIntake/components/TotalDailyEnergyExpenditure/TotalDailyEnergyExpenditure";
import TotalCaloriesIntake from "containers/DailyIntake/components/TotalCaloriesIntake/TotalCaloriesIntake";

const mdTheme = createTheme();

const DailyIntake = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.user);
    const dailyIntake = useSelector((state) => state.dailyIntake.dailyIntake);

    useEffect(() => {
        dispatch(dailyIntakeAction.getDailyIntakeByAuthor(currentUser._id));
    }, [dispatch, currentUser._id]);
    return (
        <ThemeProvider theme={mdTheme}>
            <Box id="ranking" sx={{ display: "flex" }}>
                <CssBaseline />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={2} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <BasalMetabolicRate dailyIntake={dailyIntake} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={8} lg={6}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <TotalDailyEnergyExpenditure dailyIntake={dailyIntake} />
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={2} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <LeanBodyMass dailyIntake={dailyIntake} />
                                </Paper>
                            </Grid>

                            <Grid item xs={12} md={2} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <TotalCaloriesIntake dailyIntake={dailyIntake} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={2} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <Protein dailyIntake={dailyIntake} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={2} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <Carb dailyIntake={dailyIntake} />
                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={2} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <Fat dailyIntake={dailyIntake} />
                                </Paper>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default DailyIntake;
