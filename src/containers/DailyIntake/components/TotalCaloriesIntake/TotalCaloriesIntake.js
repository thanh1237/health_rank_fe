import React from "react";
import "./TotalCaloriesIntake.css";
import { CssBaseline, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const TotalCaloriesIntake = (props) => {
    const { dailyIntake } = props;
    return (
        <React.Fragment>
            <Box id="tci" sx={{ display: "flex" }}>
                <Tooltip
                    className="tci-tool"
                    title={"The number of calories that you should eat per day to achieve your goal."}
                    placement="right"
                >
                    <InfoOutlinedIcon sx={{ fontSize: "18px" }} />
                </Tooltip>
                <CssBaseline />
                <div className="tci-container">
                    <Typography variant="h5">TCI</Typography>
                    <Typography variant="subtitle2" gutterBottom>
                        Total Calories Intake (calories)
                    </Typography>
                    <Typography variant="h4" gutterBottom className="tci-value">
                        {dailyIntake.tci}
                    </Typography>
                </div>
            </Box>
        </React.Fragment>
    );
};

export default TotalCaloriesIntake;
