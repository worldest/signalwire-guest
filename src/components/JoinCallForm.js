import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function JoinCallForm({ onJoin = () => {} }) {
  let [name, setName] = useState("");
  let [room, setRoom] = useState("");
  let [mod_, setMod] = useState("");
  return (
    <Container>
      {/* <Row className="justify-content-md-center">
        <Col lg={6} md={6} sm={6} xs={6} className="mt-5 mb-2">
          <Button
            variant="primary"
            type="submit"
            style={{ width: "100%" }}
            onClick={() => {
              document.getElementById("createRoom").style.display = "block";
              document.getElementById("joinRoom").style.display = "none";
              setMod("moderator");
            }}
          >
            Create a Room
          </Button>
        </Col>
        <Col lg={6} md={6} sm={6} xs={6} className="mt-5 mb-2">
          <Button
            variant="outline-primary"
            type="submit"
            style={{ width: "100%" }}
            onClick={() => {
              document.getElementById("createRoom").style.display = "none";
              document.getElementById("joinRoom").style.display = "block";
            }}
          >
            Join a Room
          </Button>
        </Col>
      </Row> */}

      <Row className="justify-content-md-center">
        <Col
          id="createRoom"
          lg={6}
          style={{ display: "none" }}
          className="mt-5 mb-2"
        >
          <h3>Create a Room</h3>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="VideoCallName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                pattern="[^' ']+"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="VideoRoom">
              <Form.Label>Room Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Room Name"
                onChange={(e) => setRoom(e.target.value)}
                value={room}
                pattern="[^' ']+"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="VideoRoom">
              <Form.Control
                type="hidden"
                placeholder="Room Name"
                onChange={(e) => setMod(e.target.value)}
                value="moderator"
                pattern="[^' ']+"
                required
              />
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: 200 }}
              onClick={() => {
                if (name !== "" && room !== "") {
                  onJoin({ name, room, mod_ });
                } else {
                  alert("Please Fill all fields");
                }
              }}
            >
              Create
            </Button>
          </Form>
        </Col>
        <Col
          id="joinRoom"
          lg={6}
          // style={{ display: "none" }}
          className="mt-5 mb-2"
        >
          <h3>Join a Room</h3>
          <Form onSubmit={(e) => e.preventDefault()}>
            <Form.Group className="mb-3" controlId="VideoCallName">
              <Form.Label>Your Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                pattern="[^' ']+"
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="VideoRoom">
              <Form.Label>Room Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Room Name"
                onChange={(e) => setRoom(e.target.value)}
                value={room}
                pattern="[^' ']+"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="VideoCallName">
              <Form.Label>Join As</Form.Label>
              <Form.Select
                type="text"
                placeholder="Your Name"
                onChange={(e) => {
                  //alert(e.target.value);
                  setMod(e.target.value);
                }}
                pattern="[^' ']+"
              >
                <option value="guest">Guest</option>
                {/* <option value="audience">Audience</option> */}
              </Form.Select>
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              style={{ width: 200 }}
              onClick={() => {
                if (name !== "" && room !== "") {
                  onJoin({ name, room, mod_ });
                } else {
                  alert("Please Fill all fields");
                }
              }}
            >
              Join
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
