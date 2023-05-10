import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import "./edit.styles.scss";
// The following code will serve as an editing component for our records. It will use a similar layout to the create component and will eventually submit an update command to our server.
export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    // salary: "",
    salary: 0,
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      console.log("params.id.toString(): ", params.id.toString());
      const id = params.id.toString();
      console.log("id: ", id);
      // const response = await fetch(`http://localhost:5050/record/${params.id.toString()}`);
      const response = await fetch(`http://localhost:5050/record/${id}`);

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const record = await response.json();
      if (!record) {
        window.alert(`Record with id ${id} not found`);
        navigate("/");
        return;
      }

      setForm(record);
    }

    fetchData();

    return;
  }, [params.id, navigate]);

  // These methods will update the state properties.
  function updateForm(value) {
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      position: form.position,
      level: form.level,
      salary: form.salary,
    };

    // CHECK IF USER HAS FILLED OUT ALL FIELDS
    const isInputValid = () => {
      if (form.name === "" || form.position === "" || form.level === "" || form.salary === "") {
        window.alert("Please fill out all form fields");
        return false;
      }
      return true;
    };

    if (isInputValid()) {
      // This will send a post request to update the data in the database.
      await fetch(`http://localhost:5050/record/${params.id}`, {
        method: "PATCH",
        body: JSON.stringify(editedPerson),
        headers: {
          "Content-Type": "application/json",
        },
      }).catch((error) => {
        window.alert(error);
        return;
      });

      navigate("/");
    }
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <div>
      <h3>Update Record</h3>
      <form onSubmit={onSubmit} className="edit-form-container">
        {/* NAME */}
        <div className="form-group">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>

        {/* POSITION */}
        <div className="form-group">
          <label htmlFor="position">Position: </label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.position}
            onChange={(e) => updateForm({ position: e.target.value })}
          />
        </div>

        {/* SALARY */}
        <div className="form-group">
          <label htmlFor="position">Salary: </label>
          <input
            type="text"
            className="form-control"
            id="salary"
            // value={form.salary === 0 ? 0 : form.salary}
            value={form.salary}
            // placeholder={form.salary}
            onChange={(e) => updateForm({ salary: e.target.value })}
          />
        </div>

        {/* RADIO */}
        <div className="form-group edit-level-container">
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionIntern"
              value="Intern"
              checked={form.level === "Intern"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionIntern" className="form-check-label">
              Intern
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionJunior"
              value="Junior"
              checked={form.level === "Junior"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionJunior" className="form-check-label">
              Junior
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              name="positionOptions"
              id="positionSenior"
              value="Senior"
              checked={form.level === "Senior"}
              onChange={(e) => updateForm({ level: e.target.value })}
            />
            <label htmlFor="positionSenior" className="form-check-label">
              Senior
            </label>
          </div>
        </div>

        <div className="form-group edit-submit-btn-container">
          <input type="submit" value="Update Record" className="btn btn-primary edit-submit-btn" />
        </div>
      </form>
    </div>
  );
}
