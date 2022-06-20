import React from "react";

const skillsContent = [
  //Basic
  { skillPercent: "85", skillName: "RUST" },
  { skillPercent: "92", skillName: "C++" },
  { skillPercent: "95", skillName: "SOLIDITY" },

  { skillPercent: "93", skillName: "DeFi" },
  { skillPercent: "90", skillName: "Ethereum" },
  { skillPercent: "90", skillName: "Solana" },
  { skillPercent: "85", skillName: "Terra" },
  { skillPercent: "92", skillName: "Casper" },
  { skillPercent: "97", skillName: "Javascript" },
  { skillPercent: "95", skillName: "Typescript" },
  { skillPercent: "96", skillName: "NodeJS" },
  { skillPercent: "92", skillName: "Vue" },
  { skillPercent: "94", skillName: "React" },
  { skillPercent: "87", skillName: "Angular" },
  { skillPercent: "99", skillName: "HTML5 & SCSS" },

  { skillPercent: "91", skillName: "AWS" },
  { skillPercent: "93", skillName: "Google Cloud" },
  { skillPercent: "93", skillName: "Heroku" },
  { skillPercent: "89", skillName: "Firebase" },

  { skillPercent: "91", skillName: "MySQL" },
  { skillPercent: "95", skillName: "MongoDB" },
  { skillPercent: "92", skillName: "PostgreSQL" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 p${val.skillPercent}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
