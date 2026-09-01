import React from "react";
import "./index.css";

const teamMembers = [
  {
    name: "Rahul Sharma",
    role: "Founder & Creative Director",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=500&q=80",
    description:
      "Leads the team with creative ideas and a strong vision for quality printing.",
  },
  {
    name: "Priya Verma",
    role: "Graphic Designer",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=500&q=80",
    description:
      "Creates attractive designs, branding materials and promotional artwork.",
  },
  {
    name: "Amit Kumar",
    role: "Printing Specialist",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=500&q=80",
    description:
      "Handles printing operations and ensures excellent print quality on every project.",
  },
  {
    name: "Neha Singh",
    role: "Customer Relationship Manager",
    image:
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=500&q=80",
    description:
      "Works closely with customers to understand requirements and deliver the best solutions.",
  },
];

const Team = () => {
  return (
    <main className="team-page">
      {/* ================= HERO ================= */}
      <section className="team-hero">
        <div className="hero-shape hero-shape-one"></div>
        <div className="hero-shape hero-shape-two"></div>

        <div className="team-container hero-content">
          <span className="team-badge">✦ OUR TEAM</span>

          <h1>
            Meet The People
            <span> Behind The Prints</span>
          </h1>

          <p>
            Our talented team combines creativity, technology and printing
            expertise to turn your ideas into high-quality prints.
          </p>
        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="team-section">
        <div className="team-container">
          <div className="section-heading">
            <span>OUR PROFESSIONALS</span>

            <h2>
              Creative Minds.
              <strong> Quality Prints.</strong>
            </h2>

            <p>
              Meet the passionate people who make every printing project
              successful.
            </p>
          </div>

          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="member-image">
                  <img src={member.image} alt={member.name} />

                  <div className="member-number">0{index + 1}</div>
                </div>

                <div className="member-content">
                  <h3>{member.name}</h3>

                  <span className="member-role">{member.role}</span>

                  <p>{member.description}</p>

                  <div className="member-line"></div>

                  <div className="member-social">
                    <a href="#facebook">f</a>
                    <a href="#instagram">◎</a>
                    <a href="#linkedin">in</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="team-cta">
        <div className="team-container">
          <div className="cta-content">
            <div>
              <span>LET'S CREATE SOMETHING GREAT</span>

              <h2>
                Have a Printing
                <strong> Project in Mind?</strong>
              </h2>

              <p>
                Our team is ready to bring your ideas to life with creative
                design and professional printing.
              </p>
            </div>

            <a href="/contact" className="cta-button">
              Contact Our Team
              <span>→</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Team;
