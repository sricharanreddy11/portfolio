import React from 'react'

const Projects = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full md:h-screen background">
      <p className='mx-3 md:mx-20 text-gray-700 text-base px-6 text-center mb-10'>
        Each project represents a unique challenge that I tackled by leveraging strong analytical skills, implementing innovative solutions. I'm passionate about Web development and Machine Learning, and this passion is reflected in the dedication and creativity I bring to every project I undertake.
      </p>
      <h2 className="heading">
      Projects I've worked on
    </h2>
      <div className="flex flex-wrap justify-center">
      {
        props.projects.map((project, index) => (
          <div key={index} className="max-w-xs rounded overflow-hidden shadow-lg m-4 pt-4 inner-background">
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
    </div>
  )
}

export default Projects
