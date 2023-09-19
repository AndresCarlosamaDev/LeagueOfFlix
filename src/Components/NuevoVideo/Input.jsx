import React from "react";
import { TextField } from "@mui/material";


export const Input = ({contextData, value}) => {
    return (
        <TextField
            // id="outlined-basic"
            label={contextData}
            type="text"
            value={value}
            variant="outlined"
            sx={{ width: '80%', mb: '1.5rem' }}
          />
    )
}