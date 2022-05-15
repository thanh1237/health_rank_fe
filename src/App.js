import React, { useEffect } from "react";
import "App.css";
import { BrowserRouter as Router } from "react-router-dom";
// Adding Fontawesome icons
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faAngry,
    faLaugh,
    faSadCry,
    faThumbsUp,
    faHeart,
    faPlus,
    faTrashAlt,
    faEdit,
    faChevronLeft,
    faSort,
    faCheckSquare,
    faTimesCircle,
    faPauseCircle,
    faCircle,
    faUser,
    faRegistered,
    faChartLine,
    faSignOutAlt,
    faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import PublicLayout from "containers/AppRoutes/layouts/PublicLayout";
import AlertMsg from "components/AlertMsg/AlertMsg";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "redux/actions";
import { ClipLoader } from "react-spinners";

library.add(
    fab,
    faAngry,
    faLaugh,
    faSadCry,
    faThumbsUp,
    faHeart,
    faPlus,
    faTrashAlt,
    faEdit,
    faChevronLeft,
    faSort,
    faCheckSquare,
    faTimesCircle,
    faPauseCircle,
    faCircle,
    faUser,
    faRegistered,
    faChartLine,
    faSignOutAlt,
    faSignInAlt
);

function App() {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    useEffect(() => {
        const accessToken = localStorage.getItem("accessToken");
        if (accessToken && accessToken !== "undefined") {
            dispatch(authActions.getCurrentUser(accessToken));
        } else {
            dispatch(authActions.logout());
        }
    }, [dispatch]);

    return (
        <>
            {isAuthenticated === null ? (
                <div className="app-progress">
                    <ClipLoader color="#1976d2" size={150} loading={true} />
                </div>
            ) : (
                <Router>
                    <AlertMsg />
                    <PublicLayout isAuthenticated={isAuthenticated} />
                </Router>
            )}
        </>
    );
}

export default App;
