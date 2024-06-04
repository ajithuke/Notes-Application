import React from "react";
import Card from "react-bootstrap/Card";

const MyCard = (props) => {

    return (
        <Card className="mt-3">
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
                <Card.Text>
                    {props.note}
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default MyCard;