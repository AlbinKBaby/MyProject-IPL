import React, { useState } from 'react';
import { Card, Button, Row, Col, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

// Sample player data (you should fetch this from your backend)
const initialPlayers = [
    { id: 1, name: 'Virat Kohli', role: 'Batsman', basePrice: 20000000 },
    { id: 2, name: 'Jasprit Bumrah', role: 'Bowler', basePrice: 15000000 },
    { id: 3, name: 'Hardik Pandya', role: 'All-rounder', basePrice: 18000000 },
    { id: 4, name: 'MS Dhoni', role: 'Wicketkeeper', basePrice: 16000000 },
];

export default function RetainPlayers() {
    const [players, setPlayers] = useState(initialPlayers);
    const [retained, setRetained] = useState({});
     const navigate = useNavigate(); //

    const handleToggle = (id) => {
        setRetained((prev) => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    const handleConfirmRetention = () => {
        const retainedPlayers = players.filter(player => retained[player.id]);
        const releasedPlayers = players.filter(player => !retained[player.id]);

        // Send this data to backend (e.g., using fetch or Axios)
        console.log('Retained:', retainedPlayers);
        console.log('Released:', releasedPlayers);
       navigate('/AuctionLive');
    };

    return (
        <div className="container mt-4">
            <h3>Retain or Release Players</h3>
            <Row>
                {players.map(player => (
                    <Col key={player.id} sm={6} md={4} lg={3} className="mb-4">
                        <Card>
                            <Card.Body>
                                <Card.Title>{player.name}</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">{player.role}</Card.Subtitle>
                                <Card.Text>Base Price: ₹{player.basePrice.toLocaleString()}</Card.Text>
                                <Form.Check
                                    type="switch"
                                    id={`retain-${player.id}`}
                                    label={retained[player.id] ? 'Retain' : 'Release'}
                                    checked={retained[player.id] || false}
                                    onChange={() => handleToggle(player.id)}
                                />
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Button onClick={handleConfirmRetention} variant="primary">
                Confirm Retention
            </Button>
        </div>
    );
}
