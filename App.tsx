import React, { useState, useEffect } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { resumeData } from './constants';
import type { Project, Skill, Education, ContactInfo } from './types';
import { LocationIcon, MailIcon, GithubIcon, LinkedinIcon } from './components/Icons';

const Section: React.FC<{ title: string; children: React.ReactNode; className?: string; }> = ({ title, children, className = "" }) => (
  <section className={className}>
    <h2 className="text-sm font-bold uppercase tracking-widest text-[#A98B74] mb-4">
      {title}
    </h2>
    <div className="text-gray-700 text-sm leading-relaxed space-y-4">
      {children}
    </div>
  </section>
);

const ContactItem: React.FC<{ icon: React.ReactNode; text: string; link?: string }> = ({ icon, text, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="group flex items-center text-sm text-gray-700 hover:text-[#A98B74] transition-colors">
    {icon}
    <span>{text}</span>
  </a>
);

const ProjectItem: React.FC<{ project: Project }> = ({ project }) => (
  <div className="mb-6 break-inside-avoid">
    <h3 className="font-bold text-gray-800 text-base">
      {project.title}
      {project.subtitle && <span className="text-gray-500 font-normal text-sm ml-2">— {project.subtitle}</span>}
    </h3>
    <a href={project.link.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline text-sm mb-2 block">
      🔗 {project.link.text}
    </a>
    <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
      {project.details.map((detail, index) => (
        <li key={index}>{detail}</li>
      ))}
    </ul>
  </div>
);

const SkillItem: React.FC<{ skill: Skill }> = ({ skill }) => (
  <div>
    <h3 className="font-semibold text-gray-800 text-sm mb-1">{skill.category}</h3>
    <p className="text-gray-600 text-sm">{skill.items}</p>
  </div>
);

const App: React.FC = () => {
  const { name, tagline, contact, summary, skills, projects, education, objective, additionalInfo } = resumeData;
  const [url, setUrl] = useState('');
  const [copyButtonText, setCopyButtonText] = useState('Copy Link');

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(url).then(() => {
      setCopyButtonText('Copied!');
      setTimeout(() => setCopyButtonText('Copy Link'), 2000);
    }, () => {
      alert('Failed to copy link.');
    });
  };

  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('');
  }

  return (
    <div className="bg-gray-100 min-h-screen p-4 md:p-8 antialiased">
      <div className="fixed top-4 right-4 print:hidden z-10 flex space-x-2">
         <button
          onClick={handleCopyLink}
          className="bg-gray-600 text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300 flex items-center"
          aria-label="Copy resume link"
        >
           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
          {copyButtonText}
        </button>
        <button
          onClick={handlePrint}
          className="bg-[#D8C4A6] text-white font-bold py-2 px-4 rounded-lg shadow-md hover:bg-[#c9b494] transition-colors duration-300 flex items-center"
          aria-label="Download as PDF"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
          </svg>
          Download PDF
        </button>
      </div>

      <main className="max-w-4xl mx-auto bg-white shadow-lg print:shadow-none print:m-0 grid grid-cols-1 md:grid-cols-3 min-h-[29.7cm]">
        {/* Left Column */}
        <aside className="md:col-span-1 bg-[#F3EFEA] p-8 print:p-8">
            <div className="flex flex-col items-center mb-12">
                <div className="w-28 h-28 bg-[#D8C4A6] rounded-full flex items-center justify-center mb-4 ring-4 ring-white/50">
                    <span className="text-4xl font-bold text-white">{getInitials(name)}</span>
                </div>
            </div>
          <div className="space-y-8">
            <Section title="Contact">
                <div className="space-y-3">
                    <ContactItem icon={<LocationIcon />} text={contact.location} link={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.location)}`} />
                    <ContactItem icon={<MailIcon />} text={contact.email} link={`mailto:${contact.email}`} />
                    <ContactItem icon={<GithubIcon />} text={contact.github} link={`https://${contact.github}`} />
                    <ContactItem icon={<LinkedinIcon />} text={contact.linkedin} link={`https://${contact.linkedin}`} />
                </div>
            </Section>

            <Section title="Technical Skills">
                <div className="space-y-4">
                    {skills.map(skill => <SkillItem key={skill.category} skill={skill} />)}
                </div>
            </Section>

            <Section title="Education">
              {education.map(edu => (
                <div key={edu.degree}>
                  <p className="font-semibold text-gray-800 text-sm">{edu.degree}</p>
                  <p className="text-gray-600 text-xs">{edu.period}</p>
                </div>
              ))}
            </Section>
            
            <Section title="Shareable Link">
              <div className="flex flex-col items-center">
                {url && (
                  <div className="p-2 bg-white rounded-lg shadow-inner">
                    <QRCodeSVG value={url} size={110} level={"L"} />
                  </div>
                )}
                 <p className="text-center text-xs text-gray-500 mt-2">
                    Scan this code to view the live resume.
                 </p>
              </div>
            </Section>

            <Section title="Additional Information">
              <div className="text-sm space-y-2">
                <p><span className="font-semibold text-gray-700">Interests:</span> {additionalInfo.interests}</p>
                {additionalInfo.portfolio && (
                  <p>
                    <span className="font-semibold text-gray-700">Portfolio:</span> 
                    <a href={additionalInfo.portfolio.url} className="ml-1 text-blue-600 hover:underline">{additionalInfo.portfolio.text}</a>
                  </p>
                )}
                <p><span className="font-semibold text-gray-700">Availability:</span> {additionalInfo.availability}</p>
              </div>
            </Section>
          </div>
        </aside>

        {/* Right Column */}
        <div className="md:col-span-2 p-8 print:p-8">
          <header className="mb-10">
            <h1 className="text-5xl font-bold text-gray-800 tracking-tight">{name}</h1>
            <p className="text-lg text-[#A98B74] mt-2 font-medium">{tagline}</p>
          </header>

          <div className="space-y-10">
            <Section title="Professional Summary">
              <p className="text-sm text-gray-600">{summary}</p>
            </Section>

            <Section title="Project Experience">
                {projects.map(project => <ProjectItem key={project.title} project={project} />)}
            </Section>

            <Section title="Career Objective">
              <p className="italic text-sm text-gray-600">{objective}</p>
            </Section>
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;