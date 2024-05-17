import React from "react";
import MediaCard from "./Card";

function Dashboard() {
  const input_list = [
    { name: "Janek", surname: "Kowalski", content: "jakiś opis Janka" },
    { name: "Janek", surname: "Kowalski", content: "jakiś opis Janka" },
    { name: "Janek", surname: "Kowalski", content: "jakiś opis Oli" },
    { name: "Janek", surname: "Kowalski", content: "jakiś opis Agaty" },
  ];
  return (
    <div>
      {input_list.map((item) => {
        return (
          <MediaCard
            name={item.name}
            surname={item.surname}
            content={item.content}
            image={item.image}
          />
        );
      })}
      <MediaCard />
    </div>
  );
}

export default Dashboard;
