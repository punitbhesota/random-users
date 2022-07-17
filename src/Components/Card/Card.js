import React from "react";
import "./Card.css";

function Card({ title, first, last, gender, nat, email }) {
  return (
    <div className="Card">
      <div className="card--1">
        {gender}&nbsp;.&nbsp;{nat}
      </div>
      <div className="card--2">
        {title}. &nbsp;
        {first}
        &nbsp;
        {last}
      </div>
      <div className="card--3">{email}</div>
    </div>
  );
}

export default Card;
