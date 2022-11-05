import React from 'react';

const PlayersList = ({laliga}) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>nombre</th>
                    <th>equipo</th>
                    <th>posicion</th>
                    <th>edad</th>
                    <th>nacionalidad</th>
                    <th>Valor</th>
                    
                </tr>
            </thead>
            <tbody>
                {laliga.map(liga => (
                    <tr key={liga.id}>
                        <th>{liga.id}</th>
                        <th>{liga.nombre}</th>
                        <th>{liga.equipo}</th>
                        <th>{liga.posicion}</th>
                        <th>{liga.edad}</th>
                        <th>{liga.nacionalidad}</th>
                        <th>{liga.valor}</th>
                    
                </tr>
                ))}
                
            </tbody>
        </table>
    );
}
export default PlayersList;