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
              Frontend Software Engineer with 10+ years of experience building scalable, high-performance web applications. Passionate about crafting AI-integrated user experiences and building the future of e-commerce.
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
              src="/images/profile.jpg"
              alt="Megha Gupta - Frontend Software Engineer"
              className="rounded-full w-80 h-80 object-cover shadow-2xl border-4 border-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
