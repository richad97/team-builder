import "./App.css";
import { useState } from "react";

const teamMembers = [
  {
    id: 0,
    name: "John",
    email: "john123@gmail.com",
    role: "Back-End Developer",
  },
  {
    id: 1,
    name: "Tim",
    email: "tim92@yahoo.com",
    role: "Junior Engineer",
  },
  {
    id: 2,
    name: "Mike",
    email: "mike2000@outlook.com",
    role: "Front-End Developer",
  },
];

const initialFormValues = {
  id: null,
  name: "",
  email: "",
  role: "",
};

const flex = {
  display: "flex",
  marginTop: 10,
  justifyContent: "space-between",
};

function Form() {
  return;
}

function App() {
  const [team, setTeam] = useState(teamMembers);
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
      <div style={{ display: "flex", flexDirection: "row" }}>
        {team.map((obj) => {
          return (
            <div key={obj.id} style={{ padding: "0 1rem" }}>
              <div style={flex}>
                <p>Name:</p>
                <p>{obj.name}</p>
              </div>
              <div style={flex}>
                <p>E-Mail:</p>
                <p>{obj.email}</p>
              </div>
              <div style={flex}>
                <p>Role:</p>
                <p>{obj.role}</p>
              </div>
            </div>
          );
        })}
      </div>
      <form style={{ display: "flex" }}>
        <label>
          Name:
          <input
            name="name"
            type="text"
            onChange={(e) => {
              setFormValues({ ...formValues, name: e.target.value });
            }}
          ></input>
        </label>
        <label>
          E-Mail:
          <input
            name="email"
            type="text"
            onChange={(e) => {
              setFormValues({ ...formValues, email: e.target.value });
            }}
          ></input>
        </label>
        <label>
          Role:
          <input
            name="role"
            type="text"
            onChange={(e) => {
              setFormValues({ ...formValues, role: e.target.value });
            }}
          ></input>
        </label>
        <button
          onClick={(e) => {
            e.preventDefault();
            setTeam([...team, { ...formValues }]);
          }}
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default App;
