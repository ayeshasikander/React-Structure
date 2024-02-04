import React from "react";
import Paper from '@mui/material/Paper';
import { Container } from "@mui/material";
import BasicCard from "../../components/cards/Card";


export default function Contact() {
    return (
        <Paper
        sx={{
            height: "100vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
        }}
      >
        <Container>
          <BasicCard/>
        </Container>
      </Paper>
    )
}