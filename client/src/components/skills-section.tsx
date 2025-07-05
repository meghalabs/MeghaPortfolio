import { Megaphone, Palette, BarChart3, Code, Handshake, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function SkillsSection() {
  const skills = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3",
      skill: "React/TypeScript",
      percentage: 95,
      color: "primary"
    },
    {
      icon: BarChart3,
      title: "Performance Optimization",
      description: "Core Web Vitals, Code Splitting, Lazy Loading, Bundle Analysis",
      skill: "Performance",
      percentage: 90,
      color: "accent"
    },
    {
      icon: Globe,
      title: "State Management",
      description: "Redux, Context API, Zustand, Micro Frontends, Module Federation",
      skill: "Architecture",
      percentage: 88,
      color: "green"
    },
    {
      icon: Palette,
      title: "Testing & Quality",
      description: "Jest, React Testing Library, Cypress, TDD, E2E Testing",
      skill: "Testing",
      percentage: 85,
      color: "purple"
    },
    {
      icon: Handshake,
      title: "DevOps & CI/CD",
      description: "Jenkins, GitHub Actions, Azure DevOps, Webpack, Vite",
      skill: "DevOps",
      percentage: 80,
      color: "pink"
    },
    {
      icon: Megaphone,
      title: "Team Leadership",
      description: "Agile/Scrum, Cross-functional Collaboration, Mentoring, Code Review",
      skill: "Leadership",
      percentage: 87,
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
            A comprehensive skill set covering modern frontend development, performance optimization, and team leadership
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
