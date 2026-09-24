import { Code2, Palette, Smartphone, Layers, Server, Database, Globe, Cpu, Layout, Sparkles, Cloud, ShieldCheck, Zap, TestTube, GitBranch, Bot } from "lucide-react";
import { useState } from "react";

const services = [
  { id: 1, title: "Frontend Dev", icon: Code2 },
  { id: 2, title: "UI/UX Design", icon: Palette },
  { id: 3, title: "Mobile Apps", icon: Smartphone },
  { id: 4, title: "Full-Stack", icon: Layers },
  { id: 5, title: "Backend APIs", icon: Server },
  { id: 6, title: "Databases", icon: Database },
  { id: 7, title: "Web Apps", icon: Globe },
  { id: 8, title: "Integrations", icon: Cpu },
  { id: 9, title: "UI Kits", icon: Layout },
  { id: 10, title: "AI Workflows", icon: Sparkles },
  { id: 11, title: "Cloud & DevOps", icon: Cloud },
  { id: 12, title: "Web Security", icon: ShieldCheck },
  { id: 13, title: "Speed Optimization", icon: Zap },
  { id: 14, title: "QA & Testing", icon: TestTube },
  { id: 15, title: "CI/CD Pipelines", icon: GitBranch },
  { id: 16, title: "AI Chatbots", icon: Bot },
];

// Split services into two rows
const row1 = services.slice(0, 8);
const row2 = services.slice(8, 16);

// Duplicating exactly ONCE is all you need for a 50% shift loop
const row1Extended = [...row1, ...row1];
const row2Extended = [...row2, ...row2];

const ServiceCard = ({ service }) => {
  const Icon = service.icon;
  return (
    <div className="flex items-center gap-2.5 bg-[#f3f4f6] text-gray-800 text-sm font-medium px-4 py-3 rounded-xl whitespace-nowrap flex-shrink-0 hover:bg-gray-300 transition-colors">
      <Icon className="w-4 h-4 text-purple-600" />
      <span>{service.title}</span>
    </div>
  );
};

export default function ServicesSection() {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <section id="services" className="bg-gray-50 py-16 px-6 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 w-full text-center">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
          <p className="text-gray-500 text-sm mt-2">
                      End-to-end development and design services tailored to your exact needs.
                    </p>
        </div>

        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          @keyframes scroll-right {
            0% { transform: translateX(-50%); }
            100% { transform: translateX(0); }
          }
          .scroll-container {
            display: flex;
            gap: 1rem; /* Match your Tailwind gap-4 */
            width: max-content;
          }
          .scroll-left {
            animation: scroll-left 25s linear infinite;
          }
          .scroll-right {
            animation: scroll-right 25s linear infinite;
          }
          .scroll-paused {
            animation-play-state: paused;
          }
        `}</style>

        {/* Row 1 - Left to Right */}
        <div 
          className="mb-6 overflow-hidden w-full dynamic-marquee"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          <div className={`scroll-container scroll-left ${isHovering ? 'scroll-paused' : ''}`}>
            {row1Extended.map((service, idx) => (
              <ServiceCard key={`row1-${idx}`} service={service} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div 
          className="overflow-hidden w-full dynamic-marquee"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          <div className={`scroll-container scroll-right ${isHovering ? 'scroll-paused' : ''}`}>
            {row2Extended.map((service, idx) => (
              <ServiceCard key={`row2-${idx}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
