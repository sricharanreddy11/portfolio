import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full background py-16">
      <div className='flex flex-col md:flex-row items-center justify-center'>
        <p className='mx-3 md:mx-20 text-gray-700 text-base pt-8 px-6 text-center'>
          In addition to my academic and professional pursuits, I enjoy working in a team to build something useful, which helps me stay creative and balanced. I am also involved in Street Cause Vasavi, Newton's Apple, where I have developed leadership and teamwork skills.
        </p>
        <img className='h-52 w-72 ml-8 md:mr-32 rounded-2xl shadow-lg' src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fHx8MTcxNjcwODY4OHww&ixlib=rb-4.0.3&q=85" alt="ME" />
      </div>
      <Organisations organisations={props.organisations} />
      <Achievements achievements={props.achievements} />
    </div>
  );
};

export default About;

const Organisations = ({ organisations }) => (
  <div className="background mt-16 md:mt-24 flex flex-col gap-4 items-center justify-center py-16">
    <h2 className="heading">
      Organisations
    </h2>
    {organisations.map((value, index) => (
      <Link key={index} target="_blank" className="rounded-lg w-3/4 md:w-1/2 inner-background shadow-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:scale-105" to={value.link}>
        <div className="flex items-center">
          <img src={value.logo} alt="Logo" className="h-12 w-12 mr-4" />
          <div>
            <p className="text-lg font-semibold text-gray-900"> {value.name} </p>
            <p className="text-sm text-gray-700"> {value.description} </p>
          </div>
        </div>
      </Link>
    ))}
  </div>
);

const Achievements = ({ achievements }) => {
  return (
    <div className="background mt-16 md:mt-24 flex flex-col gap-4 items-center justify-center py-16">
      <h2 className="heading">
        Achievements
      </h2>
      {achievements.map((value, index) => (
        <div key={index} className="rounded-lg w-3/4 md:w-1/2 inner-background shadow-lg p-6 hover:shadow-xl transition-transform duration-300 transform hover:scale-105">
          <p className="text-gray-700 text-base font-normal"> {value} </p>
        </div>
      ))}
    </div>
  );
};
