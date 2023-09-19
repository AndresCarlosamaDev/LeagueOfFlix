import React, { useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { validaCategoria } from "../../validaciones";

export const Categoria = ({ ligas, confLigaVideo }) => {
  const [ligaVideo, setLigaVideo] = useState({ value: "", valid: null });

  return (
    <FormControl sx={{ width: "80%" }}>
      <FormLabel id="demo-radio-buttons-group-label">Liga</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        checked={ligaVideo}
        onChange={(input) => {
          const value = input.target.value;
          const valid = validaCategoria(value);
          confLigaVideo({ value, valid });
          console.log(value, valid);
        }}
        // key={ligas.id}
      >
        {ligas.map((liga) => (
          <>
            <FormControlLabel
              key={liga.id}
              value={liga.nombre}
              control={<Radio />}
              label={liga.nombre}
            />
            {/* <img className='logo' src={logoLCK} alt="Logo LCK" /> */}
          </>
        ))}
      </RadioGroup>
    </FormControl>
  );
};
