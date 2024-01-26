import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "../styles/HobbyCard.css";
import people from "../images/people.png";

function HobbyCard() {
  return (
    <Row xs={1} md={2} className="g-4 hobbycard" style={{ padding: "10vh 8vw" }}>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col key={idx}>
          <Card>
            <Card.Body>
              <Row >
                
                <Col  className="card-title">
                  <Card.Title> <img src={people} /> People  
                  </Card.Title>
                   
                </Col>
              </Row>
              <Card.Text className="card-text">
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <a href="#" class="btn btn-primary btn-no-bg">
                Connect
              </a>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default HobbyCard;
