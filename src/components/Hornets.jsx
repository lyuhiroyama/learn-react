import { useState, useEffect } from 'react';

export default function Hornets(){
    const [players, setPlayers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/players')
            .then(response => response.json())
            .then(data => setPlayers(data))
            .catch(error => console.error('Error', error))
    }, []);

    return (
        <div>
            <h1>Hornets Roster</h1>

            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Position</th>
                        <th>Number</th>
                        <th>Height</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    {players.map(player => (
                        <tr key={player.id}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td>{player.number}</td>
                            <td>{player.height}</td>
                            <td>{player.weight}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

