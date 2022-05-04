import React from "react";

export default function InfoComponent() {
  return(
    <>
      <div className="card my-1 h-100">
        <div className="card-header">User Data</div>
        <div className="card-body ">
          <div className="card-text">
            <p>First Name :</p>
            <p>Last Name :</p>
            <p>Email:</p>
            <p>Mobile:</p>
            <p>Country:</p>
            <p>Birth Date :</p>
            <p>Facebook Profile: </p>
          </div>
        </div>
        <div className="card-footer text-muted">2 days ago</div>
      </div>
    </>
  );
}