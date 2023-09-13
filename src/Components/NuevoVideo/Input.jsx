import React from "react";
import { TextField } from "@mui/material";


export const Input = ({contextData}) => {
    return (
        <TextField
            id="outlined-basic"
            label={contextData}
            variant="outlined"
            sx={{ width: '80%', mb: '1.5rem' }}
          />
    )
}