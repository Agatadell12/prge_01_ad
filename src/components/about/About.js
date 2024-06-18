import React, { useState } from "react";

function About() {
  const [toggle, settoggle] = useState(0);

  const handleToggle = () => setToggle(!toggle);

  return (
    <div className="about">
      <h1>O POROJEKCIE </h1>
      <div className="about_text">
        aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaaaa
      </div>
    </div>
  );
}
