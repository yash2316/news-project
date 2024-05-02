import React from 'react';

const MissionCard = ({ title, imageUrl, altText, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body text-center">
        <div className="image">
          <img src={imageUrl} alt={altText} />
        </div>
        <div className="text-content">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

const MissionComponent = () => {
  return (
    <>
      <h1 className="mt-5 mb-4 text-center">OUR MISSION</h1>
      <div className="container">
        <MissionCard
          title="At RapidRecap, We Are Driven By a Singular Mission"
          imageUrl="https://www.jaggaer.com/app/uploads/2022/08/Mission-Vision-Statement-1302x640.jpg"
          altText="Mission"
          description="In a world inundated with information, we believe in simplifying the process of accessing and understanding news content, empowering our users with the knowledge they need to make informed decisions."
        />
        <MissionCard
          title="Empowering Knowledge Accessibility"
          imageUrl="https://unair.ac.id/wp-content/uploads/2019/09/knowledge-1.jpeg"
          altText="Knowledge Accessibility"
          description="We strive to break down the barriers to accessing quality news content by providing a user-friendly platform that offers quick and easy access to diverse news categories. Through our innovative use of technologies such as React.js and AI-based summarization algorithms, we aim to streamline the news consumption experience, enabling users to stay informed without feeling overwhelmed."
        />
        <MissionCard
          title="Promoting Clarity and Conciseness"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTV03vExriqq83ia-3egTwJmHHicxeuoMW5G6CPFF8fLg&s"
          altText="Clarity and Conciseness"
          description="In a landscape cluttered with lengthy articles and complex information, we are committed to delivering news summaries that are clear, concise, and informative. Our AI-based summarization techniques allow users to get the gist of an article in seconds, saving time and ensuring that they stay up-to-date with the latest developments."
        />
        <MissionCard
          title="Fostering Community Engagement"
          imageUrl="https://ideascale.com/wp-content/uploads/2020/05/crowdsourced-engagement-1.jpg"
          altText="Community Engagement"
          description="Beyond just delivering news content, we believe in fostering a sense of community and collaboration among our users. Through features such as user authentication, daily email subscriptions, and a feedback mechanism, we encourage active participation and dialogue, ensuring that our platform evolves to meet the needs of our diverse user base."
        />
        <MissionCard
          title="Adapting to Change"
          imageUrl="https://media.licdn.com/dms/image/D4D12AQGEWHwds7AOlA/article-cover_image-shrink_720_1280/0/1679505740553?e=2147483647&v=beta&t=RVwI9BSfDAqI21TYqJ6Kz38szpzoQqshh7YxzuYHyGA"
          altText="Adapting to Change"
          description="As the digital landscape continues to evolve, so do we. We are committed to staying at the forefront of innovation, continuously refining our platform to adapt to changing user preferences and technological advancements. Our mission is not just to provide a service but to lead the way in shaping the future of news consumption."
        />
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', bottom: 0, width: '100%', marginTop: '20px' }}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">RapidRecap.com</a>
      </div> 
    </>
  );
};

export default MissionComponent;
