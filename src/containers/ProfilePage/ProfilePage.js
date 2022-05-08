import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "./ProfilePage.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import Chart from "./components/Chart";
import TodayData from "./components/TodayData";
import Recent from "./components/Recent";
import { useDispatch, useSelector } from "react-redux";
import { weightActions } from "redux/actions";

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const mdTheme = createTheme();

function ProfilePage() {
    const dispatch = useDispatch();
    const weightList = useSelector((state) => state.weight.weightStorage?.weight);
    const currentUser = useSelector((state) => state.auth.user);
    const loading = useSelector((state) => state.weight.loading);

    const latestData = weightList?.slice(-1).pop();

    React.useEffect(() => {
        dispatch(weightActions.getWeightStorageByUser(currentUser._id));
    }, []);

    return (
        <ThemeProvider theme={mdTheme}>
            <Box id="profile" sx={{ display: "flex" }}>
                <CssBaseline />
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) => (theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900]),
                        flexGrow: 1,
                        height: "100vh",
                        overflow: "auto",
                    }}
                >
                    <Toolbar />
                    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
                        <Grid container spacing={3}>
                            {/* Chart */}
                            <Grid item xs={12} md={8} lg={9}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <Chart weightList={weightList} loading={loading} />
                                </Paper>
                            </Grid>
                            {/* Recent Deposits */}
                            <Grid item xs={12} md={4} lg={3}>
                                <Paper
                                    sx={{
                                        p: 2,
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 240,
                                    }}
                                >
                                    <TodayData latestData={latestData} loading={loading} />
                                </Paper>
                            </Grid>
                            {/* Recent Orders */}
                            <Grid item xs={12}>
                                <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
                                    <Recent weightList={weightList} loading={loading} />
                                </Paper>
                            </Grid>
                        </Grid>
                        <Copyright sx={{ pt: 4 }} />
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

export default function Dashboard() {
    return <ProfilePage />;
}
