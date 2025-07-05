import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const handleViewWork = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleGetInTouch = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-primary/5 to-accent/5 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-secondary mb-6">
              Hi, I'm <span className="text-primary">Megha Gupta</span>
            </h1>
            <p className="text-xl text-text mb-8 leading-relaxed">
              Digital Marketing Specialist & Creative Professional passionate about creating impactful digital experiences and driving business growth through innovative strategies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleViewWork} className="bg-primary text-white hover:bg-primary/90">
                View My Work
              </Button>
              <Button onClick={handleGetInTouch} variant="outline" className="border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Get In Touch
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="Megha Gupta Professional Headshot"
              className="rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
