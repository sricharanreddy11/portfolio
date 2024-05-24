import React from 'react'

const About = (props) => {
  return (
    <div className="flex flex-row items-center justify-center w-full h-screen bg-gray-100">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
            {
            props.education.map((edu, index) => (
              <tr key={index} className="bg-white border-b dark:bg-gray-800 ">
                  <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap ">
                      {edu.education}
                  </th>
                  <td className="px-6 py-4">
                      {edu.college}
                  </td>
                  <td className="px-6 py-4">
                      {edu.duration}
                  </td>
                  <td className="px-6 py-4">
                      {edu.marks}
                  </td>
              </tr>
            )
            )
            }
            </tbody>
        </table>
    </div>
  </div>
  )
}

export default About
