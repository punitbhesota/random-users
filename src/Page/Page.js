import React, { useState, useEffect } from "react";
import "./Page.css";
import MainCard from "../Components/MainCard/MainCard";
import Card from "../Components/Card/Card";
import axios from "axios";

function Page() {
  const [users, setUsers] = useState([{}]);
  const [user, setUser] = useState();
  useEffect(() => {
    axios
      .get(
        "https://randomuser.me/api/?inc=gender,name,nat,location,picture,email&results=%2020"
      )
      .then((res) => {
        setUsers(res.data.results);
        setUser(res.data.results[0]);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <div className="Page">
      <div className="selected-card">
        <MainCard
          picture={user?.picture?.large}
          title={user?.name?.title}
          first={user?.name?.first}
          last={user?.name?.last}
          gender={user?.gender}
          streetNumber={user?.location?.street?.number}
          streetName={user?.location?.street?.name}
          city={user?.location?.city}
          state={user?.location?.state}
          country={user?.location?.country}
          postcode={user?.location?.postcode}
          timezone={user?.location?.timezone.offset}
          timezoneDis={user?.location?.timezone.description}
        />
      </div>
      {users ? (
        <div className="all-cards">
          {users.map((User) => {
            return (
              <div className="user-card" onClick={() => setUser(User)}>
                <Card
                  title={User.name?.title}
                  first={User.name?.first}
                  last={User.name?.last}
                  email={User.email}
                  gender={User.gender}
                  nat={User.nat}
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div>Loading Users</div>
      )}

      <div></div>
    </div>
  );
}

export default Page;
