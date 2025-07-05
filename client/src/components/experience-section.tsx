import { GraduationCap, Award, Star, Tag } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export default function ExperienceSection() {
  const experiences = [
    {
      period: "2022 - Present",
      status: "Current",
      title: "Senior Digital Marketing Manager",
      company: "TechCorp Solutions",
      description: "Leading digital marketing initiatives for B2B tech solutions, managing a team of 5 marketers, and driving 40% year-over-year growth in qualified leads.",
      color: "primary"
    },
    {
      period: "2020 - 2022",
      status: "2 years",
      title: "Digital Marketing Specialist",
      company: "CreativeMinds Agency",
      description: "Developed and executed digital marketing campaigns for 20+ clients across various industries, achieving an average ROI improvement of 130%.",
      color: "accent"
    },
    {
      period: "2018 - 2020",
      status: "2 years",
      title: "Marketing Coordinator",
      company: "StartupHub Inc.",
      description: "Managed social media accounts, created content calendars, and supported marketing campaigns that helped increase brand awareness by 250%.",
      color: "green"
    }
  ];

  const education = [
    {
      icon: GraduationCap,
      title: "MBA in Marketing",
      institution: "University of Business Excellence",
      period: "2016 - 2018",
      color: "primary"
    },
    {
      icon: Tag,
      title: "Google Analytics Certified",
      institution: "Google Digital Marketing",
      period: "2021",
      color: "accent"
    },
    {
      icon: Award,
      title: "HubSpot Inbound Marketing",
      institution: "HubSpot Academy",
      period: "2020",
      color: "green"
    },
    {
      icon: Star,
      title: "Facebook Blueprint Certified",
      institution: "Meta Business",
      period: "2022",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary",
      accent: "bg-accent/10 text-accent",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  const getBadgeClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary",
      accent: "bg-accent/10 text-accent",
      green: "bg-green-100 text-green-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="experience" className="py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Work Experience</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            Professional journey spanning digital marketing, creative strategy, and business development
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden lg:block"></div>
          
          {/* Timeline items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:pl-8' : 'lg:pr-8'} mb-4 lg:mb-0`}>
                  <Card className="bg-white hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className={`px-3 py-1 rounded-full text-sm ${getBadgeClasses(exp.color)}`}>
                          {exp.period}
                        </div>
                        <div className="text-text text-sm">{exp.status}</div>
                      </div>
                      <h3 className="font-semibold text-secondary mb-2">{exp.title}</h3>
                      <p className="text-primary font-medium mb-3">{exp.company}</p>
                      <p className="text-text text-sm">{exp.description}</p>
                    </CardContent>
                  </Card>
                </div>
                <div className={`lg:w-1/2 ${index % 2 === 1 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                  <div className={`hidden lg:block w-4 h-4 rounded-full absolute left-1/2 transform -translate-x-1/2 ${exp.color === 'primary' ? 'bg-primary' : exp.color === 'accent' ? 'bg-accent' : 'bg-green-600'}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Education Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold text-secondary mb-8 text-center">Education & Certifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <Card key={index} className="bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 ${getColorClasses(edu.color)}`}>
                      <edu.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-secondary">{edu.title}</h4>
                      <p className="text-text text-sm">{edu.institution}</p>
                    </div>
                  </div>
                  <p className="text-text text-sm">{edu.period}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
