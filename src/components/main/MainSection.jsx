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
      <div className="flex flex-col xl:flex-row w-full overflow-hidden">
        <div className="w-full xl:w-1/2">
          <ServicesSection />
        </div>
        <div className="w-full xl:w-1/2">
         <EducationSection />
        </div>
      </div>
      
      
      <div className="flex flex-col xl:flex-row w-full overflow-hidden">
        <div className="w-full xl:w-1/2">
          <ProjectsSection />
        </div>
        <div className="w-full xl:w-1/2 ">
          <CertificatesSection />
        </div>
      </div>
      <ContactSection />
    </main>
  );
}
