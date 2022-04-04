import React from "react";

import img from "../profile_pic.jpg";

const educations = [
  {
    year: "2016",
    diploma: "Bachelor of Information Technology and Business",
    school: "Haaga-Helia University of Applied Sciences",
  },
  {
    year: "2012",
    diploma: "Audio-visual communication",
    school: "Omnia Vocational School",
  },
  { year: "2009", diploma: "High School" },
];

const works = [
  "Software developer at Telia since 2018",
  "Design Systems",
  "ECommerce",
  "Mobile development",
  "Stack: React, Typescript, Nodejs",
];

const Education = ({ year, diploma, school }) => (
  <p className="education">
    <b>{year}</b>
    <div>
      {diploma}
      <br />
      <i>{school}</i>
    </div>
  </p>
);

const Introduction = () => (
  <div className="intro">
    <div className="columns">
      <div className="columnLeft">
        <p>
          <h1>
            Kati Räsänen
            <br /> <i>Software developer</i>
          </h1>
        </p>

        <h3>Work</h3>

        <ul>
          {works.map((w) => (
            <li>{w}</li>
          ))}
        </ul>

        <h3>Education</h3>

        {educations.map((e) => (
          <Education {...e} />
        ))}
      </div>
      <div className="columnRight">
        <img src={img} className="profilePicture" alt="profile picture" />
      </div>
    </div>
    <hr />

    <h2>Koodarina Telialla</h2>
    <h3>Telia hackathon</h3>
    <a href="https://www.telia.fi/artikkelit/artikkeli/telia-ai-hackathon">
      Sisäisiä hackathoneja
    </a>

    <a href="https://www.telia.fi/business/article/europes-largest-hackathon-at-dipoli-in-espoo">
      Sponsori ja tehtävän asettaja Dipolin Junctionssa
    </a>
  </div>
);

export default Introduction;
