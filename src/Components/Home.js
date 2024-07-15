import React from 'react';

function Home(props) {
  return (
    <>
    <div className="background flex flex-col md:flex-row items-center justify-center w-full h-screen">
      <div className="text-start mx-5 md:ml-32 md:mr-20 p-5 md:p-0">
        <h1 className='text-5xl font-bold text-gray-800'>Hi!</h1>
        <h1 className='text-3xl md:text-5xl font-bold mt-2 text-gray-800'>I'm {props.data.name}</h1>
        <h1 className="text-2xl font-bold mt-2 text-slate-600">{props.data.role}</h1>
        <p className="text-gray-700 mt-4">
          {props.data.description}
        </p>
        <div className="flex justify-start space-x-4 mt-6">
          <a href={props.data.github} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="GitHub logo" />
          </a>
          <a href={props.data.linkedin} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="LinkedIn logo" />
          </a>
          <a href={props.data.mail} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=53435&format=png&color=000000" alt="Mail logo" />
          </a>
          <a href={props.data.twitter} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-blue-600">
            <img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000" alt="Twitter logo" />
          </a>
        </div>
      </div>
      <img className="w-52 h-52 hidden md:block md:static mt-8 md:mt-0 md:mr-32 rounded-2xl -rotate-6 shadow-lg border-white" src="https://i.pinimg.com/originals/8d/4c/40/8d4c404b1fc27606e8f37e8d01bd8f49.jpg" alt="Profile" />
    </div>
    <Skills skills={props.languages} heading="Languages I've worked with"/>
    <Skills skills={props.technologies} heading="Technlogies I've worked with"/>
    <Skills skills={props.databases} heading="Databases I've worked with"/>
    </>
  );
}
function Skills({ skills, heading }) {
  
  return (
    <div className="background text-start px-5 md:pl-32 md:pr-20 p-5 ">
    <h2 className="heading">
      {heading}
    </h2>
    <div className="flex flex-wrap items-center">
    {skills.map((skill, index) => (
          <div key={index} className="p-1">
            <button type="button">
            <span
                className="inner-background inline-flex text-primary py-1 px-3 items-center justify-between text-base capitalize border border-gray-400 rounded-full hover:bg-gray-100 mb-2 mr-2">
                <img
                    alt={skill.alt} src={skill.logo} decoding="async"
                    data-nimg="1" className="object-cover w-4 h-4 mr-1" loading="lazy"
                    width="16" height="16"/>
                <span className="capitalize lg:inline leading-5">{skill.alt}</span></span>
            </button>
          </div>
        ))}
    </div>
</div>
  );
}

export default Home;