import React, { useState } from 'react';
import { Download, ExternalLink, Mail, Phone, MapPin, Calendar, Award, Code, Briefcase, GraduationCap, Star } from 'lucide-react';

const Index = () => {
  const [activeTab, setActiveTab] = useState('about');

  const skills = [
    { name: 'Manual Testing', level: 95 },
    { name: 'Automation Testing', level: 90 },
    { name: 'Selenium', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'Python', level: 75 },
    { name: 'SQL', level: 85 },
    { name: 'API Testing', level: 90 },
    { name: 'Performance Testing', level: 80 },
  ];

  const experience = [
    {
      title: 'Senior QA Engineer',
      company: 'Tech Solutions Inc.',
      period: '2022 - Present',
      description: 'Leading QA team, implementing automated testing frameworks, and ensuring product quality.',
      achievements: ['Reduced bug rate by 40%', 'Implemented CI/CD pipeline', 'Mentored junior QA engineers']
    },
    {
      title: 'QA Engineer',
      company: 'Digital Innovations Ltd.',
      period: '2020 - 2022',
      description: 'Conducted comprehensive testing of web and mobile applications, created test plans and reports.',
      achievements: ['Improved test coverage by 60%', 'Identified critical security vulnerabilities', 'Streamlined testing processes']
    },
    {
      title: 'Junior QA Tester',
      company: 'StartupTech',
      period: '2019 - 2020',
      description: 'Performed manual and automated testing, reported bugs, and collaborated with development team.',
      achievements: ['Contributed to 95% on-time releases', 'Developed automated test scripts', 'Improved bug tracking system']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      institution: 'University of Dhaka',
      period: '2015 - 2019',
      grade: '3.8/4.0'
    },
    {
      degree: 'Higher Secondary Certificate',
      institution: 'Dhaka College',
      period: '2013 - 2015',
      grade: '4.5/5.0'
    }
  ];

  const projects = [
    {
      title: 'E-commerce Testing Framework',
      description: 'Comprehensive testing framework for e-commerce platforms with automated regression tests.',
      technologies: ['Selenium', 'JavaScript', 'Node.js', 'Jest'],
      link: '#'
    },
    {
      title: 'API Testing Suite',
      description: 'Automated API testing suite with comprehensive coverage and detailed reporting.',
      technologies: ['Postman', 'Newman', 'JavaScript'],
      link: '#'
    },
    {
      title: 'Performance Monitoring Tool',
      description: 'Real-time performance monitoring and alerting system for web applications.',
      technologies: ['Python', 'Flask', 'Grafana', 'Prometheus'],
      link: '#'
    }
  ];

  const certifications = [
    { name: 'ISTQB Certified Tester Foundation Level', issuer: 'ISTQB', year: '2021' },
    { name: 'Certified Scrum Master', issuer: 'Scrum Alliance', year: '2020' },
    { name: 'AWS Certified Cloud Practitioner', issuer: 'Amazon Web Services', year: '2022' },
    { name: 'Google Analytics Certified', issuer: 'Google', year: '2021' }
  ];

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'certifications', label: 'Certifications' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-black-soft to-black-mid">
      {/* Hero Section */}
      <section className="hero py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black mb-4 sm:mb-6 lg:mb-8 leading-tight">
            <span className="bg-gradient-to-r from-red-light via-white to-red-light bg-clip-text text-transparent">
              HASIBUL HASSAN
            </span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray mb-6 sm:mb-8 lg:mb-12 max-w-3xl mx-auto leading-relaxed">
            SQA Engineer & SEO Specialist
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-red px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />
              Download Resume
            </button>
            <button className="btn-red px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold w-full sm:w-auto">
              <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2 inline" />
              Contact Me
            </button>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 xl:grid-cols-4 gap-6 lg:gap-8 xl:gap-12">
          {/* Sidebar - Mobile: Top, Desktop: Left */}
          <aside className="order-2 xl:order-1 xl:col-span-1">
            <div className="glow-border sticky top-6">
              <div className="card p-4 sm:p-6 lg:p-8">
                <div className="text-center">
                  {/* Profile Image */}
                  <div className="mb-6">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full overflow-hidden border-4 border-red/30 shadow-lg">
                      <img
                        src="/Profile.png"
                        alt="Hasibul Hassan"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Name and Title */}
                  <div className="mb-6">
                    <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">Hasibul Hassan</h2>
                    <p className="text-red font-medium text-base sm:text-lg">SQA Engineer & SEO Specialist</p>
                  </div>

                  {/* Contact Info */}
                  <div className="space-y-3 text-sm mb-6">
                    <div className="flex items-center justify-center gap-3">
                      <Mail className="w-4 h-4 text-red flex-shrink-0" />
                      <span className="text-gray text-center">hasibulhassan546@gmail.com</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <Phone className="w-4 h-4 text-red flex-shrink-0" />
                      <span className="text-gray">+880 1788-123456</span>
                    </div>
                    <div className="flex items-center justify-center gap-3">
                      <MapPin className="w-4 h-4 text-red flex-shrink-0" />
                      <span className="text-gray">Dhaka, Bangladesh</span>
                    </div>
                  </div>

                  {/* Social Links */}
                  <div className="flex justify-center gap-4">
                    <a
                      href="https://github.com/hasibulhassan546"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red hover:text-red-light transition-colors duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                      </svg>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/hasibul-hassan-123456789/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-red hover:text-red-light transition-colors duration-300"
                    >
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <section className="order-1 xl:order-2 xl:col-span-3">
            <div className="glow-border">
              <div className="card min-h-[500px] sm:min-h-[600px]">
                {/* Tab Navigation */}
                <div className="border-b border-white/10 p-4 sm:p-6 lg:p-8">
                  <div className="flex flex-wrap gap-2 sm:gap-3 justify-center sm:justify-start">
                    {tabs.map((tab) => (
                      <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all duration-300 whitespace-nowrap ${
                          activeTab === tab.id
                            ? 'bg-red text-white shadow-lg'
                            : 'text-white hover:bg-white/5'
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="p-4 sm:p-6 lg:p-8">
                  {/* About Tab */}
                  {activeTab === 'about' && (
                    <div className="space-y-6 sm:space-y-8">
                      <div>
                        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">About Me</h2>
                        <p className="text-gray leading-relaxed text-base sm:text-lg max-w-none">
                          Passionate SQA Engineer with over 4 years of experience in software quality assurance and testing.
                          Specialized in manual and automated testing, with expertise in web and mobile applications.
                          Committed to delivering high-quality software through comprehensive testing strategies and continuous improvement.
                        </p>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                        <div className="space-y-4">
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">Key Strengths</h3>
                          <ul className="space-y-3 text-gray">
                            <li className="flex items-start gap-3">
                              <Code className="w-5 h-5 text-red mt-0.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base">Expertise in test automation frameworks</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Award className="w-5 h-5 text-red mt-0.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base">ISTQB Certified Tester</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <Briefcase className="w-5 h-5 text-red mt-0.5 flex-shrink-0" />
                              <span className="text-sm sm:text-base">Agile/Scrum methodology experience</span>
                            </li>
                          </ul>
                        </div>

                        <div className="space-y-4">
                          <h3 className="text-xl sm:text-2xl font-semibold text-white">Contact Information</h3>
                          <div className="space-y-3">
                            <div className="flex items-center gap-3">
                              <Mail className="w-5 h-5 text-red flex-shrink-0" />
                              <span className="text-gray text-sm sm:text-base">hasibulhassan546@gmail.com</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <Phone className="w-5 h-5 text-red flex-shrink-0" />
                              <span className="text-gray text-sm sm:text-base">+880 1788-123456</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <MapPin className="w-5 h-5 text-red flex-shrink-0" />
                              <span className="text-gray text-sm sm:text-base">Dhaka, Bangladesh</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Experience Tab */}
                  {activeTab === 'experience' && (
                    <div className="space-y-6 sm:space-y-8">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Work Experience</h2>
                      {experience.map((exp, index) => (
                        <div key={index} className="card">
                          <div className="p-4 sm:p-6">
                            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                              <div className="flex-1 mb-4 lg:mb-0">
                                <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-white mb-2">{exp.title}</h3>
                                <p className="text-red font-medium text-base sm:text-lg mb-3">{exp.company}</p>
                                <div className="flex items-center gap-2 text-sm text-gray">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{exp.description}</p>
                            <div className="space-y-3">
                              <h4 className="font-medium text-white text-base sm:text-lg">Key Achievements:</h4>
                              <ul className="space-y-2">
                                {exp.achievements.map((achievement, i) => (
                                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-gray">
                                    <Star className="w-3 h-3 text-red mt-1 flex-shrink-0" />
                                    <span>{achievement}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Education Tab */}
                  {activeTab === 'education' && (
                    <div className="space-y-6 sm:space-y-8">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Education</h2>
                      {education.map((edu, index) => (
                        <div key={index} className="card">
                          <div className="p-4 sm:p-6">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                              <div className="flex-1 mb-3 sm:mb-0">
                                <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">{edu.degree}</h3>
                                <p className="text-gray text-sm sm:text-base">{edu.institution}</p>
                              </div>
                              <div className="text-red font-semibold text-sm sm:text-base border border-red/30 px-3 py-1 rounded-lg">
                                {edu.grade}
                              </div>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray">
                              <Calendar className="w-4 h-4" />
                              <span>{edu.period}</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Projects Tab */}
                  {activeTab === 'projects' && (
                    <div className="space-y-6 sm:space-y-8">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Projects</h2>
                      <div className="features">
                        {projects.map((project, index) => (
                          <div key={index} className="feature">
                            <h3 className="text-lg sm:text-xl font-semibold text-white mb-3">{project.title}</h3>
                            <p className="text-gray mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">{project.description}</p>
                            <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                              {project.technologies.map((tech, i) => (
                                <span key={i} className="text-xs border border-red/30 text-red px-2 py-1 rounded">
                                  {tech}
                                </span>
                              ))}
                            </div>
                            <button className="btn-red w-full py-2 sm:py-3 text-sm sm:text-base">
                              <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 mr-2 inline" />
                              View Project
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Skills Tab */}
                  {activeTab === 'skills' && (
                    <div className="space-y-6 sm:space-y-8">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Skills & Expertise</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {skills.map((skill, index) => (
                          <div key={index} className="space-y-3">
                            <div className="flex justify-between items-center">
                              <span className="font-medium text-white text-sm sm:text-base">{skill.name}</span>
                              <span className="text-sm text-gray">{skill.level}%</span>
                            </div>
                            <div className="w-full bg-black-mid rounded-full h-2 sm:h-3">
                              <div
                                className="bg-red h-2 sm:h-3 rounded-full transition-all duration-1000 ease-out"
                                style={{ width: `${skill.level}%` }}
                              ></div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Certifications Tab */}
                  {activeTab === 'certifications' && (
                    <div className="space-y-6 sm:space-y-8">
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6 sm:mb-8">Certifications</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                        {certifications.map((cert, index) => (
                          <div key={index} className="card">
                            <div className="p-4 sm:p-6">
                              <div className="flex items-start gap-3 sm:gap-4">
                                <Award className="w-6 h-6 sm:w-8 sm:h-8 text-red mt-1 flex-shrink-0" />
                                <div className="flex-1 min-w-0">
                                  <h3 className="font-semibold text-white mb-1 text-sm sm:text-base leading-tight">{cert.name}</h3>
                                  <p className="text-red font-medium text-xs sm:text-sm mb-1">{cert.issuer}</p>
                                  <p className="text-gray text-xs sm:text-sm">{cert.year}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Index;
