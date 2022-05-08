import * as React from "react";
import Typography from "@mui/material/Typography";
import Title from "./Title";
import { List, ListItem, ListItemText } from "@mui/material";
import Grid from "@mui/material/Grid";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

export default function TodayData(props) {
    const { latestData, loading } = props;
    const today = moment().format("LL");
    return (
        <React.Fragment>
            {loading ? (
                <Box className="process-container">
                    <CircularProgress />
                </Box>
            ) : (
                <>
                    <Title>Today data</Title>
                    <List disablePadding>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={6}>
                                <ListItem key="weight" sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Weight" secondary={`${latestData?.weight}kg`} />
                                </ListItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ListItem key="height" sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Height" secondary={`${latestData?.height}m`} />
                                </ListItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ListItem key="bmi" sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="BMI" secondary={`${latestData?.bmi}`} />
                                </ListItem>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <ListItem key="fat" sx={{ py: 1, px: 0 }}>
                                    <ListItemText primary="Body Fat" secondary={`${latestData?.bodyFat}%`} />
                                </ListItem>
                            </Grid>
                        </Grid>
                    </List>
                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                        on {`${today}`}
                    </Typography>
                </>
            )}
        </React.Fragment>
    );
}
