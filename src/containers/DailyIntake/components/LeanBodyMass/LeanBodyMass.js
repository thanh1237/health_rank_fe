import { CssBaseline, Tooltip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./LeanBodyMass.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const LeanBodyMass = (props) => {
    const { dailyIntake } = props;
    return (
        <React.Fragment>
            <Box id="lbm" sx={{ display: "flex" }}>
                <Tooltip
                    className="lbm-tool"
                    title={"Lean body mass equals body weight minus body fat."}
                    placement="right"
                >
                    <InfoOutlinedIcon sx={{ fontSize: "18px" }} />
                </Tooltip>
                <CssBaseline />
                <div sx={{ mt: 4, mb: 4 }} className="lbm-container">
                    <Typography variant="h5">LBM</Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        Lean Body Mass (Kg)
                    </Typography>
                    <Typography variant="h4" gutterBottom className="lbm-value">
                        {dailyIntake.lbm}
                    </Typography>
                </div>
            </Box>
        </React.Fragment>
    );
};

export default LeanBodyMass;
