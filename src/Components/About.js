import React from "react";
import { Link } from "react-router-dom";

const About = (props) => {
  return (
    <div className="flex-col flex-grow items-center text-center justify-center w-full h-full bg-gray-100">
      {/* <h1 className='text-2xl md:text-5xl font-bold p-6 mb-2'>Who Iam</h1> */}
      <div className='flex flex-col md:flex-row pt-16'>
      <p className='mx-3 md:mx-20 text-pretty text-base pt-8 px-6'>
      In addition to my academic and professional pursuits, I enjoy working in a team to build something useful, which help me stay creative and balanced. I am also involved in Street Cause Vasavi, Newton's Apple, where I have developed leadership and teamwork skills.
        </p>
        <img className='h-52 w-72 ml-8 md:mr-32 rounded-2xl' src="https://images.unsplash.com/photo-1503252947848-7338d3f92f31?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8OHx8Y29kaW5nfGVufDB8fHx8MTcxNjcwODY4OHww&ixlib=rb-4.0.3&q=85" alt="ME" />
        </div>
      <Organisations organisations={props.organisations}/>
      <Achievements achievements={props.achievements} />
    </div>
  );
};

export default About;

const Organisations = ({organisations}) => (

<div className="bg-gray-100 mt-96 md:mt-0 flex flex-col gap-4 h-screen items-center justify-center">
  <h2 className="items-center text-lg font-bold md:flex-col md:gap-2 mb-5">
          Organisations
  </h2>
  {organisations.map((value,index) => (
                <Link key={index} className="rounded-sm w-3/4 md:w-1/2 grid grid-cols-12 bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" to="/">
                    <div className="col-span-12 md:col-span-1">
                  <img src={value.logo} alt="Logo" />
                </div>
                  <div className="col-span-11 xl:-ml-5">
                  <p className="text-gray-700 font-semibold"> {value.name} </p>
                </div>
                <div className="md:col-start-2 col-span-11 xl:-ml-5">
                  <p className="text-sm text-gray-800 font-light"> {value.description}</p>
                </div>
                
              </Link>
       
              ))}
</div>
)





const Achievements = ({achievements}) => {
  return (
    <div className="bg-gray-100 mt-28 md:mt-0 flex flex-col gap-4 h-screen items-center justify-center">
      <h2 className="items-center text-lg font-bold md:flex-col md:gap-2 mb-5">
          Achivements
        </h2>
      {achievements.map((value,index) => (
                    <Link key={index} className="rounded-sm w-3/4 grid grid-cols-none bg-white shadow p-3 gap-2 items-center hover:shadow-lg transition delay-150 duration-300 ease-in-out hover:scale-105 transform" to="/">
                      <div className="col-span-11 xl:-ml-5">
                        <p className="text-gray-700 text-sm font-normal"> {value} </p>
                      </div>
                    </Link>
       
              ))}
    </div>
  )
}

