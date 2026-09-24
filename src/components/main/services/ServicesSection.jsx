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

export default function ServicesSection() {
  return (
    <section id="services" className="bg-gray-50 py-16 px-6 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* Header - Exactly matches Projects header alignment */}
        <div className="mb-8 text-center md:text-left">
          <h2 className="text-3xl font-bold text-gray-900">Services</h2>
        </div>

        {/* Services Pills */}
        <div className="flex flex-wrap gap-3">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="flex items-center gap-2.5 bg-[#f3f4f6] hover:bg-gray-200 text-gray-800 text-sm font-medium px-4 py-3 rounded-xl transition-colors cursor-pointer"
              >
                <Icon className="w-4 h-4 text-purple-600" />
                <span>{service.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}