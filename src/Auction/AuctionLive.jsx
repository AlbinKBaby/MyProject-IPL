import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button, ProgressBar, ListGroup, Alert } from 'react-bootstrap';

const AuctionLive = () => {
    const [currentPlayer, setCurrentPlayer] = useState({
        name: 'Virat Kohli',
        role: 'Batsman',
        basePrice: 20000000,
        image: '/images/kohli.jpg',
    });

    const [currentBid, setCurrentBid] = useState(22000000);
    const [leadingTeam, setLeadingTeam] = useState('Team Royal');
    const [timeLeft, setTimeLeft] = useState(30);
    const [teamBudget, setTeamBudget] = useState(70000000); // your team budget
    const [auctionHistory, setAuctionHistory] = useState([
        { name: 'Jasprit Bumrah', price: 15000000, team: 'Team Titans' },
        { name: 'MS Dhoni', price: 18000000, team: 'Team Super Kings' },
    ]);

    const bidIncrement = 1000000; // ₹10 Lakhs
    const bidDisabled = currentBid + bidIncrement > teamBudget || timeLeft <= 0;

    useEffect(() => {
        const interval = setInterval(() => {
            setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const handlePlaceBid = () => {
        if (!bidDisabled) {
            const newBid = currentBid + bidIncrement;
            setCurrentBid(newBid);
            setLeadingTeam('Your Team'); // In real app, this should be from logged-in user
            setTeamBudget(teamBudget - bidIncrement);
        }
    };

    return (
        <Container fluid className="mt-4">
            <Row>
                {/* Current Player */}
                <Col md={8}>
                    <Card className="mb-3">
                        <Row className="no-gutters">
                            <Col md={4}>
                                <Card.Img variant="top" src={currentPlayer.image} alt={currentPlayer.name} />
                            </Col>
                            <Col md={8}>
                                <Card.Body>
                                    <Card.Title>{currentPlayer.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">{currentPlayer.role}</Card.Subtitle>
                                    <Card.Text>Base Price: ₹{(currentPlayer.basePrice / 10000000).toFixed(2)} Cr</Card.Text>
                                    <Card.Text>Current Bid: ₹{(currentBid / 10000000).toFixed(2)} Cr</Card.Text>
                                    <Card.Text>Leading Team: <strong>{leadingTeam}</strong></Card.Text>

                                    <ProgressBar now={(timeLeft / 30) * 100} label={`${timeLeft}s`} className="mb-2" />
                                    <Button 
                                        onClick={handlePlaceBid} 
                                        disabled={bidDisabled} 
                                        variant="success"
                                    >
                                        Place Bid ₹{(currentBid + bidIncrement) / 10000000} Cr
                                    </Button>
                                    {bidDisabled && <Alert variant="warning" className="mt-2">Cannot bid (insufficient funds or time over)</Alert>}
                                </Card.Body>
                            </Col>
                        </Row>
                    </Card>
                </Col>

                {/* Sidebar Info */}
                <Col md={4}>
                    <Card className="mb-3">
                        <Card.Body>
                            <Card.Title>Your Team Budget</Card.Title>
                            <h4>₹{(teamBudget / 10000000).toFixed(2)} Cr</h4>
                        </Card.Body>
                    </Card>

                    <Card>
                        <Card.Body>
                            <Card.Title>Sold Players</Card.Title>
                            <ListGroup variant="flush">
                                {auctionHistory.map((player, idx) => (
                                    <ListGroup.Item key={idx}>
                                        {player.name} – ₹{(player.price / 10000000).toFixed(2)} Cr – {player.team}
                                    </ListGroup.Item>
                                ))}
                            </ListGroup>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default AuctionLive;
