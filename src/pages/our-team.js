import React from 'react';

const TeamMember = ({ name, imageUrl, altText, rollNo }) => {
  return (
    <div className="col-md-6 col-lg-3">
      <div className="card testimonial-card mt-2 mb-3">
        <div className="card-up aqua-gradient"></div>
        <div className="avatar mx-auto white">
          <img src={imageUrl} className="rounded-circle img-fluid" alt={altText} />
        </div>
        <div className="card-body text-center">
          <h4 className="card-title font-weight-bold">{name}</h4>
          <hr />
          <p><i className="fas fa-quote-left"></i> Roll No.: {rollNo}<br /> MCA PART-1</p>
        </div>
      </div>
    </div>
  );
};

const TeamComponent = () => {
  const teamMembers = [
    { name: "Ruchika Chaudhari", imageUrl: "https://i.pinimg.com/564x/a9/75/93/a975934bb378afc4ca8c133df451f56e.jpg", altText: "Ruchika Chaudhari avatar", rollNo: "2307" },
    { name: "Yash Gaude", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png", altText: "Yash Gaude avatar", rollNo: "2316" },
    { name: "Samuel Lucas", imageUrl: "https://cdn.iconscout.com/icon/free/png-256/free-avatar-370-456322.png", altText: "Samuel Lucas avatar", rollNo: "2324" },
    { name: "Shannon Sequeira", imageUrl: "https://i.pinimg.com/564x/a9/75/93/a975934bb378afc4ca8c133df451f56e.jpg", altText: "Shannon Sequeira avatar", rollNo: "2340" }
  ];

  return (
    <>
      <div className="container">
        <h1 className="mt-5 mb-4 text-center">OUR TEAM</h1>
        <p className="text-center">"Meet the talented individuals who drive our team's success and bring our vision to life."</p>
        <div className="row">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} name={member.name} imageUrl={member.imageUrl} altText={member.altText} rollNo={member.rollNo} />
          ))}
        </div>
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', bottom: 0, width: '100%', marginTop: '20px' }}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">RapidRecap.com</a>
      </div>
    </>
  );
};

export default TeamComponent;
