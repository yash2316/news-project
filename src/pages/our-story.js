import React from 'react';

const StoryCard = ({ title, imageUrl, altText, description }) => {
  return (
    <div className="card">
      <div className="card-header">
        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-body text-center">
        <div className="image">
          <span>
            <img src={imageUrl} alt={altText} />
          </span>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};

const StoryComponent = () => {
  return (
    <>
      <h1 className="mt-5 mb-4 text-center">OUR STORY</h1>
      <div className="container">
        <StoryCard
          title="In an Era Inundated With an Incessant Stream of Information"
          imageUrl="https://newsnetwork.mayoclinic.org/n7-mcnn/7bcc9724adf7b803/uploads/2016/11/a-young-businessman-at-his-desk-looking-stressed-and-burned-out-with-computers-and-phones-16x9.jpg"
          altText="Stream of Information"
          description="Navigating the digital landscape of news media can often feel overwhelming. Amidst this deluge of news articles and updates, discerning the most pertinent information efficiently has become a formidable challenge. It is within this context that our website emerges as a beacon of clarity and conciseness. Harnessing the power of cutting-edge technologies such as React.js and AI-based summarization algorithms, our platform endeavors to revolutionize the news consumption experience. By offering users the ability to swiftly browse through diverse news categories and access succinct summaries of articles, we aim to empower individuals with the knowledge they need, when they need it."
        />
        <StoryCard
          title="Navigating The Digital Landscape of News Media"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1fZI5AskC9U8qWLf3_mdvkRAPHAkUNBviO1gDKmkedA&s"
          altText="The Digital Landscape of News Media"
          description="Navigating the digital landscape of news media can often feel overwhelming, with a myriad of platforms vying for attention. Our website seeks to differentiate itself by prioritizing simplicity, accessibility, and utility. Through an intuitive user interface and seamless integration of React.js components, users can effortlessly navigate through a curated selection of news articles spanning various topics. With just a click, users can delve deeper into articles of interest or opt for quick summaries, streamlining the process of information consumption in an increasingly fast-paced world."
        />
        <StoryCard
          title="Furthermore, Our Commitment to User Engagement"
          imageUrl="https://cdn.smartkarrot.com/wp-content/uploads/2020/03/User-Engagement.jpg"
          altText="User Engagement"
          description="Furthermore, our commitment to user engagement extends beyond mere content delivery. By incorporating features such as user authentication, daily email subscriptions, and a feedback mechanism, we foster a sense of community and responsiveness. Whether it's receiving personalized email digests of the day's top news stories or providing valuable feedback to enhance the platform, users are not merely passive consumers but active participants in shaping their news experience. With our website, we aspire to empower individuals with the tools and insights necessary to navigate the complexities of our interconnected world with clarity and confidence."
        />
      </div>

      <div className="text-center p-3" style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)', bottom: 0, width: '100%', marginTop: '20px' }}>
        © 2020 Copyright:
        <a className="text-white" href="https://mdbootstrap.com/">RapidRecap.com</a>
      </div>    
    </>
  );
};

export default StoryComponent;
