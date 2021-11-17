import React from "react";
import UserForm from "../components/UserForm";
import { Container, Row, Col } from "react-bootstrap";
import UserList from "../components/UserList";
import { signOut } from "../actions/authActions";
import { useDispatch, connect } from "react-redux";

function Home(props) {
    return (
      <Container fluid style={{ marginTop: "5 rem" }}>
        <Row>
          <button onClick={() => props.signOut()}>Sign out</button>
          <Col md="5">
            <UserForm />
          </Col>
  
          <Col md="5 ">
            <UserList />
          </Col>
        </Row>
      </Container>
    );
  }
  const mapDispatch = {
    signOut,
  };
  
//   export default connect(null, mapDispatch)(Home);