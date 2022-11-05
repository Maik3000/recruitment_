import React from 'react';
import { GiBookStorm } from 'react-icons/gi';

const PlayersList = (players) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>nombre</th>
                    <th>equipo</th>
                    <th>posicion</th>
                    <th>nacionalidad</th>
                    <th>edad</th>
                    
                </tr>
            </thead>
            <tbody>
                {players.map(player => (
                    <tr key={player.id}>
                        <th>{player.ID}</th>
                        <th>{player.nombre}</th>
                        <th>{player.equipo}</th>
                        <th>{player.posicion}</th>
                        <th>{player.nacionalidad}</th>
                        <th>{player.edad}</th>
                    
                </tr>

                ))}
                
            </tbody>
        </table>
    );
}
export default PlayersList;