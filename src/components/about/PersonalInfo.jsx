import React from "react";

const personalInfoContent = [
  { meta: "First Name", metaInfo: "Takahashi" },
  { meta: "Last Name", metaInfo: "Hiroyuki" },
  { meta: "Location", metaInfo: "Okazaki, Japan" },
  { meta: "Github", metaInfo: "rainbowemoji" },
  { meta: "Email", metaInfo: "taka.hiro.illus@gmail.com" },
  { meta: "Phone Number", metaInfo: "+81 50 5539 9613" },
  { meta: "LinkedIn", metaInfo: "takahashi-hiroyuki-7aa34a221" },
  { meta: "Telegram", metaInfo: "@trade_plat" },
  { meta: "Skype", metaInfo: "live:davidlimdev" },
  { meta: "Langages", metaInfo: "English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
