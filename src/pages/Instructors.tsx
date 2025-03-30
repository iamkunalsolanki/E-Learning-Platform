import React from 'react';
import { Mail, Globe, Linkedin, Twitter } from 'lucide-react';

interface Instructor {
  id: number;
  name: string;
  title: string;
  specialization: string;
  bio: string;
  image: string;
  courses: number;
  students: number;
  rating: number;
  social: {
    email: string;
    website?: string;
    linkedin?: string;
    twitter?: string;
  };
}

const instructors: Instructor[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Senior Web Development Instructor",
    specialization: "Full-Stack Development",
    bio: "Dr. Johnson has over 15 years of experience in web development and has taught at leading universities. She specializes in modern JavaScript frameworks and cloud technologies.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: 12,
    students: 3500,
    rating: 4.8,
    social: {
      email: "sarah.johnson@edulearn.com",
      website: "https://sarahjohnson.dev",
      linkedin: "sarahjohnson",
      twitter: "@sarahjdev"
    }
  },
  {
    id: 2,
    name: "Prof. Michael Chen",
    title: "Lead Data Science Instructor",
    specialization: "Machine Learning & AI",
    bio: "Prof. Chen is a renowned expert in machine learning and artificial intelligence, with numerous publications in top academic journals. He brings practical industry experience to his teaching.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: 8,
    students: 2800,
    rating: 4.9,
    social: {
      email: "michael.chen@edulearn.com",
      linkedin: "michaelchen",
      twitter: "@mchenai"
    }
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    title: "Digital Marketing Strategist",
    specialization: "Content Marketing & SEO",
    bio: "Emma is a digital marketing veteran with experience working with Fortune 500 companies. She focuses on practical, results-driven marketing strategies.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: 6,
    students: 4200,
    rating: 4.7,
    social: {
      email: "emma.rodriguez@edulearn.com",
      website: "https://emmarketing.com",
      linkedin: "emmarodriguez",
      twitter: "@emmarkt"
    }
  },
  {
    id: 4,
    name: "Alex Thompson",
    title: "Mobile Development Expert",
    specialization: "iOS & Android Development",
    bio: "Alex has developed multiple successful mobile applications and brings real-world app development experience to his courses. He specializes in cross-platform development.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: 10,
    students: 3100,
    rating: 4.8,
    social: {
      email: "alex.thompson@edulearn.com",
      linkedin: "alexthompson",
      twitter: "@alexmobile"
    }
  },
  {
    id: 5,
    name: "Dr. James Wilson",
    title: "Business Analytics Professor",
    specialization: "Data Analytics & Business Intelligence",
    bio: "Dr. Wilson combines academic expertise with consulting experience, helping students understand how to apply analytics in real business scenarios.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: 7,
    students: 2600,
    rating: 4.9,
    social: {
      email: "james.wilson@edulearn.com",
      website: "https://drwilsonanalytics.com",
      linkedin: "jameswilsonphd"
    }
  },
  {
    id: 6,
    name: "Lisa Anderson",
    title: "UX/UI Design Lead",
    specialization: "User Experience & Interface Design",
    bio: "Lisa has designed interfaces for leading tech companies and startups. She teaches modern design principles and practical UX methodologies.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    courses: 9,
    students: 3800,
    rating: 4.7,
    social: {
      email: "lisa.anderson@edulearn.com",
      website: "https://lisadesigns.co",
      linkedin: "lisaanderson",
      twitter: "@lisauxdesign"
    }
  }
];

const Instructors = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Meet Our Expert Instructors</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Learn from industry professionals with years of experience. Our instructors are passionate
            about sharing their knowledge and helping you succeed in your career.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <div key={instructor.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative">
                <img 
                  src={instructor.image}
                  alt={instructor.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4">
                  <h3 className="text-xl font-bold text-white">{instructor.name}</h3>
                  <p className="text-gray-200">{instructor.title}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">Specialization</h4>
                  <p className="text-gray-600">{instructor.specialization}</p>
                </div>
                <div className="mb-4">
                  <h4 className="font-semibold text-indigo-600 mb-2">About</h4>
                  <p className="text-gray-600">{instructor.bio}</p>
                </div>
                <div className="grid grid-cols-3 gap-4 mb-6 text-center">
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">{instructor.courses}</div>
                    <div className="text-sm text-gray-600">Courses</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">{instructor.students.toLocaleString()}</div>
                    <div className="text-sm text-gray-600">Students</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-indigo-600">{instructor.rating}</div>
                    <div className="text-sm text-gray-600">Rating</div>
                  </div>
                </div>
                <div className="flex justify-center space-x-4">
                  <a href={`mailto:${instructor.social.email}`} className="text-gray-600 hover:text-indigo-600">
                    <Mail className="w-5 h-5" />
                  </a>
                  {instructor.social.website && (
                    <a href={instructor.social.website} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                      <Globe className="w-5 h-5" />
                    </a>
                  )}
                  {instructor.social.linkedin && (
                    <a href={`https://linkedin.com/in/${instructor.social.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                      <Linkedin className="w-5 h-5" />
                    </a>
                  )}
                  {instructor.social.twitter && (
                    <a href={`https://twitter.com/${instructor.social.twitter}`} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-indigo-600">
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;