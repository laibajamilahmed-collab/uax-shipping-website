import React from "react";
import "./TeamSection.css";

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Ali Khan",
      position: "Logistics Manager",
      image:
        "/public/assets/images/Team1.jpg",
    },
    {
      id: 2,
      name: "Ahmed Raza",
      position: "Operations Coordinator",
      image:
        "/public/assets/images/Team2.jpg",
    },
    {
      id: 3,
      name: "Ayesha Noor",
      position: "Business Development Executive",
      image:
        "/public/assets/images/Team3.jpg",
    },
    {
      id: 4,
      name: "Sara Malik",
      position: "Customer Support Manager",
      image:
        "/public/assets/images/Team4.jpg",
    },
  ];

  return (
    <section className="team-section">
      <div className="container">

        <div className="section-header">
          <h2>MEET OUR TEAM</h2>

          <p>
            Our dedicated team of professionals works together to deliver reliable, efficient, and customer-focused logistics solutions.
          </p>
        </div>

        <div className="row g-4 justify-content-center">

          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="col-lg-3 col-md-6 col-sm-6"
            >
              <div className="team-card">

                <div className="team-image">
                  <img
                    src={member.image}
                    alt={member.name}
                  />
                </div>

                <div className="team-content">
                  <h5>{member.name}</h5>
                  <span>{member.position}</span>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default TeamSection;