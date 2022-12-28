import React, { useState } from "react";
import Collapse from "react-bootstrap/Collapse";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import CloseButton from "react-bootstrap/CloseButton";
import { useNavigate } from "react-router-dom";
function CardItem(props) {
  const navigate = useNavigate();

  const [open3, setOpen3] = useState(true);
  const gonderi = props.tekPost;

  return (
    <CardGroup className="cardStyle">
      <Card className="m-4 slider">
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
          <Card.Title> {gonderi.name} </Card.Title>
          <Collapse in={open3}>
            <Card.Text id="example-collapse-text">
              <p className="lead">
                {gonderi.username} <br />
                {gonderi.email} <br />
                {gonderi.phone} <br />
                {gonderi.website} <br />{" "}
              </p>
            </Card.Text>
          </Collapse>
          <div className="d-grid gap-2">
            <Button
              onClick={() =>
                navigate("/postdetail", { state: { postBilgileri: gonderi } })
              }
              variant="outline-warning"
              size="lg"
            >
              Go API Details
            </Button>
          </div>
        </Card.Body>
      </Card>

      {/* ******************** */}
    </CardGroup>
  );
}
export default CardItem;
