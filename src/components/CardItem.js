import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CloseButton from "react-bootstrap/CloseButton";
function CardItem(props) {
  const [open, setOpen] = useState(true);
  const [open2, setOpen2] = useState(true);
  const [open3, setOpen3] = useState(true);
  const gonderi = props.tekPost;

  return (
    <CardGroup className="cardStyle">
      <Card className="m-4">
        <a
          onClick={() => setOpen3(!open3)}
          aria-controls="example-collapse-text"
          aria-expanded={open3}
        >
          <CloseButton />
          <Card.Img
            variant="top"
            src="https://picsum.photos/id/61/900/1200
"
          />
        </a>

        <Card.Body>
          <Card.Title> {gonderi.name} Card </Card.Title>
          <Collapse in={open3}>
            <Card.Text id="example-collapse-text">
              <p className="lead">
                {gonderi.address.street} <br />
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This card has even longer content
                than the first to show that equal height action.{" "}
              </p>
            </Card.Text>
          </Collapse>
          <div className="d-grid gap-2">
            <Button variant="outline-warning" size="lg">
              All Block Level Button
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* ******************** */}
    </CardGroup>
  );
}
export default CardItem;
