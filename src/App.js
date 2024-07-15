import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About'; 
import Projects from './Components/Projects';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Career from './Components/Career';

function App() {

  const data = {
    "name" : "Sri Charan Reddy",
    "role": "Full Stack Web Developer",
    "description": "I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
    "github":"https://github.com/sricharanreddy11",
    "linkedin":"https://www.linkedin.com/in/sricharanreddy11/",
    "mail":"mailto:sricharanteegala@gmail.com",
    "twitter":"https://x.com/charanreddy_11",
  }

  const languages = [
    {
      "logo": "https://img.icons8.com/?size=100&id=13441&format=png&color=000000",
      "alt": "python"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=108784&format=png&color=000000",
      "alt": "javascript"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=40669&format=png&color=000000",
      "alt": "C++"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=20909&format=png&color=000000",
      "alt": "HTML"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
      "alt": "CSS"
    },
  ]

  const technologies = [
    {
      "logo": "https://img.icons8.com/?size=100&id=IuuVVwsdTi2v&format=png&color=000000",
      "alt": "Django"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=TtXEs5SeYLG8&format=png&color=000000",
      "alt": "Flask"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=NfbyHexzVEDk&format=png&color=000000",
      "alt": "React JS"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=PndQWK6M1Hjo&format=png&color=000000",
      "alt": "Bootstrap"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000",
      "alt": "Tailwind CSS"
    },
    {
      "logo": "https://storage.caktusgroup.com/media/blog-images/drf-logo2.png",
      "alt": "Django REST Framework"
    },
  ]

  const databases = [
    {
      "logo": "https://img.icons8.com/?size=100&id=UFXRpPFebwa2&format=png&color=000000",
      "alt": "MySQL"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=LwQEs9KnDgIo&format=png&color=000000",
      "alt": "PostgreSQL"
    },
    {
      "logo": "https://img.icons8.com/?size=100&id=bosfpvRzNOG8&format=png&color=000000",
      "alt": "MongoDB"
    },
  ]

  const projects = [
    {
      "name": "Share and Sustain",
      "description": "Food Waste Management Website using Django and Bootstrap",
      "link": "https://github.com/sricharanreddy11/food-waste-management",
      "logo": "https://img.icons8.com/?size=100&id=37o3DqV429ra&format=png&color=000000"
    },
    {
      "name": "Abandoned Object Detection",
      "description": "Implemented a smart video surviallance system to detect abandoned object.",
      "link": "https://github.com/sricharanreddy11/abandoned-object-detection",
      "logo": "https://img.icons8.com/?size=100&id=12592&format=png&color=000000"
    },
    {
      "name": "inConnector",
      "description": "Chrome Extension to use for jon networking and searches",
      "link": "https://github.com/sricharanreddy11/inConnector",
      "logo": "https://img.icons8.com/?size=100&id=39854&format=png&color=000000"
    },
    
  ]
    const education = [
      {
        "education": "Bachelor of Engineering",
        "college": "Vasavi College Of Engineering",
        "duration": "2020 - 2024",
        "marks": "9.3 / 10",
      },
      {
        "education": "Intermediate",
        "college": "Narayana Junior College",
        "duration": "2018 - 2020",
        "marks": "990 / 1000",
      },

    ]

  const achievements = [
    "Awarded an Honours Degree in System on Chip Design (2024), recognizing my expertise and dedication to advanced hardware and software integration.",
    "Received Highest GPA Merit Award for 2 consecutive academic years(2020-21 & 2021-22), reflecting unwavering commitment to academic excellence and high performance.",
    "Achieved Second Rank in Intermediate Public Examinations (2020), demonstrating academic excellence and a strong foundation in core subjects.",
  ]

  const experience = [
    {
      "role": "Software Developer Intern",
      "organisation": "Adjoint Technologies",
      "duration": "Jan 2024 - May 2024",
    }
  ]

  const organisations = [
    {
      "name": "Street Cause Vasavi",
      "logo": "https://hya.streetcause.org/images/sc_files/logo.png",
      "description": "Served as Logistics Head of the organization that aims is to give a new lease of life to street children, elderly people and incapacitated beggars by admitting them into orphanages and old age homes and also by teaching those means to earn their living.",
      "link": "https://www.streetcause.org/",
    },
    {
      "name": "Newton's Apple",
      "logo": "https://media.licdn.com/dms/image/D4E0BAQHCgeuuC1TUmA/company-logo_200_200/0/1665588131390?e=2147483647&v=beta&t=wr7Ar0z-bVD3pIRiZfMZDDUIprDyEZ1P1NH3N9JUBDE",
      "description": "Worked as Content Developer at Newton's Apple, monthly magazine run by students of E.C.E. at Vasavi College of Engineering",
      "link": "https://vce-newtonsapple.github.io/magazine/",
    },
    {
      "name": "ECE ACUMEN",
      "logo": "https://acumenece.netlify.app/logo_acumen.png",
      "description": "Led the Technical Department at Acumen, an annual national symposium on technology that brings together the budding engineers onto a common platform",
      "link": "https://acumenece.netlify.app/",
    },
  ]

  const certifications = [
    {
      "course": "Python API with the Django REST Framework",
      "instructor": "Justin Mitchell",
      "provider": "Udemy",
      "duration": "12 hours",
      "link": "https://drive.google.com/file/d/1L9-ZcUuXNYCVvN5vUjLoSgDsxNpUSbV6/view"
    },
    {
      "course": "Python and Django Full Stack Web Developer Bootcamp",
      "instructor": "Jose Portilla",
      "provider": "Udemy",
      "duration": "32 hours",
      "link": "https://drive.google.com/file/d/1L9-ZcUuXNYCVvN5vUjLoSgDsxNpUSbV6/view"
    },
    {
      "course": "Responsive Web Design",
      "instructor": "Chris Cooper",
      "provider": "FreeCodeCamp",
      "duration": "20 hours",
      "link": "https://www.freecodecamp.org/certification/charan11/responsive-web-design"
    },
    {
      "course": "The Joy Of Computing using Python",
      "instructor": " Prof. Sudarshan Iyengar",
      "provider": "NPTEL",
      "duration": "12 weeks",
      "link": "https://onlinecourses.nptel.ac.in/noc24_cs57/preview"
    },
    {
      "course": "Computer Networks and Internet Protocol",
      "instructor": "Prof. Soumya Kanti Ghosh",
      "provider": "NPTEL",
      "duration": "12 weeks",
      "link": "https://onlinecourses.nptel.ac.in/noc24_cs57/preview"
    },
    {
      "course": "Digital System Design",
      "instructor": "Prof. Neeraj Goel",
      "provider": "NPTEL",
      "duration": "12 weeks",
      "link": "https://onlinecourses.nptel.ac.in/noc24_cs57/preview"
    },
  ]
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home data={data} languages={languages} technologies={technologies} databases={databases}/>} />
            <Route path="/about" element={<About achievements={achievements} organisations = {organisations} />} />
            <Route path="/career" element={<Career experience={experience} education={education} certifications={certifications}/>} />
            <Route path="/projects" element={<Projects projects={projects} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
