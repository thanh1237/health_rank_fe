import { CssBaseline, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Fat.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const Fat = (props) => {
    const { dailyIntake } = props;
    return (
        <React.Fragment>
            <Box id="fat" sx={{ display: "flex" }}>
                <Tooltip
                    className="fat-tool"
                    title={"The number of fat that you should eat per day to achieve your goal."}
                    placement="right"
                >
                    <InfoOutlinedIcon sx={{ fontSize: "18px" }} />
                </Tooltip>
                <CssBaseline />
                <div sx={{ mt: 4, mb: 4 }} className="fat-container">
                    <Typography variant="h5">Fat</Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        (g)
                    </Typography>
                    <Typography variant="h4" gutterBottom className="fat-value">
                        {dailyIntake.fat}
                    </Typography>
                </div>
            </Box>
        </React.Fragment>
    );
};

export default Fat;
