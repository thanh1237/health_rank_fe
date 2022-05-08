import React from "react";
import { Routes, Route } from "react-router-dom";
import PublicNavbar from "components/PublicNavbar/PublicNavbar";
import NotFoundPage from "components/NotFoundPage";
import ProfilePage from "containers/ProfilePage/ProfilePage";

const AdminLayout = () => {
    return (
        <>
            <PublicNavbar />
            <div>
                <div>
                    <Routes>
                        <Route exact path="/profile" element={<ProfilePage />} />
                        <Route element={<NotFoundPage />} />
                    </Routes>
                </div>
            </div>
        </>
    );
};

export default AdminLayout;
