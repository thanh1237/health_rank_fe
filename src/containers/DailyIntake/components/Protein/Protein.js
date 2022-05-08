import { CssBaseline, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import "./Protein.css";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import Tooltip from "@mui/material/Tooltip";

const Protein = (props) => {
    const { dailyIntake } = props;
    return (
        <React.Fragment>
            <Box id="protein" sx={{ display: "flex" }}>
                <Tooltip
                    className="protein-tool"
                    title={"The number of protein that you should eat per day to achieve your goal."}
                    placement="right"
                >
                    <InfoOutlinedIcon sx={{ fontSize: "18px" }} />
                </Tooltip>
                <CssBaseline />
                <div sx={{ mt: 4, mb: 4 }} className="protein-container">
                    <Typography variant="h5">Protein</Typography>
                    <Typography variant="subtitle2" gutterBottom component="div">
                        (g)
                    </Typography>
                    <Typography variant="h4" gutterBottom className="protein-value">
                        {dailyIntake.protein}
                    </Typography>
                </div>
            </Box>
        </React.Fragment>
    );
};

export default Protein;
