import React from "react";
import { TextField } from "@mui/material";


export const Input = () => {
    return (
        <TextField
            id="outlined-basic"
            label="Ingresa tu nombre"
            variant="outlined"
            sx={{ width: '80%', mb: '1.5rem' }}
          />
    )
}