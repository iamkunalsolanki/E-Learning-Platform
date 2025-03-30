import React from 'react';
import { BookOpen, FileText, Video, Download, ExternalLink } from 'lucide-react';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: 'guide' | 'template' | 'video' | 'tool';
  icon: React.ReactNode;
  link: string;
}

const resources: Resource[] = [
  {
    id: 1,
    title: "Student Success Guide",
    description: "A comprehensive guide to help you make the most of your online learning experience.",
    type: "guide",
    icon: <BookOpen className="w-6 h-6" />,
    link: "#"
  },
  {
    id: 2,
    title: "Study Schedule Template",
    description: "Customizable weekly schedule template to organize your study time effectively.",
    type: "template",
    icon: <FileText className="w-6 h-6" />,
    link: "#"
  },
  {
    id: 3,
    title: "Video Tutorial Library",
    description: "Access our collection of supplementary video tutorials on various topics.",
    type: "video",
    icon: <Video className="w-6 h-6" />,
    link: "#"
  }
];

const tools = [
  {
    name: "Code Editor",
    description: "Online code editor for practicing programming exercises",
    link: "https://codesandbox.io"
  },
  {
    name: "Design Tools",
    description: "Free design tools for UI/UX projects",
    link: "https://figma.com"
  },
  {
    name: "Data Analysis Tools",
    description: "Web-based tools for data visualization",
    link: "https://jupyter.org"
  }
];

const Resources = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Student Resources</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Access our comprehensive collection of learning resources designed to support your
            educational journey and help you succeed in your courses.
          </p>
        </div>

        {/* Quick Links */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {['Study Guides', 'Templates', 'Video Tutorials', 'Tools'].map((category) => (
            <div key={category} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition cursor-pointer">
              <h3 className="text-lg font-semibold mb-2">{category}</h3>
              <p className="text-gray-600">Access {category.toLowerCase()}</p>
            </div>
          ))}
        </div>

        {/* Learning Resources */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold mb-8">Learning Resources</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {resources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <div className="text-indigo-600 mb-4">
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold mb-2">{resource.title}</h3>
                <p className="text-gray-600 mb-4">{resource.description}</p>
                <a
                  href={resource.link}
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Download Resource
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Online Tools */}
        <div>
          <h2 className="text-2xl font-bold mb-8">Recommended Online Tools</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {tools.map((tool) => (
              <div key={tool.name} className="bg-white rounded-lg shadow-md p-6 hover:shadow-xl transition">
                <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
                <p className="text-gray-600 mb-4">{tool.description}</p>
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-indigo-600 hover:text-indigo-700"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Access Tool
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Study Tips */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6">Study Tips</h2>
          <ul className="list-disc list-inside space-y-4 text-gray-600">
            <li>Create a dedicated study space free from distractions</li>
            <li>Set specific, achievable goals for each study session</li>
            <li>Use the Pomodoro Technique: 25 minutes of study followed by a 5-minute break</li>
            <li>Take active notes and summarize key concepts in your own words</li>
            <li>Practice regular self-assessment through quizzes and exercises</li>
            <li>Join study groups or discussion forums to learn from peers</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Resources;