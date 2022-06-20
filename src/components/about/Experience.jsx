import React from "react";

const experienceContent = [
  {
    year: "10/2021 - Present",
    position: "Lead Blockchain Developer",
    compnayName: "Plethori(Contract)",
    details: `Wrote smart contracts for ERC20, ERC721 and Bridge by using Solidity.
      Implemented web3 integration and handled server hosting using Google Cloud, Firebase, and
      AWS.
      Contributed to stock exchange platform development by using Golang, React, and Redux.
      Worked on 3rd party integration to extend the platform.`,
  },
  {
    year: "11/2021 - Present",
    position: "Senior Blockchain Developer",
    compnayName: "Utropicmedia(Contract)",
    details: `Contributed to designing high-level architecture to build blockchain driven media social. Worked on blockchain L1 to build customized network.
      Wrote smart contracts to build base platform on L1.
      Assist teammates to integrate wallet and web3.`,
  },
  {
    year: "02/2022 - 05/2022",
    position: "Lead Blockchain Developer",
    compnayName: "FigFinance",
    details: `Worked on high-level architecture to build financial protocols for lending platform.
      Wrote Solana smart contracts for liquidity management by using Rust.
      Implemented web3 integration by using solana/web3.js.`,
  },
  {
    year: "09/2018 - Present",
    position: "Full-stack Web & Blockchain Developer",
    compnayName: "Freelance",
    details: `Achieved deep knowledge and rich experience in web & blockchain development.
      Worked with many clients to help them to build Web projects and DApps.
      Mainly trained in DeFi projects like ERC20, ERC721, NFT Marketplace, Bridge, Staking, Dex, P2E, and so on.`,
  },
  {
    year: "09/2017 - 08/2018",
    position: "Web Developer Intern",
    compnayName: "Trenser Technology Solutions (P) Ltd",
    details: `Developed and implemented front end web pages by using React.js and Angular.
    Conducted testing and validation to ensure web pages being secure and well-navigated.
    Hosted websites by using Heroku, AWS, and GCP.`,
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
