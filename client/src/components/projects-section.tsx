import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "E-commerce Growth Campaign",
      description: "Developed a comprehensive digital marketing strategy that increased online sales by 150% through targeted social media campaigns and SEO optimization.",
      tags: ["Digital Marketing", "SEO", "Social Media"]
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Brand Identity Redesign",
      description: "Complete brand overhaul for a tech startup, including logo design, brand guidelines, and marketing collateral that enhanced brand recognition by 200%.",
      tags: ["Branding", "Design", "Strategy"]
    },
    {
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Social Media Strategy",
      description: "Managed multi-platform social media campaigns that generated 50K+ followers and increased engagement rates by 300% across Instagram, LinkedIn, and Facebook.",
      tags: ["Social Media", "Content", "Analytics"]
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Performance Analytics",
      description: "Implemented comprehensive analytics framework that improved campaign ROI by 180% through data-driven optimization and real-time performance tracking.",
      tags: ["Analytics", "ROI", "Optimization"]
    },
    {
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Content Marketing Hub",
      description: "Created a content marketing ecosystem that generated 1M+ views and established thought leadership through strategic blog content and video series.",
      tags: ["Content", "Video", "SEO"]
    },
    {
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Email Automation",
      description: "Designed and executed automated email campaigns that achieved 35% open rates and 12% click-through rates, significantly above industry averages.",
      tags: ["Email", "Automation", "CRM"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            A showcase of my recent work across digital marketing, branding, and creative strategy
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow overflow-hidden group">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="font-semibold text-secondary mb-2">{project.title}</h3>
                <p className="text-text text-sm mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <button className="text-primary font-medium hover:text-primary/80 transition-colors flex items-center">
                  View Project <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
