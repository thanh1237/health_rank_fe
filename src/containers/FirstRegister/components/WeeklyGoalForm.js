import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { FormControl, FormControlLabel, Radio, RadioGroup, TextField } from "@mui/material";

export default function WeeklyGoalForm(props) {
    const { handleChange, formData } = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                You
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField autoComplete="goalWeight" name="goalWeight" fullWidth id="height" label="Goal Weight" autoFocus onChange={handleChange} value={formData.goalWeight} />
                </Grid>
                <Grid item xs={12}>
                    <FormControl>
                        {formData.goal !== "maintain" ? (
                            <Typography variant="h6" gutterBottom>
                                What is your weekly goal?
                            </Typography>
                        ) : null}

                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={handleChange} name="weekGoalChange" value={formData.weekGoalChange}>
                            {formData.goal === "lose" ? (
                                <>
                                    <FormControlLabel value="lose0.25" control={<Radio />} label="Lose 0.25 kg per week" />
                                    <FormControlLabel value="lose0.5" control={<Radio />} label="Lose 0.5 kg per week" />
                                </>
                            ) : formData.goal === "gain" ? (
                                <>
                                    <FormControlLabel value="gain0.25" control={<Radio />} label="Gain 0.25 kg per week" />
                                    <FormControlLabel value="gain0.5" control={<Radio />} label="Gain 0.5 kg per week" />
                                </>
                            ) : null}
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
