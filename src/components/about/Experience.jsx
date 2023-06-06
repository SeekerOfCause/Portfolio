import React from "react";

const experienceContent = [
  {
    year: "2023 - Present",
    position: "Software Engineer",
    compnayName: "Rise8",
    details: ``,
  },
  {
    year: "2020 - 2023",
    position: " UI/UX Designer",
    compnayName: "US Navy",
    details: `MH-60 Avionics Testing Lead. Schedule and perform prototype testing on not yet released equipement. Plan and schedule logistis for prototype equipment. Complie data for delivery upstream to stakeholders.`,
  },
  {
    year: "2014-2020",
    position: "Avionics Technician",
    compnayName: "US Navy",
    details: `Plan, schedule, perform, and track maintenance on MH-60 avionics equipment. Anticipate future needs of stakeholders to effectivly plan maintenance schedules to allow for consistent asset availablilty at all times.`,
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
