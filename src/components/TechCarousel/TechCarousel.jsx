import "./TechCarousel.css";

import react from "../../assets/logos/react.svg";
import nodejs from "../../assets/logos/nodejs-icon.svg";
import dotnet from "../../assets/logos/dotnet-logo.png";
import mongodb from "../../assets/logos/mongodb-logo-png_seeklogo-481256.png";
import oracle from "../../assets/logos/oracle.png";
import git from "../../assets/logos/git.svg";
import sql from "../../assets/logos/SQL-Server.svg";

const techs = [
  { name: "React", logo: react },
  { name: "Node.js", logo: nodejs },
  { name: ".NET", logo: dotnet },
  { name: "MongoDB", logo: mongodb },
  { name: "Oracle", logo: oracle },
  { name: "Git", logo: git },
  { name: "SQL Server", logo: sql },
];

function TechList() {
  return (
    <>
      {techs.map((tech) => (
        <div className="carousel-item" key={tech.name}>
          <img src={tech.logo} alt={tech.name} />
        </div>
      ))}
    </>
  );
}

export default function TechCarousel() {
  return (
    <div className="carousel">
      <div className="carousel-track">
        <TechList />
        <TechList />
      </div>
    </div>
  );
}
