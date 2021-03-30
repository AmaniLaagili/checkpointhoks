import React from "react";
import { Card, Button } from "react-bootstrap";

function MovieCard(props) {
    return (
        <div>
            <Card style={{ width: "18rem" }}>
                <Card.Img
                    variant="top"
                    src={props.list.posterUrl}
                    style={{ height: "330px" }}
                />
                <Card.Body>
                    <Card.Title>{props.list.title}</Card.Title>
                </Card.Body>
                <h2>{"⭐".repeat(props.list.rate)}</h2>
                <Card.Footer>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default MovieCard;
