import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

// Iconos
// import EditIcon from '@mui/icons-material/Edit';

function createData(nombre, descripcion, editar, remover) {
  return { nombre, descripcion, editar, remover };
}

const rows = [
  createData('LCK', 'Liga oficial de Korea' ,'Editar', 'Remover'),
  createData('LEC', 'Liga oficial de Europa' ,'Editar', 'Remover'),
  createData('LLA', 'Liga oficial de Latam' ,'Editar', 'Remover'),
];

export const Tabla = () => {
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
          {rows.map((row) => (
            <TableRow
              key={row.nombre}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.nombre}
              </TableCell>
              <TableCell align="right">{row.descripcion}</TableCell>

              <TableCell align="right">{row.editar}</TableCell>
              <TableCell align="right">{row.remover}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}