import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

export default function Review(props) {
    const { formData } = props;

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Summary
            </Typography>
            <List disablePadding>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <ListItem key={formData.goal} sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Goal" secondary={`${formData.goal} weight`} />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ListItem key={formData.goal} sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Active Level" secondary={`${formData.active} active`} />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ListItem key={formData.weight} sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Current Weight" secondary={`${formData.weight} kg`} />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ListItem key={formData.height} sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Current Height" secondary={`${formData.height} cm`} />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ListItem key={formData.goalWeight} sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Goal Weight" secondary={`${formData.goalWeight} kg`} />
                        </ListItem>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <ListItem key={formData.weekGoalChange} sx={{ py: 1, px: 0 }}>
                            <ListItemText primary="Weekly Change Goal" secondary={`${formData.weekGoalChange} kg`} />
                        </ListItem>
                    </Grid>
                </Grid>
            </List>
        </React.Fragment>
    );
}
