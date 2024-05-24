import React from 'react'

function Home(props) {
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen bg-gray-100">
      <div className="text-start ml-32 mr-20">
        <h1 className='text-5xl font-bold'>Hi! </h1>
        <h1 className='text-5xl font-bold mt-2'>I'm {props.data.name}</h1>
        <h1 className="text-2xl font-bold mt-2">{props.data.role}</h1>
        <p className="text-gray-600 mt-4">
          {props.data.description}
        </p>
        <div className="flex justify-start space-x-4 mt-6">
          <a href={props.data.github} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900"><img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=3tC9EQumUAuq&format=png&color=000000" alt="github logo"/></a>
          <a href={props.data.linkedin} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900"><img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=8808&format=png&color=000000" alt="linkedin logo"/></a>
          <a href={props.data.mail} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900"><img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=53435&format=png&color=000000" alt="mail logo"/></a>
          <a href={props.data.twitter} target="_blank" rel="noreferrer" className="text-gray-600 hover:text-gray-900"><img className="w-10 h-10" src="https://img.icons8.com/?size=100&id=8824&format=png&color=000000" alt="twitter logo"/></a>
        </div>
      </div>
      <img className="w-52 h-52 mr-32 rounded-2xl -rotate-6" src="https://i.pinimg.com/originals/8d/4c/40/8d4c404b1fc27606e8f37e8d01bd8f49.jpg" alt="instagram logo"/>
    </div>
  );
}

export default Home;