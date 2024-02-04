import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function ErrorScreen() {
    return (
        <div className="error">
            <Paper sx={{
                height: "100vh",
                width: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                textAlign: "center",
            }}>
                <Container>
                    <Box>
                        <Typography variant="h1" className="title">404</Typography>
                    </Box>
                    <Typography sx={{ m: 4 ,fontSize: 30}}>Page Not Found</Typography>
                 <Link to="/"><Button variant="contained">Back to Home</Button></Link> 
                </Container>
            </Paper>
        </div>
    )
}