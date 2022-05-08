import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PeopleIcon from "@mui/icons-material/People";
import BarChartIcon from "@mui/icons-material/BarChart";
import LayersIcon from "@mui/icons-material/Layers";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { useNavigate } from "react-router-dom";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import MonitorWeightIcon from "@mui/icons-material/MonitorWeight";
import BentoIcon from "@mui/icons-material/Bento";
import EggIcon from "@mui/icons-material/Egg";

const CustomToolTip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(
    ({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    })
);
export const ListItems = (props) => {
    const { open, todayWeight } = props;
    const navigate = useNavigate();

    const handleNavigate = (mode) => {
        navigate(`/${mode}`);
    };

    return (
        <React.Fragment>
            {!todayWeight && (
                <CustomToolTip title={open ? "" : "Submit Daily Weight"} placement="right">
                    <ListItemButton onClick={() => handleNavigate("")}>
                        <ListItemIcon>
                            <MonitorWeightIcon />
                        </ListItemIcon>
                        <ListItemText primary="Submit Daily Weight" />
                    </ListItemButton>
                </CustomToolTip>
            )}

            <CustomToolTip title={open ? "" : "Profile"} placement="right">
                <ListItemButton onClick={() => handleNavigate("profile")}>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Profile" />
                </ListItemButton>
            </CustomToolTip>

            <CustomToolTip title={open ? "" : "Ranking"} placement="right">
                <ListItemButton onClick={() => handleNavigate("ranking")}>
                    <ListItemIcon>
                        <MilitaryTechIcon />
                    </ListItemIcon>
                    <ListItemText primary="Ranking" />
                </ListItemButton>
            </CustomToolTip>

            <CustomToolTip title={open ? "" : "Daily Intake"} placement="right">
                <ListItemButton onClick={() => handleNavigate("dailyIntake")}>
                    <ListItemIcon>
                        <BentoIcon />
                    </ListItemIcon>
                    <ListItemText primary="Daily Intake" />
                </ListItemButton>
            </CustomToolTip>

            {/* <CustomToolTip title={open ? "" : "Food"} placement="right">
                <ListItemButton onClick={() => handleNavigate("food")}>
                    <ListItemIcon>
                        <EggIcon />
                    </ListItemIcon>
                    <ListItemText primary="Food" />
                </ListItemButton>
            </CustomToolTip> */}
        </React.Fragment>
    );
};
