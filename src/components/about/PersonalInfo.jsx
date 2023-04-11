import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Michael", hasColor: "" },
  { meta: "last name", metaInfo: "Maye", hasColor: "" },
  { meta: "Age", metaInfo: "36 Years", hasColor: "" },
  { meta: "Nationality", metaInfo: "American", hasColor: "" },
  { meta: "Freelance", metaInfo: "Available", hasColor: "green" },
  { meta: "Address", metaInfo: "Jacksonville, FL", hasColor: "" },
  { meta: "phone", metaInfo: "(904) 446-8884", hasColor: "" },
  { meta: "Email", metaInfo: "micahel.maye@harrowingpleasantries.com", hasColor: "" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font container p-4">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
