import React from "react";
import Card from "react-bootstrap/Card";

import "./Home.css";

import Col from "react-bootstrap/Col";

function Home({ title, image, price, description, category }) {
  return (
    <Col xs={6} md={4} className="item">
      <Card style={{ cursor: "pointer" }}>
        <Card.Img src={`${image}`} className="img" />
        <Card.Body className="item_description">
          <Card.Title>{title}</Card.Title>
          <Card.Text>{`$${price}`}</Card.Text>
          <Card.Text>
            {description.length > 150
              ? `${description.slice(0, 150)}...`
              : description}
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Last updated 3 mins ago</small>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default Home;
