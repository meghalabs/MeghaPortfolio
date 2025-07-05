import { TrendingUp, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            Frontend Software Engineer passionate about building scalable, high-performance web applications and creating exceptional user experiences
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-6">My Journey</h3>
            <p className="text-text mb-6">
              With over 10 years of experience in frontend development, I've specialized in building scalable, 
              high-performance web applications across e-commerce, travel, and media domains. Currently at Walmart Labs, 
              I spearheaded rebuilding Walmart.com from scratch using React, TypeScript, and modern architecture patterns.
            </p>
            <p className="text-text mb-6">
              My expertise spans from optimizing core web vitals (TTI, LCP, FCP) to implementing CI/CD automation 
              that reduced pipeline time by 70%. I'm passionate about creating intuitive user experiences while 
              maintaining enterprise-scale performance and reliability.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Performance-Driven
              </div>
              <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg flex items-center">
                <Lightbulb className="w-4 h-4 mr-2" />
                Innovation-Focused
              </div>
              <div className="bg-green-100 text-green-600 px-4 py-2 rounded-lg flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Team Leadership
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&h=600&q=80"
              alt="Professional workspace setup"
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
