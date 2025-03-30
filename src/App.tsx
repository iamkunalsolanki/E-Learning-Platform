import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Users, FileText, Mail } from 'lucide-react';
import Home from './pages/Home';
import Courses from './pages/Courses';
import Instructors from './pages/Instructors';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-indigo-600 text-white shadow-lg">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between h-16">
              <Link to="/" className="flex items-center space-x-2">
                <GraduationCap className="h-8 w-8" />
                <span className="font-bold text-xl">EduLearn</span>
              </Link>
              <div className="hidden md:flex space-x-8">
                <Link to="/" className="flex items-center space-x-1 hover:text-indigo-200 transition">
                  <BookOpen className="h-5 w-5" />
                  <span>Home</span>
                </Link>
                <Link to="/courses" className="flex items-center space-x-1 hover:text-indigo-200 transition">
                  <BookOpen className="h-5 w-5" />
                  <span>Courses</span>
                </Link>
                <Link to="/instructors" className="flex items-center space-x-1 hover:text-indigo-200 transition">
                  <Users className="h-5 w-5" />
                  <span>Instructors</span>
                </Link>
                <Link to="/resources" className="flex items-center space-x-1 hover:text-indigo-200 transition">
                  <FileText className="h-5 w-5" />
                  <span>Resources</span>
                </Link>
                <Link to="/contact" className="flex items-center space-x-1 hover:text-indigo-200 transition">
                  <Mail className="h-5 w-5" />
                  <span>Contact</span>
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/instructors" element={<Instructors />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-gray-800 text-white py-8">
          <div className="max-w-7xl mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-4">EduLearn</h3>
                <p className="text-gray-300">Empowering minds through quality education</p>
                <p className="mt-2 text-gray-300">&copy; 2024 EduLearn. All rights reserved.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
                  <li><Link to="/courses" className="text-gray-300 hover:text-white">Courses</Link></li>
                  <li><Link to="/instructors" className="text-gray-300 hover:text-white">Instructors</Link></li>
                  <li><Link to="/resources" className="text-gray-300 hover:text-white">Resources</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                <p className="text-gray-300">Email: info@edulearn.com</p>
                <p className="text-gray-300">Phone: +1 (555) 123-4567</p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;