import React from "react";
import "./MainCard.css";

function MainCard({
  picture,
  title,
  first,
  last,
  streetNumber,
  streetName,
  gender,
  city,
  state,
  country,
  postcode,
  timezone,
  timezoneDis,
}) {
  return (
    <div className="MainCard">
      <img src={picture} alt="" />
      <div className="details">
        <h1>
          {title}.&nbsp;
          {first}&nbsp;
          {last}
        </h1>
        <div className="address-timezone-gender">
          <div className="address">
            <div id="street">{streetNumber}</div>,{streetName},{city},{state},
            <div id="country">{country}</div>,{postcode}
          </div>
          <div className="timezone">
            {timezone}&nbsp;-&nbsp;{timezoneDis}
          </div>
          <p className="gender">{gender}</p>
        </div>
      </div>
    </div>
  );
}

export default MainCard;
