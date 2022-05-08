import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import GoalForm from "./components/GoalForm";
import ActivityForm from "./components/ActivityForm";
import Review from "./components/Review";
import InfoForm from "containers/FirstRegister/components/InfoForm";
import WeeklyGoalForm from "containers/FirstRegister/components/WeeklyGoalForm";
import { Grid } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { weightActions } from "redux/actions";

function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {"Copyright © "}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
        </Typography>
    );
}

const steps = ["Goal", "Activity Level", "Your Information", "Weekly Goal", "Review"];

const theme = createTheme();

export default function FirstRegister() {
    const dispatch = useDispatch();
    const currentUser = useSelector((state) => state.auth.user);
    const [activeStep, setActiveStep] = React.useState(0);
    const [formData, setFormData] = React.useState({
        goal: "",
        active: "",
        height: "",
        weight: "",
        goalWeight: "",
        weekGoalChange: "",
    });
    const handleNext = () => {
        setActiveStep(activeStep + 1);
        if (activeStep === 4) {
            const userId = currentUser._id;
            const gender = currentUser.gender;
            const age = currentUser.age;
            const body = { ...formData, userId, gender, age };
            dispatch(weightActions.createWeightStorageByUser(body));
        }
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
    };

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    function getStepContent(step) {
        switch (step) {
            case 0:
                return <GoalForm handleChange={handleChange} />;
            case 1:
                return <ActivityForm handleChange={handleChange} />;
            case 2:
                return <InfoForm handleChange={handleChange} formData={formData} />;
            case 3:
                return <WeeklyGoalForm handleChange={handleChange} formData={formData} />;
            case 4:
                return <Review formData={formData} />;
            default:
                throw new Error("Unknown step");
        }
    }
    console.log(formData);
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container component="main" maxWidth="sm" sx={{ mb: 6 }}>
                <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                    <Typography component="h1" variant="h4" align="center">
                        Get To Know You
                    </Typography>
                    <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    <React.Fragment>
                        {activeStep === steps.length ? (
                            <React.Fragment>
                                <Typography variant="h5" gutterBottom>
                                    Thank you for your submission.
                                </Typography>
                                <Typography variant="subtitle1">Your information have been saved to our system. Please comeback tomorrow to keep tracking.</Typography>
                                <Grid container justifyContent="flex-end">
                                    <Grid item>
                                        <Link href="/profile" variant="body2">
                                            Click here to view your Profile
                                        </Link>
                                    </Grid>
                                </Grid>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                {getStepContent(activeStep)}
                                <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                                    {activeStep !== 0 && (
                                        <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                                            Back
                                        </Button>
                                    )}

                                    <Button variant="contained" onClick={handleNext} sx={{ mt: 3, ml: 1 }}>
                                        {activeStep === steps.length - 1 ? "Submit" : "Next"}
                                    </Button>
                                </Box>
                            </React.Fragment>
                        )}
                    </React.Fragment>
                </Paper>
                <Copyright />
            </Container>
        </ThemeProvider>
    );
}
