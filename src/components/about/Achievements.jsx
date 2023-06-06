import React from "react";

const achievementsContent = [
  { title: "9", subTitle1: "years", subTitle2: "experience" },
  { title: "GCP", subTitle1: "Cloud", subTitle2: "engineer" },
  { title: "$1M", subTitle1: "assets", subTitle2: "managed" },
  { title: "23", subTitle1: "systems", subTitle2: "managed" },
];

const Achievements = () => {
  return (
    <div className="row">
      {achievementsContent.map((val, i) => (
        <div className="col-6" key={i}>
          <div className="box-stats with-margin">
            <h3 className="poppins-font position-relative">{val.title}</h3>
            <p className="open-sans-font m-0 position-relative text-uppercase">
              {val.subTitle1} <span className="d-block">{val.subTitle2}</span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Achievements;
