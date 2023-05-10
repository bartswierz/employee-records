import React, { useState } from "react";
import { useNavigate } from "react-router";
import "./create.styles.scss";

// The following code will serve as a creating component for our records. Using this component, users can create a new record. This component will submit a create command to our server.
export default function Create() {
  const [form, setForm] = useState({
    name: "",
    position: "",
    level: "",
    salary: "",
  });
  const navigate = useNavigate();

  // These methods will update the state properties.
  function updateForm(value) {
    console.log("FORM UPDATE: ", value);
    return setForm((prev) => {
      return { ...prev, ...value };
    });
  }

  // This function will handle the submission.
  async function onSubmit(e) {
    e.preventDefault();

    // When a post request is sent to the create url, we'll add a new record to the database.
    const newPerson = { ...form };
    console.log("newPerson: ", newPerson);

    // // CHECK IF USER HAS FILLED OUT ALL FIELDS
    // const isInputValid = () => {
    //   if (form.name === "" || form.position === "" || form.level === "" || form.salary === "") {
    //     window.alert("Please fill out all form fields");
    //     return false;
    //   }
    //   return true;
    // };
    // CHECK IF USER HAS FILLED OUT ALL FIELDS
    const isInputValid = () => {
      if (
        form.name === "" ||
        !/^[a-zA-Z]+ [a-zA-Z]+$/.test(form.name) || // Check if name is a string of first and last name
        form.position === "" ||
        !/^[a-zA-Z]+$/.test(form.position) || // Check if position is a string
        form.level === "" ||
        isNaN(form.salary) // Check if salary is a number
      ) {
        window.alert("Please fill out all form fields");
        return false;
      }
      return true;
    };

    if (isInputValid()) {
      //POST REQUEST TO ADD USE DATA INTO OUR MONGODB
      await fetch("http://localhost:5050/record", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newPerson),
      }).catch((error) => {
        window.alert(error);
        return;
      });

      // AFTER COMPLETING THE POST REQUEST, WE RESET THE FORM & NAVIGATE BACK TO HOME
      setForm({ name: "", position: "", level: "", salary: 0 });
      navigate("/");
    }
    // //POST REQUEST TO ADD USE DATA INTO OUR MONGODB
    // await fetch("http://localhost:5050/record", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(newPerson),
    // }).catch((error) => {
    //   window.alert(error);
    //   return;
    // });

    // // AFTER COMPLETING THE POST REQUEST, WE RESET THE FORM & NAVIGATE BACK TO HOME
    // setForm({ name: "", position: "", level: "", salary: 0 });
    // navigate("/");
  }

  // This following section will display the form that takes the input from the user.
  return (
    <div>
      <h3 className="create-title">Create New Record</h3>
      <form onSubmit={onSubmit} className="create-form-container">
        {/* <div className="create-form-item-container"> */}
        {/* NAME */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
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
          <label htmlFor="position">Position</label>
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
          <label htmlFor="position">Salary</label>
          <input
            type="text"
            className="form-control"
            id="position"
            value={form.salary}
            onChange={(e) => updateForm({ salary: e.target.value })}
          />
        </div>

        {/* RADIO */}
        <div className="form-group create-level-container">
          {/* INTERN */}
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

          {/* JUNIOR */}
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

          {/* SENIOR */}
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

        {/* SUBMIT */}
        <div className="form-group create-submit-btn-container">
          <input type="submit" value="Add Employee" className="btn btn-primary create-submit-btn" />
        </div>
        {/* </div> */}
      </form>
    </div>
  );
}
