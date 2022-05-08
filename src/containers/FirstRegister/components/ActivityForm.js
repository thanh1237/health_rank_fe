import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, FormHelperText, Radio, RadioGroup } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

export default function ActivityForm(props) {
    const { handleChange } = props;

    const CustomToolTip = styled(({ className, ...props }) => <Tooltip {...props} arrow classes={{ popper: className }} />)(({ theme }) => ({
        [`& .${tooltipClasses.arrow}`]: {
            color: theme.palette.common.black,
        },
        [`& .${tooltipClasses.tooltip}`]: {
            backgroundColor: theme.palette.common.black,
        },
    }));

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                How active are you?
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <FormControl>
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" defaultValue="female" onChange={handleChange} name="active">
                            <CustomToolTip title="Spend most of the day sitting (e.g bank teller, desk job)" placement="right">
                                <FormControlLabel value="not" control={<Radio />} label="Not Very Active" />
                            </CustomToolTip>
                            <CustomToolTip title="Spend good part of the day on your feet (e.g teacher, salesperson)" placement="right">
                                <FormControlLabel value="lightly" control={<Radio />} label="Lightly Active" />
                            </CustomToolTip>
                            <CustomToolTip title="Spend good part of the day doing some physical activity (e.g food server, postal carrier)" placement="right">
                                <FormControlLabel value="active" control={<Radio />} label="Active" />
                            </CustomToolTip>
                            <CustomToolTip title="Spend most of the day doing heavy physical activity (e.g bike messenger, carpenter)" placement="right">
                                <FormControlLabel value="very" control={<Radio />} label="Very Active" />
                            </CustomToolTip>
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
