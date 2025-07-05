import { TrendingUp, Lightbulb, Users } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">About Me</h2>
          <p className="text-lg text-text max-w-2xl mx-auto">
            Passionate professional with expertise in digital marketing, creative strategy, and business development
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-secondary mb-6">My Journey</h3>
            <p className="text-text mb-6">
              With over 5 years of experience in digital marketing and creative strategy, I've helped businesses 
              transform their online presence and achieve measurable growth. My approach combines data-driven 
              insights with creative storytelling to deliver results that matter.
            </p>
            <p className="text-text mb-6">
              I specialize in developing comprehensive digital strategies that encompass social media marketing, 
              content creation, brand development, and performance optimization. My work spans across various 
              industries, from startups to established enterprises.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-lg flex items-center">
                <TrendingUp className="w-4 h-4 mr-2" />
                Growth-Focused
              </div>
              <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg flex items-center">
                <Lightbulb className="w-4 h-4 mr-2" />
                Creative
              </div>
              <div className="bg-green-100 text-green-600 px-4 py-2 rounded-lg flex items-center">
                <Users className="w-4 h-4 mr-2" />
                Collaborative
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
