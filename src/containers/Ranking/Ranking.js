import React, { useEffect } from "react";
import "./Ranking.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { rankAction } from "redux/actions";
import { Avatar, Box, Container, CssBaseline, Paper, Typography } from "@mui/material";
import MilitaryTechIcon from "@mui/icons-material/MilitaryTech";
import RankingTable from "containers/Ranking/components/RankingTable";

const mdTheme = createTheme();

const Ranking = () => {
    const dispatch = useDispatch();
    const rankList = useSelector((state) => state.rank?.rank?.ranks);
    const loading = useSelector((state) => state.rank.loading);

    const currentUser = useSelector((state) => state.auth.user);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    useEffect(() => {
        const body = { id: currentUser._id, page, rowsPerPage };
        dispatch(rankAction.getRank(body));
    }, [dispatch, currentUser._id, page, rowsPerPage]);

    return (
        <ThemeProvider theme={mdTheme}>
            <Box id="ranking" sx={{ display: "flex" }}>
                <CssBaseline />
                <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }} className="ranking-container">
                    <Paper
                        className="ranking-paper"
                        sx={{
                            p: 2,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "flex-start",
                            alignItems: "center",
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                            <MilitaryTechIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5" style={{ marginBottom: "10px" }}>
                            Ranking
                        </Typography>
                        <RankingTable
                            rankList={rankList}
                            currentUser={currentUser}
                            page={page}
                            setPage={setPage}
                            rowsPerPage={rowsPerPage}
                            setRowsPerPage={setRowsPerPage}
                            loading={loading}
                        />
                    </Paper>
                </Container>
            </Box>
        </ThemeProvider>
    );
};

export default Ranking;
