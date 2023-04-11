import React from "react";

const personalInfoContent = [
  { meta: "Phone", metaInfo: "904-446-8884", hasColor:""},
  { meta: "Email", metaInfo: "MICHAEL.MAYE@HARROWINGPLEASANTRIES.COM", hasColor: "" },
];

const contInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font container p-4">
      {personalInfoContent.map((val, i) => (
        <span key={i} className="p-2">
          <span className="title">{val.meta}: </span>
          <span
            className={`value d-block d-sm-inline-block d-lg-block d-xl-inline-block ${val.hasColor}`}
          >
            {val.metaInfo}
          </span>
        </span>
      ))}
    </ul>
  );
};

export default contInfo;
