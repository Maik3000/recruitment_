import React from 'react';
import {
    TableContainer, 
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell
} from '@material-ui/core';



const PlayersList = ({laliga}) => {
    return (
        
         <div className="table">
        <TableContainer>
         <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>nombre</TableCell>
                    <TableCell>equipo</TableCell>
                    <TableCell>posicion</TableCell>
                    <TableCell>edad</TableCell>
                    <TableCell>nacionalidad</TableCell>
                    <TableCell>Valor(En MM de €) </TableCell>
                    
                </TableRow>
            </TableHead>
            <TableBody>
                {laliga.map(liga => (
                    <TableRow key={liga.id}>
                        <TableCell>{liga.id}</TableCell>
                        <TableCell>{liga.nombre}</TableCell>
                        <TableCell>{liga.equipo}</TableCell>
                        <TableCell>{liga.posicion}</TableCell>
                        <TableCell>{liga.edad}</TableCell>
                        <TableCell>{liga.nacionalidad}</TableCell>
                        <TableCell align="center">{liga.valor}</TableCell>
                    
                </TableRow>
                ))}
                
            </TableBody>
        </Table>
        </TableContainer>
        </div>
    );
}
export default PlayersList;