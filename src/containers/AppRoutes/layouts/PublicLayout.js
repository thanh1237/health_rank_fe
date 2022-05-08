import { Box } from "@mui/material";
import NotFoundPage from "components/NotFoundPage";
import PublicNavbar from "components/PublicNavbar/PublicNavbar";
import SideMenu from "components/SideMenu/SideMenu";
import PrivateRoute from "containers/AppRoutes/PrivateRoute";
import HomePage from "containers/HomePage/HomePage";
import LoginPage from "containers/LoginPage/LoginPage";
import ProfilePage from "containers/ProfilePage/ProfilePage";
import RegisterPage from "containers/RegisterPage/RegisterPage";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { weightActions } from "redux/actions";
import moment from "moment";
import Ranking from "containers/Ranking/Ranking";
import DailyIntake from "containers/DailyIntake/DailyIntake";
import Meals from "containers/Food/Food";
import Food from "containers/Food/Food";

const PublicLayout = (props) => {
    const { isAuthenticated } = props;
    const dispatch = useDispatch();
    const userId = useSelector((state) => state.auth.user?._id);
    const weightStorage = useSelector((state) => state.weight.weightStorage);
    const loading = useSelector((state) => state.weight.loading);
    const currentUser = useSelector((state) => state.auth.user);
    const [open, setOpen] = useState(false);
    const weightList = weightStorage?.weight;
    const toggleDrawer = () => {
        setOpen(!open);
    };

    const todayWeight = weightList?.find(
        (weight) => moment(weight.createdAt).format("DD/MM/YYYY") === moment().format("DD/MM/YYYY")
    );

    useEffect(() => {
        if (isAuthenticated) {
            dispatch(weightActions.getWeightStorageByUser(userId));
        }
    }, [dispatch, userId]);

    return (
        <Box sx={{ display: "flex" }}>
            <PublicNavbar toggleDrawer={toggleDrawer} open={open} />
            {isAuthenticated && <SideMenu toggleDrawer={toggleDrawer} open={open} todayWeight={todayWeight} />}
            <Box
                component="main"
                sx={{
                    backgroundColor: (theme) =>
                        theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[900],
                    flexGrow: 1,
                    height: "100%",
                    // overflow: "hidden",
                }}
            >
                <Routes>
                    <Route exact path="/login" element={<LoginPage />} />
                    <Route exact path="/register" element={<RegisterPage />} />
                    <Route element={<PrivateRoute />}>
                        <Route
                            exact
                            path="/"
                            element={
                                <HomePage
                                    todayWeight={todayWeight}
                                    currentUser={currentUser}
                                    weightStorage={weightStorage}
                                    loading={loading}
                                />
                            }
                        />
                        <Route path="/profile" element={<ProfilePage />} />
                        <Route path="/ranking" element={<Ranking />} />
                        <Route path="/dailyIntake" element={<DailyIntake />} />
                        <Route path="/food" element={<Food />} />
                    </Route>
                    <Route element={<NotFoundPage />} />
                </Routes>
            </Box>
        </Box>
    );
};

export default PublicLayout;
