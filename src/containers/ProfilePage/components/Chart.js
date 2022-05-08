import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { LineChart, Line, XAxis, YAxis, Label, ResponsiveContainer, CartesianGrid, Tooltip, Legend } from "recharts";
import Title from "./Title";
import moment from "moment";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
// Generate Sales Data

export default function Chart(props) {
    const { weightList, loading } = props;
    const theme = useTheme();

    function createData(time, weight) {
        return { time, weight };
    }

    const data = weightList
        ?.map((weight) => createData(moment(weight.createdAt).format("DD/MM"), weight.weight))
        .sort((a, b) => {
            return new Date(a.createdAt) - new Date(b.createdAt);
        });

    return (
        <>
            {loading ? (
                <Box className="process-container">
                    <CircularProgress />
                </Box>
            ) : (
                <React.Fragment>
                    <Title>Today</Title>
                    <ResponsiveContainer>
                        <LineChart
                            data={data}
                            margin={{
                                top: 16,
                                right: 16,
                                bottom: 0,
                                left: 24,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="time"
                                stroke={theme.palette.text.secondary}
                                style={theme.typography.body2}
                                padding={{ left: 30, right: 30 }}
                            />
                            <YAxis stroke={theme.palette.text.secondary} style={theme.typography.body2}>
                                <Label
                                    angle={270}
                                    position="left"
                                    style={{
                                        textAnchor: "middle",
                                        fill: theme.palette.text.primary,
                                        ...theme.typography.body1,
                                    }}
                                >
                                    Weight (KG)
                                </Label>
                            </YAxis>
                            <Tooltip />
                            <Legend />
                            <Line
                                isAnimationActive={true}
                                type="basis"
                                dataKey="weight"
                                stroke={theme.palette.primary.main}
                                dot={true}
                                activeDot={{ r: 8 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </React.Fragment>
            )}
        </>
    );
}
