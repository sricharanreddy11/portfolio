import React from 'react'

const Career = (props) => {
    return (
        <div className="flex-col flex-grow items-center text-center justify-center w-full h-full background">
          {/* <h1 className='text-2xl md:text-5xl font-bold p-6 mb-2'>Where I come from</h1> */}
          <div className='flex flex-col items-center md:flex-row pt-16'>
          <p className='mx-3 pb-5 md:mx-20 text-gray-60 px-6 pt-4'>
          I recently graduated with a Bachelor's in Engineering from Vasavi College Of Engineering. During my studies, I gained a strong foundation in Web Developement, Machine Learing and other technologies. I've also completed internship at Adjoint Technlogies, where I worked on backend developemet using Django Rest Framework.
          My academic and professional journey has equipped me with skills in problem solving, and I am eager to apply these in a Software Developer position within the Information Technology Industry.
            </p>
            <img className='h-52 w-52 md:mr-32 rounded-2xl' src="https://cdn-icons-png.freepik.com/512/4744/4744138.png" alt="ML LOGO" />
          </div>
          <Experience experience={props.experience}/>
          <Education education={props.education} />
          <Certifications certifications={props.certifications}/>
        </div>
      );
}

export default Career


const Education = ({ education }) => {
    return (
      <div className="relative overflow-x-auto p-16">
        <h2 className="heading">
            Educational Background
        </h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase inner-background">
            <tr>
              <th scope="col" className="px-6 py-3">
                Education
              </th>
              <th scope="col" className="px-6 py-3">
                College
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
              <th scope="col" className="px-6 py-3">
                CGPA/Marks
              </th>
            </tr>
          </thead>
          <tbody>
            {education.map((edu, index) => (
              <tr key={index} className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {edu.education}
                </th>
                <td className="px-6 py-4">{edu.college}</td>
                <td className="px-6 py-4">{edu.duration}</td>
                <td className="px-6 py-4">{edu.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };



  const Experience = ({experience}) => {
    return (
      <div className="relative overflow-x-auto p-16">
        <h2 className="heading">
            Proffesional Experience
        </h2>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
          <thead className="text-xs text-gray-700 uppercase inner-background">
            <tr>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Organisation
              </th>
              <th scope="col" className="px-6 py-3">
                Duration
              </th>
            </tr>
          </thead>
          <tbody>
            {experience.map((exp, index) => (
              <tr key={index} className="bg-white border-b ">
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {exp.role}
                </th>
                <td className="px-6 py-4">{exp.organisation}</td>
                <td className="px-6 py-4">{exp.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

const Certifications = ({certifications}) =>{
  return (
    <div className="relative overflow-x-auto p-16">
    <h2 className="heading">
      Certifications
    </h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase inner-background">
          <tr>
            <th scope="col" className="px-6 py-3">
              Course
            </th>
            <th scope="col" className="px-6 py-3">
              Provider
            </th>
            <th scope="col" className="px-6 py-3">
              Instructor
            </th>
            <th scope="col" className="px-6 py-3">
              Duration
            </th>
            <th scope="col" className="px-6 py-3">
              View
            </th>
          </tr>
        </thead>
        <tbody>
          {certifications.map((cer, index) => (
            <tr key={index} className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
              >
                {cer.course}
              </th>
              <td className="px-6 py-4">{cer.provider}</td>
              <td className="px-6 py-4">{cer.instructor}</td>
              <td className="px-6 py-4">{cer.duration}</td>
              <td className="px-6 py-4"> <a target='_blank' rel="noopener noreferrer" href={cer.link}>View</a></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
  