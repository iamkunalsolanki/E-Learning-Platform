import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Future with Online Learning
          </h1>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl">
            Access world-class education from anywhere. Join thousands of students learning with EduLearn.
          </p>
          <Link 
            to="/courses"
            className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
          >
            Browse Courses
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose EduLearn?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Expert Instructors</h3>
              <p className="text-gray-600">Learn from industry professionals with years of experience.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Flexible Learning</h3>
              <p className="text-gray-600">Study at your own pace with 24/7 access to course materials.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-bold mb-4">Interactive Content</h3>
              <p className="text-gray-600">Engage with multimedia content and hands-on projects.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Courses Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12">Latest Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((course) => (
              <div key={course} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
                <img 
                  src={`https://images.unsplash.com/photo-${1600000000000 + course}?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                  alt={`Course ${course}`}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">Course Title {course}</h3>
                  <p className="text-gray-600 mb-4">Brief description of the course content and what students will learn.</p>
                  <Link 
                    to={`/courses/${course}`}
                    className="text-indigo-600 hover:text-indigo-800 font-medium"
                  >
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">10,000+</div>
              <div className="text-gray-600">Active Students</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">100+</div>
              <div className="text-gray-600">Expert Instructors</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">500+</div>
              <div className="text-gray-600">Online Courses</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-indigo-600 mb-2">95%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The courses here have transformed my career. The instructors are knowledgeable and supportive."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Sarah Johnson</div>
                  <div className="text-gray-500">Web Developer</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "Flexible learning schedule and high-quality content. Perfect for busy professionals."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Michael Chen</div>
                  <div className="text-gray-500">Data Analyst</div>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-600 mb-4">
                "The practical projects and hands-on experience have been invaluable for my learning."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Student"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold">Emma Rodriguez</div>
                  <div className="text-gray-500">UX Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-indigo-600">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Learning?</h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join thousands of students already learning on our platform.
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center px-8 py-3 bg-white text-indigo-600 rounded-lg hover:bg-indigo-50 transition"
          >
            Get Started
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;