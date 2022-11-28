import React, { useState, useEffect } from "react";
import axios from "axios";
import CardItem from "./CardItem";
import "./cards.css";
const Cards = () => {
  //
  //

  const [users, setUsers] = useState([]);
  const getData = async () => {
    const { data } = await axios.get(
      "https://jsonplaceholder.typicode.com/users?_limit=2"
    );
    setUsers(data);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <h2>Cards</h2>
      {console.log(users)}
      <div className="list">
        {users.map((tekKullaniciBilgi) => {
          return (
            <CardItem key={tekKullaniciBilgi.id} tekPost={tekKullaniciBilgi} />
          );
        })}
      </div>

      {/* <a
            onClick={() => setOpen(!open)}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/95/600/900
"
            />
          </a>
          <Card.Body>
            <Card.Title>Click Card </Card.Title>
            <Collapse in={open}>
              <Card.Text id="example-collapse-text">
                <p className="lead">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.{" "}
                </p>
              </Card.Text>
            </Collapse>
          </Card.Body> */}
    </div>
  );
};

export default Cards;
