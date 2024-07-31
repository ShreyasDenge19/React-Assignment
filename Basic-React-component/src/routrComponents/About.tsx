import React from "react";

const About: React.FC = () => {
  return (
    <>
      <div className="m-7 h-screen">
        <h1 className="font-semibold text-lg ">About us </h1>
        <p className="bg-slate-700 text-white p-3 m-3">
        The About Us page of your website is an essential source of information for anyone who wants to know more about your business.
        It is where you showcase your history, the unique value of your work, your mission and vision, and the audiences you serve.
          </p>

        <h3 className="font-semibold text-lg ">Our Mission</h3>
        <p className="bg-slate-700 text-white p-3 m-3">
        Together, the design, written content, and visual elements of an About Us page tell an important story about who you are and what matters to you.
        How can you make the most of this integral part of your marketing strategy?
        </p>
        <h3 className="font-semibold text-lg ">Our Team</h3>
        <p className="bg-slate-700 text-white p-3 m-3">
        There is rarely a need to outright say, “Our vision/mission is ____,” but you ought to convey the purpose of your business in your About Us copy.
        Talk about why your brand exists, what makes you different, and the challenges you solve – beyond the obvious solution you sell.
        This is key for attracting talent, as well as prospective buyers who align with your objectives and value goals.
        </p>
      </div>
    </>
  );
};

export default About;