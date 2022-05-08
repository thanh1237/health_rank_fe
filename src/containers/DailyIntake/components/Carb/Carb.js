import { CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Carb.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";

const Carb = (props) => {
    const { dailyIntake } = props;
    return (
        <React.Fragment>
            <Box id="carb" sx={{ display: "flex" }}>
                <Tooltip
                    className="carb-tool"
                    title={"The number of carbohydrate that you should eat per day to achieve your goal."}
                    placement="right"
                >
                    <InfoOutlinedIcon sx={{ fontSize: "18px" }} />
                </Tooltip>
                <CssBaseline />
                <div sx={{ mt: 4, mb: 4 }} className="carb-container">
                    <Typography variant="h5">Carbohydrate</Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        (g)
                    </Typography>
                    <Typography variant="h4" gutterBottom className="carb-value">
                        {dailyIntake.carbohydrate}
                    </Typography>
                </div>
            </Box>
        </React.Fragment>
    );
};

export default Carb;
