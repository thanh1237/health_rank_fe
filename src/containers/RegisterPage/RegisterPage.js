import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import FormControlLabel from "@mui/material/FormControlLabel";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { authActions, routeActions } from "redux/actions";
import { FormControl, FormLabel, Radio, RadioGroup } from "@mui/material";
import { ValidatorForm } from "react-material-ui-form-validator";
import { TextValidator } from "react-material-ui-form-validator";

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

const theme = createTheme();

export default function RegisterPage() {
    const redirectTo = useSelector((state) => state.route.redirectTo);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [formData, setFormData] = React.useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        age: "",
        gender: "male",
    });

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = (event) => {
        event.preventDefault();
        const { firstName, lastName, email, password, age, gender } = formData;
        const name = `${firstName} ${lastName}`;
        dispatch(authActions.register(name, email, password, age, gender));
    };

    React.useEffect(() => {
        if (redirectTo) {
            if (redirectTo === "__GO_BACK__") {
                navigate.goBack();
                dispatch(routeActions.removeRedirectTo());
            } else {
                navigate(redirectTo);
                dispatch(routeActions.removeRedirectTo());
            }
        }
    }, [dispatch, navigate, redirectTo]);

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
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
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5" style={{ marginBottom: "10px" }}>
                        Sign up
                    </Typography>
                    <ValidatorForm onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextValidator
                                    autoComplete="given-name"
                                    name="firstName"
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={handleChange}
                                    validators={["required"]}
                                    errorMessages={["First name is required"]}
                                    value={formData.firstName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextValidator
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    onChange={handleChange}
                                    validators={["required"]}
                                    errorMessages={["Last name is required"]}
                                    value={formData.lastName}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={handleChange}
                                    validators={["required"]}
                                    errorMessages={["Email is required"]}
                                    value={formData.email}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextValidator
                                    label="Password"
                                    autoComplete="current-password"
                                    fullWidth
                                    onChange={handleChange}
                                    name="password"
                                    type="password"
                                    validators={["required"]}
                                    errorMessages={["Password is required"]}
                                    value={formData.password}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextValidator
                                    fullWidth
                                    id="age"
                                    label="Age"
                                    name="age"
                                    type="number"
                                    onChange={handleChange}
                                    validators={["required"]}
                                    errorMessages={["Age is required"]}
                                    value={formData.age}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <FormControl>
                                    <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                    <RadioGroup
                                        row
                                        aria-labelledby="demo-row-radio-buttons-group-label"
                                        name="gender"
                                        onChange={handleChange}
                                        value={formData.gender}
                                    >
                                        <FormControlLabel value="female" control={<Radio />} label="Female" />
                                        <FormControlLabel value="male" control={<Radio />} label="Male" />
                                    </RadioGroup>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                            Sign Up
                        </Button>
                    </ValidatorForm>
                </Box>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
}
