import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProjectsSection() {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Walmart.com Rebuild",
      description: "Spearheaded the complete rebuild of Walmart.com as part of the Glass project using React, TypeScript, and orchestration layer APIs, serving millions of users daily.",
      tags: ["React", "TypeScript", "E-commerce"]
    },
    {
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "CI/CD Pipeline Optimization",
      description: "Led initiatives to optimize CI/CD pipelines with dependency graph visualization, resulting in a 70% reduction in CI time across development teams.",
      tags: ["DevOps", "Performance", "Automation"]
    },
    {
      image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Alaska Airlines RouteMap",
      description: "Designed and built an interactive flight route map using JavaScript, HTML/CSS, and .NET, deployed across Dev, QA, and Production environments with CI/CD pipelines.",
      tags: ["JavaScript", "Interactive Maps", "Travel"]
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Cart & Checkout Enhancement",
      description: "Developed and enhanced core features in Cart and Checkout flows at Walmart, ensuring scalability and high performance during peak traffic events like Black Friday.",
      tags: ["React", "Performance", "E-commerce"]
    },
    {
      image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Virgin America Integration",
      description: "Played a key role in integrating Virgin America into Alaska Airlines, leading development for codeshare, shopping, check-in, loyalty, and credit card features.",
      tags: ["Integration", "Team Leadership", "Travel"]
    },
    {
      image: "https://images.unsplash.com/photo-1596526131083-e8c633c948d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      title: "Web Performance Optimization",
      description: "Improved frontend performance metrics (TTI, FCP, LCP) through code splitting, lazy loading, and performance instrumentation across multiple enterprise applications.",
      tags: ["Performance", "Web Vitals", "Optimization"]
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">Featured Projects</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            A showcase of my recent work across e-commerce, travel, and enterprise-scale web applications
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
