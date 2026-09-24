import AboutSection from './about/AboutSection';
import ServicesSection from './services/ServicesSection';
import ProjectsSection from './projects/ProjectsSection';
import ContactSection from './contact/ContactSection';
import CertificatesSection from './certificates/CertificatesSection';
import EducationSection from './education/EducationSection';

export default function MainSection() {
  return (
    <main>
      <AboutSection />
      <ServicesSection />
        <EducationSection />
      <div className="flex flex-col xl:flex-row w-full overflow-hidden">
        <div className="w-full xl:w-1/2">
          <ProjectsSection />
        </div>
        <div className="w-full xl:w-1/2 border-t xl:border-t-0 xl:border-l border-gray-100">
          <CertificatesSection />
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
