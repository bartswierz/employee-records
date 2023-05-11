import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./recordList.styles.scss";

// The following code will serve as a viewing component for our records. It will fetch all the records in our database through a GET method.
// const Record = (props) => (
const Record = ({ record, deleteRecord }) => {
  // console.log('Record props passed: ', props);
  const { _id, name, position, level, salary } = record;
  return (
    <tr>
      <td>{name}</td>
      <td>{position}</td>
      <td>{level}</td>
      <td>${salary}</td>
      <td>
        <Link className="btn btn-link" to={`/edit/${_id}`}>
          Edit
        </Link>
        |
        <button
          className="btn btn-link"
          onClick={() => {
            deleteRecord(_id);
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default function RecordList() {
  const [records, setRecords] = useState([]);

  // This method fetches the records from the database.
  useEffect(() => {
    async function getRecords() {
      const response = await fetch(`http://localhost:5050/record/`);

      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      //ARRAY OF OBJECTS FROM MONGODB {level: string, name: string, position: string, salary: number, _id: autogenerated-id}
      const records = await response.json();

      console.log("recordList - records fetched: ", records);
      setRecords(records);
    }

    getRecords();

    return;
  }, [records.length]);

  // This method will delete a record from our DB that matches passed id
  async function deleteRecord(id) {
    await fetch(`http://localhost:5050/record/${id}`, {
      method: "DELETE",
    });

    //CREATING A NEW ARRAY WITHOUT PASSED ID
    const newRecords = records.filter((record) => record._id !== id);
    setRecords(newRecords);
  }

  // This method will map out the records on the table
  function recordList() {
    return records.map((record) => {
      return <Record record={record} deleteRecord={() => deleteRecord(record._id)} key={record._id} />;
    });
  }

  // This following section will display the table with the records of individuals.
  return (
    <div className="recordlist-container">
      <h3 className="record-list-header">Employee Records</h3>
      <table className="table recordlist-container" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th className="name-header">Name</th>
            <th className="position-header">Position</th>
            <th className="level-header">Level</th>
            <th className="salary-header">Salary</th>
            <th className="action-header">Action</th>
          </tr>
        </thead>
        {/* RENDER RECORD COMPONENT */}
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}