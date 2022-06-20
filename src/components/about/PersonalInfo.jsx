import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Takahashi" },
  { meta: "last name", metaInfo: "Hiroyuki" },
  { meta: "Age", metaInfo: "27 Years" },
  { meta: "Nationality", metaInfo: "Japanese" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Address", metaInfo: "Okazaki, Japan" },
  { meta: "phone", metaInfo: "+81 50 5539 9613" },
  { meta: "Email", metaInfo: "devzone1209@gmail.com" },
  { meta: "Skype", metaInfo: "live:.cid.5be51a652507c1b5" },
  { meta: "Telegram", metaInfo: "@trade_plat" },
  { meta: "langages", metaInfo: "English" },
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
