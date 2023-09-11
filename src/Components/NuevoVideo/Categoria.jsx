import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

import '../../assets/css/categoria.css'

import logoLCK from "../../assets/img/LCK_logo.png";
import logoLEC from '../../assets/img/LEC_logo.png'
import logoLLA from '../../assets/img/LLA_logo.png'


export const Categoria = () => {
  return (
    <FormControl sx={{ width: '75%' }}>
      
      <FormLabel id="demo-row-radio-buttons-group-label">Liga</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
      >
        <FormControlLabel value="female" control={<Radio />} label="LCK" />
        <img className='logo' src={logoLCK} alt="Logo LCK" />
        <FormControlLabel value="male" control={<Radio />} label="LEC" />
        <img className='logo' src={logoLEC} alt="Logo LEC" />
        <FormControlLabel value="other" control={<Radio />} label="LLA" />
        <img className='logo' src={logoLLA} alt="Logo LLA" />
      </RadioGroup>
    </FormControl>
  );
}