import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { TextField } from "@mui/material";

export default function InfoForm(props) {
    const { handleChange, formData } = props;
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                You
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <TextField type={"number"} autoComplete="height" name="height" fullWidth id="height" label="Height (cm)" autoFocus onChange={handleChange} value={formData.height} />
                </Grid>
                <Grid item xs={12}>
                    <TextField type={"number"} autoComplete="weight" name="weight" fullWidth id="weight" label="Weight (kg)" onChange={handleChange} value={formData.weight} />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
