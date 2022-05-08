import { CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./BasalMetabolicRate.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";

const BasalMetabolicRate = (props) => {
    const { dailyIntake } = props;

    return (
        <React.Fragment>
            <Box id="bmr" sx={{ display: "flex" }}>
                <Tooltip
                    className="bmr-tool"
                    title={
                        "The number of calories you burn as your body performs basic (basal) life-sustaining function"
                    }
                    placement="right"
                >
                    <InfoOutlinedIcon sx={{ fontSize: "18px" }} />
                </Tooltip>
                <CssBaseline />
                <div sx={{ mt: 4, mb: 4 }} className="bmr-container">
                    <Typography variant="h5">BMR </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        Basal Metabolic Rate (calories)
                    </Typography>
                    <Typography variant="h4" gutterBottom className="bmr-value">
                        {dailyIntake.bmr}
                    </Typography>
                </div>
            </Box>
        </React.Fragment>
    );
};

export default BasalMetabolicRate;
