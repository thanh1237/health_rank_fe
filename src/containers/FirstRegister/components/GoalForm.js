import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, Radio, RadioGroup } from "@mui/material";

export default function GoalForm(props) {
    const { handleChange } = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                What is your goal?
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <FormControl>
                        <RadioGroup aria-labelledby="demo-radio-buttons-group-label" onChange={handleChange} name="goal">
                            <FormControlLabel value="lose" control={<Radio />} label="Lose weight" />
                            <FormControlLabel value="maintain" control={<Radio />} label="Maintain weight" />
                            <FormControlLabel value="gain" control={<Radio />} label="Gain Weight" />
                        </RadioGroup>
                    </FormControl>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
