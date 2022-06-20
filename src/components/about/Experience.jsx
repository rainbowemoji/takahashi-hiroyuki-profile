import React from "react";

const experienceContent = [
  {
    year: "01/2021 - 01/2022",
    position: "Senior Blockchain Developer",
    compnayName: "Plethori",
    details:
      "Developed DeFi projects including staking, bridge, and swap platforms",
  },
  {
    year: "10/2020 - Present",
    position: "Blockchain Developer",
    compnayName: "Freelance",
    details:
      "Developed ERC20, ERC721, NFT MarketPlace, DEX, CEX, Staking, Bridge and many other DeFi projects on many networks",
  },
  {
    year: "09/2018 - 07/2020",
    position: "Full Stack Web Developer",
    compnayName: "Trenser Technology Solutions (P) Ltd",
    details:
      "Developed and implemented web applications including shopify as a full stack role",
  },
  {
    year: "09/2017 - 08/2018,",
    position: "Web Developer Intern",
    compnayName: "UbTrenser Technology Solutions (P) Ltd",
    details:
      "Developed and implemented front end web pages by using React.js and Angular",
  },
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
