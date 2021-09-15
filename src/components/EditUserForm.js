import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

export default function EditUserForm(props) {
  const [name, setName] = useState(props.user.name);
  const [email, setEmail] = useState(props.user.email);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  function handleSubmit() {
    //combines the new user details
    let editedUser = {
      name: name,
      email: email,
      id: props.user.id,
    };

    //calls the edit User function and closes the modal
    props.editUser(editedUser, props.user.id);
    props.toggleModal();
  }

  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={name}
          onChange={(e) => handleNameChange(e)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => handleEmailChange(e)}
        />
        <Button onClick={() => handleSubmit()}>Save</Button>
      </Form.Group>
    </Form>
  );
}