import React from "react";
import "./TotalDailyEnergyExpenditure.css";
import { CssBaseline, Typography, Container } from "@mui/material";
import { Box } from "@mui/system";
import Tooltip from "@mui/material/Tooltip";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

const TotalDailyEnergyExpenditure = (props) => {
    const { dailyIntake } = props;
    return (
        <React.Fragment>
            <Box id="tdee" sx={{ display: "flex" }}>
                <Tooltip
                    className="tdee-tool"
                    title={"It is the total energy that a person uses in a day."}
                    placement="right"
                >
                    <InfoOutlinedIcon sx={{ fontSize: "18px" }} />
                </Tooltip>
                <CssBaseline />
                <Container sx={{ mt: 4, mb: 4 }} className="tdee-container">
                    <Typography variant="h4">TDEE</Typography>
                    <Typography variant="h6" gutterBottom>
                        Total Daily Energy Expenditure (calories)
                    </Typography>
                    <Typography variant="h3" gutterBottom className="tdee-value">
                        {dailyIntake.tdee}
                    </Typography>
                </Container>
            </Box>
        </React.Fragment>
    );
};

export default TotalDailyEnergyExpenditure;
