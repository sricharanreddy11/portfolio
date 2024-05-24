import React from 'react'

const Projects = (props) => {
  return (
    <div className="flex flex-wrap items-center justify-center w-full h-screen bg-gray-100">
        <h1 className='text-5xl font-bold mt-2'>What I've Made</h1>
        <p className='mx-20 text-pretty text-base px-6'>
          Each project represents a unique challenge that I tackled by leveraging strong analytical skills, implementing innovative solutions. I'm passionate about Web developement and Machine Learning, and this passion is reflected in the dedication and creativity I bring to every project I undertake.
        </p>
        {
        props.projects.map((project, index) => (
          <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4">
            <img className="w-10 h-10 mx-6" src={project.logo} alt="django logo"/>
            <div className="px-6 py-4">
              <div className="font-bold text-l mb-2">{project.name}</div>
              <p className="text-gray-700 font-light">
                {project.description}
              </p>
            </div>
            <div className="px-6 pt-4 pb-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">
                View the project here
              </a>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Projects
