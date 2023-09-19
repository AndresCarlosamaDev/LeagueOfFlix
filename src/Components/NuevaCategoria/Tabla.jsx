import React, { useState, useEffect } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { buscar } from '../../api/api';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { borrarLiga } from '../../api/api';


export const Tabla = ({ url }) => {

    //Datos db
    const [ligas, setLigas] = useState([])

    useEffect(() => {
      buscar(url, setLigas)
      // console.log(ligas)
    }, [url])

    //Hooks edit - delete
    
    const editar = () => {
      console.log("Btn editar")
    }

    const eliminar = (id) => {
      console.log("Btn eliminar", id)
      const url = "ligas"
      borrarLiga(url, id)
    }

  return (
    <TableContainer component={Paper} sx={{ px: "7rem", py: "2rem", borderRadius: '10px' }}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nombre</TableCell>
            <TableCell align="right">Descripcion</TableCell>
            <TableCell align="right">Editar</TableCell>
            <TableCell align="right">Remover</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {ligas.map((liga) => (
            <TableRow
              key={liga.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="liga">
                {liga.nombre}
              </TableCell>
              <TableCell align="right">{liga.descripcion}</TableCell>
              <TableCell align="right"><IconButton onClick={() => editar()} variant="contained"><EditIcon /></IconButton></TableCell>
              <TableCell align="right"><IconButton onClick={() => eliminar(liga.id)} variant="contained"><DeleteIcon /></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>

      </Table>
    </TableContainer>
  );
}