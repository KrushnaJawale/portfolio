import { 
  Code2, 
  Palette, 
  Smartphone, 
  Layers, 
  Server, 
  Database, 
  Globe, 
  Cpu, 
  Layout, 
  Sparkles,
  Cloud,
  ShieldCheck,
  Zap,
  TestTube,
  GitBranch,
  Bot
} from "lucide-react";
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

// Duplicate for infinite scroll
const row1Extended = [...row1, ...row1, ...row1];
const row2Extended = [...row2, ...row2, ...row2];

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
    <section id="services" className="bg-gray-50 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
        </div>

        <style>{`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-33.333%); }
          }

          @keyframes scroll-right {
            0% { transform: translateX(-33.333%); }
            100% { transform: translateX(0); }
          }

          .scroll-left {
            animation: scroll-left 20s linear infinite;
          }

          .scroll-right {
            animation: scroll-right 20s linear infinite;
          }

          .scroll-left.paused,
          .scroll-right.paused {
            animation-play-state: paused;
          }
        `}</style>

        {/* Row 1 - Left to Right */}
        <div 
          className="mb-6 overflow-hidden relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          <div className={`flex gap-4 ${isHovering ? 'scroll-left paused' : 'scroll-left'}`}>
            {row1Extended.map((service, idx) => (
              <ServiceCard key={`row1-${idx}`} service={service} />
            ))}
          </div>
        </div>

        {/* Row 2 - Right to Left */}
        <div 
          className="overflow-hidden relative"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onTouchStart={() => setIsHovering(true)}
          onTouchEnd={() => setIsHovering(false)}
        >
          <div className={`flex gap-4 ${isHovering ? 'scroll-right paused' : 'scroll-right'}`}>
            {row2Extended.map((service, idx) => (
              <ServiceCard key={`row2-${idx}`} service={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}