import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About'; 
import Projects from './Components/Projects';

function App() {
  const data = {
    "name" : "Sri Charan Reddy",
    "role": "Full Stack Web Developer",
    "description": "I am a backend developer with expertise in Django. I have experience in building scalable, secure and reliable web applications using various frameworks and technologies. I enjoy solving complex problems and learning new skills. I am passionate about creating high-quality code that follows best practices and industry standards. I am always looking for new challenges and opportunities to grow as a developer.",
    "github":"https://github.com/sricharanreddy11",
    "linkedin":"https://www.linkedin.com/in/sricharanreddy11/",
    "mail":"mailto:sricharanteegala@gmail.com",
    "twitter":"https://x.com/charanreddy_11",
  }

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
  return (
    <Router>
        <header className="bg-gray-100 sticky top-0 w-full h-16 flex justify-center items-center">
          <nav className="bg-white h-8 w-3/12 flex justify-evenly items-center px-3 shadow-md rounded-full hover:shadow-lg">
            <Link to="/" className="text-gray-900 font-sans text-pretty">Home</Link>
            <Link to="/about" className="text-gray-900 font-sans text-pretty">About</Link>
            <Link to="/projects" className="text-gray-900 font-sans text-pretty">Projects</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<Home data={data}/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/projects" element={<Projects projects={projects}/>} />
        </Routes>
    </Router>
  );
}

export default App;
