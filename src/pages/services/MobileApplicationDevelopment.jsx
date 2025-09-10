
    import React from 'react';
import ServiceHero from '@/components/services/ServiceHero';
import CaseStudyCard from '@/components/services/CaseStudyCard';
import { Smartphone, Code, GitBranch, Layers, Zap, Users } from 'lucide-react';
import { motion } from 'framer-motion';
import ZigZagSection from '@/components/services/ZigZagSection';
import BenefitsSection from '@/components/services/BenefitsSection';
import CallToActionSection from '@/components/services/CallToActionSection';
import WhyChooseUsService from '@/components/services/WhyChooseUsService';
import TechStackSection from '@/components/services/TechStackSection';

const MobileApplicationDevelopment = () => {

  const whatIsCrossPlatform = {
    title: 'What is Cross-Platform Development?',
    description: 'Cross-platform development allows us to write code once and deploy it across multiple operating systems, including iOS and Android. This approach significantly reduces development time and costs while ensuring a consistent user experience across all devices.',
    imageSrc: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb?auto=format&fit=crop&w=600&q=80',
    imageAlt: 'Mobile developer working on a cross-platform application',
    Icon: Layers,
  };

  const benefits = [
    { icon: Code, title: 'Code Reusability', description: 'Write one codebase for both iOS and Android, saving time and resources.' },
    { icon: Zap, title: 'Faster Time-to-Market', description: 'Develop and launch your app more quickly compared to native development for each platform.' },
    { icon: GitBranch, title: 'Consistent UI/UX', description: 'Maintain a uniform look and feel across different devices, strengthening your brand identity.' },
    { icon: Users, title: 'Wider Audience Reach', description: 'Simultaneously target users on both the App Store and Google Play from a single launch.' },
  ];
  
  const techStack = [
    { name: '.NET MAUI', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg', color: 'text-purple-600' },
    { name: 'React Native', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: 'text-blue-500' },
    { name: 'Flutter', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg', color: 'text-blue-400' },
    { name: 'Firebase', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg', color: 'text-yellow-500' },
  ];

  const caseStudies = [
    {
      id: "1",
      title: 'Ride-Sharing App Transformation',
      client: 'A leading ride-sharing service',
      challenge: 'Needed to unify their separate iOS and Android development efforts to accelerate feature deployment.',
      solution: 'Migrated their native apps to a single .NET MAUI codebase, enabling simultaneous feature releases.',
      result: 'Reduced development overhead by 40% and improved feature parity across platforms.',
      tags: ['.NET MAUI', 'Mobile', 'Transformation'],
      imageSrc: "https://horizons-cdn.hostinger.com/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/bd7231026a6d7b8071bcc78dd1af8cac.png",
      imageAlt: "A sleek mobile app interface for a modern ride-sharing service",
      link: '/services/mobile-application-development/case-study/1',
    },
    {
      id: "2",
      title: 'E-commerce App for a Retail Giant',
      client: 'A multinational retail corporation',
      challenge: 'Sought to create a seamless shopping experience for their customers on both iOS and Android.',
      solution: 'Developed a feature-rich cross-platform app using React Native for a consistent user experience.',
      result: 'Increased mobile sales by 25% within the first six months of launch.',
      tags: ['React Native', 'E-commerce', 'Retail'],
      imageSrc: "https://horizons-cdn.hostinger.com/1d282cf0-6f20-4ad3-8c2b-df4e2099af33/3720365dad8cd042c70071c16738406c.png",
      imageAlt: "A vibrant e-commerce app showcasing various products on a smartphone",
      link: '/services/mobile-application-development/case-study/2',
    },
  ];

  return (
    <div className="bg-white">
      <ServiceHero
        title="Cross-Platform Mobile Solutions"
        subtitle="Build once, deploy everywhere. We create beautiful, high-performance mobile apps for iOS and Android from a single codebase."
        CtaIcon={Smartphone}
        gradientColors="from-blue-600 to-indigo-700"
      />

      <ZigZagSection {...whatIsCrossPlatform} />
      <BenefitsSection title="Why Choose Cross-Platform?" benefits={benefits} />

      <TechStackSection 
        title="Our Cross-Platform Technology Stack"
        subtitle="We use cutting-edge frameworks to build fast, reliable, and beautiful cross-platform applications."
        technologies={techStack}
        bgColor="bg-gray-50"
      />

      <section className="py-12 md:py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Success in Cross-Platform Development</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Discover how our cross-platform solutions have helped businesses launch faster and reach a wider audience.</p>
          </motion.div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {caseStudies.map((study, index) => (
              <CaseStudyCard
                key={study.id}
                title={study.title}
                client={study.client}
                challenge={study.challenge}
                solution={study.solution}
                result={study.result}
                imageSrc={study.imageSrc}
                alt={study.imageAlt}
                link={study.link}
                tags={study.tags}
                index={index}
              />
            ))}
          </motion.div>
        </div>
      </section>

      <WhyChooseUsService serviceName="Cross-Platform Mobile Solutions" />

      <CallToActionSection
        title="Ready to Build Your Mobile App?"
        subtitle="Let's discuss how our cross-platform expertise can bring your app idea to life, faster and more efficiently."
      />
    </div>
  );
};

export default MobileApplicationDevelopment;
  