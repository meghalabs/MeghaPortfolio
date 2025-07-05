import { Megaphone, Palette, BarChart3, Code, Handshake, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skills = [
    {
      icon: Megaphone,
      title: "Digital Marketing",
      description: "SEO, SEM, Social Media Marketing, Content Strategy, Email Marketing",
      skill: "SEO/SEM",
      percentage: 90,
      color: "primary"
    },
    {
      icon: Palette,
      title: "Creative Strategy",
      description: "Brand Development, Visual Design, Content Creation, Storytelling",
      skill: "Brand Strategy",
      percentage: 85,
      color: "accent"
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Data Analysis, Performance Tracking, ROI Optimization, Reporting",
      skill: "Analytics",
      percentage: 88,
      color: "green"
    },
    {
      icon: Code,
      title: "Technical Skills",
      description: "HTML/CSS, Google Analytics, CRM Systems, Marketing Automation",
      skill: "Technical",
      percentage: 75,
      color: "purple"
    },
    {
      icon: Handshake,
      title: "Project Management",
      description: "Agile Methodology, Team Leadership, Strategic Planning, Client Relations",
      skill: "Management",
      percentage: 82,
      color: "pink"
    },
    {
      icon: Globe,
      title: "Communication",
      description: "Public Speaking, Content Writing, Client Presentation, Cross-cultural Communication",
      skill: "Communication",
      percentage: 92,
      color: "indigo"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: "bg-primary/10 text-primary",
      accent: "bg-accent/10 text-accent",
      green: "bg-green-100 text-green-600",
      purple: "bg-purple-100 text-purple-600",
      pink: "bg-pink-100 text-pink-600",
      indigo: "bg-indigo-100 text-indigo-600"
    };
    return colorMap[color as keyof typeof colorMap] || "bg-gray-100 text-gray-600";
  };

  return (
    <section id="skills" className="py-20 bg-neutral">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Skills & Expertise</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            A comprehensive skill set covering digital marketing, creative strategy, and business development
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-white hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${getColorClasses(skill.color)}`}>
                  <skill.icon className="w-6 h-6" />
                </div>
                <h3 className="font-semibold text-secondary mb-2">{skill.title}</h3>
                <p className="text-text text-sm mb-4">{skill.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.skill}</span>
                    <span>{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
