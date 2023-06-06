import React from "react";

const educationContent = [
  {
    year: "2025 (PROJECTED)",
    degree: "M.S. COMPUTER SCIENCE",
    institute: "UNIVERSITY OF NORTH FLORIDA",
    details: `Data analytics, machine learning, data mining, ux design, data visualization, software engineering, networking, cloud computing, computer architecture.`,
  },
  {
    year: "2023",
    degree: "UNDERGRADUATE CERTIFICATE - COMPUTER SCIENCE",
    institute: "COLORADO STATE UNIVERSITY - GC",
    details: `Select and apply software engineering topics and concepts to solve business problems; Develop conceptual models for accessing and updating stored information; Design, implement, and analyze algorithms using Java; Write software programs that securely manage resources across different operating systems; Compare and contrast platform-based development environments, Analyze programming language requirements for multiple platforms`,
  },
  {
    year: "2022",
    degree: "BACHELOR DEGREE - APPLIED MATHEMATICS",
    institute: "SOUTHERN NEW HAMPSHIRE UNIVERSITY",
    details: `Calculus (differential and integral), linear algebra, differential equations, probability theory, mathematical modeling, numerical methods, optimization, mathematical statistics, mathematical finance, computational mathematics, mathematical analysis of algorithms, and interdisciplinary coursework in computer science and engineering. `,
  },
];

const Education = () => {
  return (
    <ul>
      {educationContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.degree}
            <span className="place open-sans-font">{val.institute}</span>
          </h5>
          <p className="open-sans-font">{val.details}</p>
        </li>
      ))}
    </ul>
  );
};

export default Education;
