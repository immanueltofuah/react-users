import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { connect } from "react-redux";
import { addUser} from "./actions/userActions";

function UserForm(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [gen, setGen] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (email && name && gen) {
      let user = {
        name: name,
        email: email,
        gen: gen,
        id: uuid(),
      };

      props.addNewUser(user);

      setName("");
      setEmail("");
      setGen("");
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <h1 className="heading">Code train student form</h1>
      <input
        placeholder="FullName"
        type="text"
        name="fullname"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        placeholder="Gen"
        type="text"
        name="gen"
        value={gen}
        onChange={(e) => setGen(e.target.value)}
      />

      <input className="but" type="submit" /> 
    </form>
  );
}

const mapDispatchToProps = {
  addNewUser: addUser,
};
export default connect (null, mapDispatchToProps)(UserForm);
