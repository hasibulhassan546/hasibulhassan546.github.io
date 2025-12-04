import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  TestTube, 
  Search, 
  Sparkles,
  Briefcase, 
  GraduationCap, 
  Award,
  Calendar,
  MapPin,
  Mail,
  Phone,
  Download,
  Facebook,
  Instagram,
  Linkedin,
  MessageCircle
} from "lucide-react";
import Sidebar from "@/components/Sidebar";
import ContactForm from "@/components/ContactForm";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-4">
            <Sidebar />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8">
            <Card className="bg-card border-border rounded-3xl shadow-elegant min-h-[600px]">
              <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
                <div className="border-b border-border px-8 pt-8">
                  <TabsList className="bg-transparent w-full justify-start gap-2 h-auto p-0 border-0">
                    <TabsTrigger 
                      value="about" 
                      className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3 text-base font-medium transition-all hover:text-primary/70 relative group"
                    >
                      About
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/50 transition-all duration-300 group-hover:w-full"></span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="resume" 
                      className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3 text-base font-medium transition-all hover:text-primary/70 relative group"
                    >
                      Resume
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/50 transition-all duration-300 group-hover:w-full"></span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="contact" 
                      className="data-[state=active]:bg-transparent data-[state=active]:shadow-none data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary rounded-none px-6 py-3 text-base font-medium transition-all hover:text-primary/70 relative group"
                    >
                      Contact
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary/50 transition-all duration-300 group-hover:w-full"></span>
                    </TabsTrigger>
                  </TabsList>
                </div>

                {/* About Tab */}
                <TabsContent value="about" className="p-8 space-y-8 mt-0">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">About Me</h2>
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                  </div>

                  <p className="text-base text-muted-foreground leading-relaxed">
                    A passionate and driven Computer Science and Engineering professional, eager to explore and contribute to the world of technology and innovation. Currently working on thesis titled <span className="text-foreground font-medium">"GreenBot: A Chatbot-Driven Assistance Platform for Students using Customized LLM"</span> and gaining practical experience as an SQA (Software Quality Assurance) intern. With expertise in software testing, SEO optimization, and AI development, I aim to join a dynamic organization that values learning, teamwork, and creativity — where I can continue to grow and make a meaningful impact.
                  </p>

                  {/* What I'm Doing */}
                  <div className="space-y-6 pt-6">
                    <h3 className="text-2xl font-semibold text-foreground">What I'm Doing</h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {[
                        {
                          icon: TestTube,
                          title: "Software Testing (SQA)",
                          description: "Conducting comprehensive quality assurance and software testing to ensure high-quality deliverables."
                        },
                        {
                          icon: Search,
                          title: "SEO Specialist",
                          description: "Optimizing websites and digital marketing strategies for U.S. and Australian companies."
                        },
                        {
                          icon: Sparkles,
                          title: "AI Development",
                          description: "Building AI-powered chatbot solutions using customized Large Language Models."
                        },
                        {
                          icon: Code2,
                          title: "Programming",
                          description: "Proficient in C, Java, and SQL with strong algorithmic problem-solving skills."
                        }
                      ].map((service, idx) => (
                        <Card key={idx} className="bg-secondary/50 border-border hover:bg-secondary hover:border-primary/30 transition-all duration-300 group cursor-pointer transform hover:-translate-y-1">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:shadow-glow group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                                <service.icon className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                              </div>
                              <div className="flex-1 space-y-2">
                                <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="space-y-6 pt-6">
                    <h3 className="text-2xl font-semibold text-foreground">Core Skills</h3>
                    
                    <div className="space-y-6">
                      {[
                        {
                          category: "Technical Skills",
                          skills: [
                            "Software Testing (SQA)",
                            "Manual Testing",
                            "API Testing",
                            "Selenium",
                            "Python",
                            "C Programming",
                            "Java",
                            "SQL",
                            "Keyword Research",
                            "On-Page SEO",
                            "Link Building",
                            "Backlinks",
                            "Technical SEO",
                          ]
                        },
                        {
                          category: "Tools & Software",
                          skills: ["Excel", "PowerPoint", "SEMrush", "Git", "Postman", "Jira"]
                        },
                        {
                          category: "Soft Skills",
                          skills: ["Group Leadership", "Problem Solving", "Public Speaking", "Team Coordination"]
                        },
                        {
                          category: "Languages",
                          skills: ["English (Fluent)", "Hindi (Fluent)", "Bangla (Native)"]
                        }
                      ].map((skillSet, idx) => (
                        <div key={idx} className="space-y-3">
                          <h4 className="text-sm font-medium text-primary uppercase tracking-wider">{skillSet.category}</h4>
                          <div className="flex flex-wrap gap-2">
                            {skillSet.skills.map((skill, sIdx) => (
                              <Badge 
                                key={sIdx} 
                                variant="secondary" 
                                className="px-4 py-2 text-sm bg-secondary hover:bg-secondary/80 border-border"
                              >
                                {skill}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                {/* Resume Tab */}
                <TabsContent value="resume" className="p-8 space-y-8 mt-0">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">Resume</h2>
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                  </div>

                  {/* Education */}
                  <div className="space-y-6">
                    <div className="flex items-center gap-3">
                      <GraduationCap className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          degree: "Bachelor of Science in Computer Science & Engineering",
                          institution: "Green University Bangladesh",
                          period: "2022 - 2025",
                          grade: "CGPA: 3.27/4.00",
                          description: "Thesis: GreenBot: A Chatbot-Driven Assistance Platform for Students using Customized LLM"
                        },
                        {
                          degree: "Higher Secondary Certificate (H.S.C)",
                          institution: "Milestone School And College",
                          period: "2016 - 2017",
                          grade: "GPA: 4.92/5.00"
                        },
                        {
                          degree: "Secondary School Certificate (S.S.C)",
                          institution: "Dhanmondi Govt. Boys' High School",
                          period: "2014 - 2015",
                          grade: "GPA: 5.00/5.00"
                        }
                      ].map((edu, idx) => (
                        <Card key={idx} className="bg-secondary/30 border-border hover:border-primary/30 transition-all">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                <GraduationCap className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1 space-y-2">
                                <div className="flex items-start justify-between gap-4">
                                  <div>
                                    <h4 className="text-lg font-semibold text-foreground">{edu.degree}</h4>
                                    <p className="text-sm text-muted-foreground">{edu.institution}</p>
                                  </div>
                                  <Badge variant="outline" className="border-primary/30 text-primary shrink-0">
                                    {edu.grade}
                                  </Badge>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="w-4 h-4" />
                                  <span>{edu.period}</span>
                                </div>
                                {edu.description && (
                                  <p className="text-sm text-muted-foreground pt-2">{edu.description}</p>
                                )}
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Experience */}
                  <div className="space-y-6 pt-6">
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-semibold text-foreground">Experience</h3>
                    </div>

                    <div className="space-y-6">
                      {[
                        {
                          title: "SQA Intern",
                          company: "SQA Harbor",
                          period: "Ongoing",
                          description: "Conducting comprehensive quality assurance and software testing to ensure high-quality deliverables. Feel free to reach out via the 'Email Me' button to discuss collaboration opportunities."
                        },
                        {
                          title: "Remote SEO Specialist",
                          company: "U.S. and Australian Companies",
                          period: "2023 - 2025",
                          description: "Website optimization and digital marketing strategy implementation."
                        },
                        {
                          title: "Social Media Expert",
                          company: "CETL",
                          period: "2023 - Present",
                          description: "Managing social media presence and digital marketing campaigns."
                        },
                        {
                          title: "Treasurer",
                          company: "GURS",
                          period: "2023 - 2024",
                          description: "Managed financial operations and coordinated university club activities."
                        },
                        {
                          title: "Treasurer",
                          company: "VGS",
                          period: "2024 - 2025",
                          description: "Managing financial operations for the organization."
                        },
                        {
                          title: "Executive Member",
                          company: "BASIS Student Forum",
                          period: "2024 - 2025",
                          description: "Coordinating activities and initiatives for the student community."
                        },
                        {
                          title: "Team Leader",
                          company: "TSS GUB - Hult Prize Competition",
                          period: "2022",
                          description: "Led team to competition finals with innovative solutions."
                        }
                      ].map((exp, idx) => (
                        <Card key={idx} className="bg-secondary/30 border-border hover:border-primary/30 transition-all">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                                <Briefcase className="w-6 h-6 text-primary" />
                              </div>
                              <div className="flex-1 space-y-2">
                                <div>
                                  <h4 className="text-lg font-semibold text-foreground">{exp.title}</h4>
                                  <p className="text-sm text-muted-foreground">{exp.company}</p>
                                </div>
                                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                  <Calendar className="w-4 h-4" />
                                  <span>{exp.period}</span>
                                </div>
                                <p className="text-sm text-muted-foreground">{exp.description}</p>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="space-y-6 pt-6">
                    <div className="flex items-center gap-3">
                      <Award className="w-6 h-6 text-primary" />
                      <h3 className="text-2xl font-semibold text-foreground">Achievements</h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        "Digital Garage Public Speaking Certification",
                        "Digital Marketing Basic Certification",
                        "Hult Prize Competition Finalist",
                        "ICPC Volunteer Certificate"
                      ].map((achievement, idx) => (
                        <Card key={idx} className="bg-secondary/30 border-border hover:bg-secondary/50 transition-all group">
                          <CardContent className="p-4">
                            <div className="flex items-center gap-3">
                              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:shadow-glow transition-shadow">
                                <Award className="w-5 h-5 text-primary" />
                              </div>
                              <p className="text-sm text-foreground">{achievement}</p>
                            </div>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  {/* Download Buttons */}
                  <div className="pt-6 flex flex-wrap gap-4 items-start">
                    <a
                      href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hasibulgreen@gmail.com&su=Message%20from%20Portfolio&body=Hello%20Hasibul"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="no-underline"
                      title="Open Gmail compose in a new tab with my address pre-filled"
                      aria-label="Open Gmail compose"
                    >
                      <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-primary bg-primary/5 text-primary hover:bg-primary/10 transition-all hover:scale-105"
                      >
                        <Mail className="w-5 h-5 mr-2" />
                        Email Me
                      </Button>
                    </a>

                    

                    <div className="ml-auto flex gap-3">
                      <a href="/resume.html" target="_blank" rel="noopener noreferrer" className="no-underline">
                        <Button variant="ghost">Download Resume</Button>
                      </a>
                      <a href="/hasibul.vcf" download className="no-underline">
                        <Button variant="ghost">Download vCard</Button>
                      </a>
                      <ContactForm />
                    </div>
                  </div>
                </TabsContent>

                {/* Contact Tab */}
                <TabsContent value="contact" className="p-8 space-y-8 mt-0">
                  <div className="space-y-4">
                    <h2 className="text-3xl font-bold text-foreground">Contact</h2>
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <a href="mailto:hasibulgreen@gmail.com?subject=Message%20from%20Portfolio&body=Hello%20Hasibul" className="no-underline">
                        <Card className="bg-secondary/30 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 group cursor-pointer">
                          <CardContent className="p-6">
                            <div className="flex items-start gap-4">
                              <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                                <Mail className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                              </div>
                              <div className="flex-1">
                                <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Email</h4>
                                <p className="text-base text-foreground hover:text-primary transition-colors break-all">
                                  hasibulgreen@gmail.com
                                </p>
                                <a href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=hasibulgreen@gmail.com&su=Message%20from%20Portfolio&body=Hello%20Hasibul" target="_blank" rel="noopener noreferrer" className="block text-xs text-primary mt-2 underline">Open in Gmail</a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </a>
                    </div>

                    <Card className="bg-secondary/30 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                            <Phone className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="flex-1">
                            <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Phone & WhatsApp</h4>
                            <div className="space-y-2">
                              <a 
                                href="tel:+8801849896090" 
                                className="block text-base text-foreground hover:text-primary transition-colors"
                              >
                                📞 Call: +880 1849 896090
                              </a>
                              <a 
                                href="https://wa.me/8801849896090" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="block text-base text-foreground hover:text-primary transition-colors"
                              >
                                💬 WhatsApp: +880 1849 896090
                              </a>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    <a href="https://www.facebook.com/eng.hasibulhassanshanto/" target="_blank" rel="noopener noreferrer" className="no-underline">
                      <Card className="bg-secondary/30 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 group cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                              <Facebook className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Facebook</h4>
                              <p className="text-base text-foreground hover:text-primary transition-colors break-all">
                                eng.hasibulhassanshanto
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>

                    <a href="https://www.instagram.com/trendy_tycoon/" target="_blank" rel="noopener noreferrer" className="no-underline">
                      <Card className="bg-secondary/30 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 group cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                              <Instagram className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Instagram</h4>
                              <p className="text-base text-foreground hover:text-primary transition-colors break-all">
                                trendy_tycoon
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>

                    <a href="https://www.linkedin.com/in/hasibul-hassan-shanto-815818232/" target="_blank" rel="noopener noreferrer" className="no-underline md:col-span-2">
                      <Card className="bg-secondary/30 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 group cursor-pointer h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                              <Linkedin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                            </div>
                            <div className="flex-1">
                              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">LinkedIn</h4>
                              <p className="text-base text-foreground hover:text-primary transition-colors break-all">
                                hasibul-hassan-shanto-815818232
                              </p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </a>

                    <Card className="bg-secondary/30 border-border hover:border-primary/30 transition-all duration-300 hover:shadow-glow transform hover:-translate-y-1 md:col-span-2 group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-primary/20 transition-all duration-300">
                            <MapPin className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
                          </div>
                          <div className="flex-1 space-y-3">
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Present Address</h4>
                              <p className="text-base text-foreground">Dharmik Para, Demra, Dhaka - 1362</p>
                            </div>
                            <div>
                              <h4 className="text-sm font-medium text-muted-foreground uppercase tracking-wider mb-2">Permanent Address</h4>
                              <p className="text-base text-foreground">
                                Hossain ali bepari, Village: Sontoshpur, Post office: Sontoshpur, Thana: Faridganj, District: Chandpur
                              </p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;