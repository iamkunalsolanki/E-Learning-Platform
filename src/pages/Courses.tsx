import React from 'react';
import { Clock, Users, Star, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Course {
  id: number;
  title: string;
  instructor: string;
  description: string;
  duration: string;
  students: number;
  rating: number;
  image: string;
  price: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: "Web Development Fundamentals",
    instructor: "Dr. Sarah Johnson",
    description: "Learn the core concepts of HTML, CSS, and JavaScript to build modern websites from scratch.",
    duration: "12 weeks",
    students: 1234,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 99.99
  },
  {
    id: 2,
    title: "Data Science Essentials",
    instructor: "Prof. Michael Chen",
    description: "Master the fundamentals of data analysis, visualization, and machine learning.",
    duration: "16 weeks",
    students: 856,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 149.99
  },
  {
    id: 3,
    title: "Digital Marketing Strategy",
    instructor: "Emma Rodriguez",
    description: "Develop comprehensive digital marketing campaigns and learn SEO, social media, and content strategy.",
    duration: "8 weeks",
    students: 1567,
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 79.99
  },
  {
    id: 4,
    title: "Mobile App Development",
    instructor: "Alex Thompson",
    description: "Create iOS and Android applications using React Native and modern development practices.",
    duration: "14 weeks",
    students: 923,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1555774698-0b77e0d5fac6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 129.99
  },
  {
    id: 5,
    title: "Business Analytics",
    instructor: "Dr. James Wilson",
    description: "Learn to make data-driven business decisions using statistical analysis and visualization tools.",
    duration: "10 weeks",
    students: 745,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 89.99
  },
  {
    id: 6,
    title: "UX/UI Design Principles",
    instructor: "Lisa Anderson",
    description: "Master user experience design, wireframing, prototyping, and modern design tools.",
    duration: "12 weeks",
    students: 634,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    price: 109.99
  }
];

const Courses = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Our Courses</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of professional courses designed to help you advance your career
            and master new skills. Learn from industry experts at your own pace.
          </p>
        </div>

        {/* Course Categories */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {['Programming', 'Design', 'Business', 'Marketing'].map((category) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition">
              <h3 className="text-lg font-semibold mb-2">{category}</h3>
              <p className="text-gray-600">Explore {category.toLowerCase()} courses</p>
            </div>
          ))}
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <img 
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="flex items-center mb-4">
                  <img
                    src={`https://ui-avatars.com/api/?name=${encodeURIComponent(course.instructor)}&background=random`}
                    alt={course.instructor}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <span className="text-sm text-gray-600">{course.instructor}</span>
                </div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center text-sm text-gray-600">
                    <Clock className="w-4 h-4 mr-1" />
                    {course.duration}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    {course.students.toLocaleString()} students
                  </div>
                  <div className="flex items-center text-sm text-yellow-500">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    {course.rating}
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-indigo-600">${course.price}</span>
                  <Link
                    to={`/courses/${course.id}`}
                    className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
                  >
                    <BookOpen className="w-4 h-4 mr-2" />
                    Enroll Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;