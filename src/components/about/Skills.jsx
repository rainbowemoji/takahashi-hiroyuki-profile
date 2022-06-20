import React from "react";

const skillsContent = [
  //Basic
  { skillPercent: "73", skillName: "RUST" },
  { skillPercent: "89", skillName: "SOLIDITY" },
  { skillPercent: "72", skillName: "CosmWasm" },
  { skillPercent: "87", skillName: "C++" },

  { skillPercent: "93", skillName: "NFT" },
  { skillPercent: "86", skillName: "DEX" },
  { skillPercent: "95", skillName: "Bridge" },
  { skillPercent: "73", skillName: "Orderbook" },
  { skillPercent: "68", skillName: "Solana" },
  { skillPercent: "76", skillName: "Ethereum" },
  { skillPercent: "65", skillName: "Terra" },
  { skillPercent: "83", skillName: "Casper" },
  { skillPercent: "90", skillName: "Javascript" },
  { skillPercent: "74", skillName: "Typescript" },
  { skillPercent: "72", skillName: "NodeJS" },
  { skillPercent: "64", skillName: "Vue" },
  { skillPercent: "87", skillName: "React" },
  { skillPercent: "51", skillName: "Angular" },
  { skillPercent: "90", skillName: "HTML5" },
  { skillPercent: "74", skillName: "SCSS" },

  { skillPercent: "84", skillName: "Google Cloud" },
  { skillPercent: "72", skillName: "AWS" },
  { skillPercent: "65", skillName: "Firebase" },

  { skillPercent: "78", skillName: "MySQL" },
  { skillPercent: "69", skillName: "MongoDB" },
  { skillPercent: "63", skillName: "PostgreSQL" },
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
