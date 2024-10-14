import React, { useState } from "react";
import "./Resume.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Button from "./Button";

const WorkExperience = [
  {
    id: 1,
    title: "Software Engineer",
    company: "FrontEnd",
    yearsActive: "CSS",
    information: [
      "Write modern, performant, maintainable code for a diverse array of internal projects",
      "Communicate with multi-disciplinary teams of engineers, team leads, and QA Engineers on a daily basis",
    ],
    img:"data:image/svg+xml;base64,PHN2ZyBmaWxsPSJ3aGl0ZSIgcm9sZT0iaW1nIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPkNTUzM8L3RpdGxlPjxwYXRoIGQ9Ik0xLjUgMGgyMWwtMS45MSAyMS41NjNMMTEuOTc3IDI0bC04LjU2NS0yLjQzOEwxLjUgMHptMTcuMDkgNC40MTNMNS40MSA0LjQxbC4yMTMgMi42MjIgMTAuMTI1LjAwMi0uMjU1IDIuNzE2aC02LjY0bC4yNCAyLjU3M2g2LjE4MmwtLjM2NiAzLjUyMy0yLjkxLjgwNC0yLjk1Ni0uODEtLjE4OC0yLjExaC0yLjYxbC4yOSAzLjg1NUwxMiAxOS4yODhsNS4zNzMtMS41M0wxOC41OSA0LjQxNHoiLz48L3N2Zz4=",
  },
  {
    id: 2,
    title: "Junior Software Developer",
    company: "BackENd",
    yearsActive: "May 2017 - December 2021",
    information: [
      "Improved and optimized the company's website for a seamless customer experience",
      "Created, communicated, and managed project plans & project timelines",
      "Worked to continually meet the expectation of our clients",
    ],
  },
  {
    id: 3,
    title: "Junior Software Developer",
    company: "Tools",
    yearsActive: "February 2016 - April 2017",
    information: [
      "Planned, developed, tested, deployed, and maintained web applications and mobile applications",
      "Worked well independently and on a team to solve problems."
    ],
  },
];

const Resume = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <section className="resume container section" id="resume">
      <h2 className="section__title">Experience</h2>

      <div className="resume__container">
        <Tabs
          className="tabs"
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          selectedTabClassName={"is-active"}
          selectedTabPanelClassName={"is-active"}
        >
          <TabList className="tab__list">
            {WorkExperience.map((experience, index) => {
              const { id, company } = experience;
              return (
                <Tab className="tab" key={`company-${id}`}>
                  <Button>{company}</Button>
                </Tab>
              );
            })}
          </TabList>

          {WorkExperience.map((experience) => {
            const { id, company, yearsActive,img, title, information } = experience;
            return (
              <TabPanel className="tab__panel" key={`panel-${id}`}>
                 <div class="css">
<span class="logo">
  <img src={img} alt="Logo"/>
</span>
<span class="html__text">{yearsActive}</span>
</div> 
                {/* <h2 className="tab__panel-title"> */}
                {/* <img src={img}  className="logo" /> */}
                 {/* {company} */}
                {/* </h2> */}
                {/* <p className="tab__panel-subtitle">{yearsActive}</p> */}
                {/* <ul className="tab__panel-list">
                  {information.map((info, index) => {
                    return <li key={`info-${index}`}>{info}</li>;
                  })}
                </ul> */}
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </section>
  );
};

export default Resume;



