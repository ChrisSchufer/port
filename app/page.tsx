import Header from '@/components/Header';
import {Experience, PageInfo, Project, Skill, Social} from '@/typings';
import Image from 'next/image';
import Link from 'next/link';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import ContactMe from '@/components/ContactMe';
import {fetchSocial} from './_fetch/fetchSocials';
import {fetchPageInfo} from './_fetch/fetchPageInfo';
import {fetchExperience} from './_fetch/fetchExperience';
import {fetchSkills} from './_fetch/fetchSkills';
import {fetchProjects} from './_fetch/fetchProjects';

export default async function Home() {
  const socials: Social[] = await fetchSocial();
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();

  return (
    <div className="overflow-x-hidden snap-y snap-mandatory h-screen overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 bg-[rgb(36,36,36)] text-white z-0">
      <Header socials={socials} />

      {/* Hero Banner Section */}
      <section
        id="hero"
        className="snap-start"
      >
        <Hero pageInfo={pageInfo} />
      </section>

      {/* About Section */}
      <section
        id="about"
        className="snap-center"
      >
        <About pageInfo={pageInfo} />
      </section>

      {/* Experience Section */}
      <section
        id="experience"
        className="snap-center"
      >
        <WorkExperience experiences={experiences} />
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="snap-start"
      >
        <Skills skills={skills} />
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="snap-start"
      >
        <Projects projects={projects} />
      </section>

      {/* Contact Me Section */}
      <section
        id="contact"
        className="snap-start"
      >
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src="https://i.imgur.com/e2yvD6A.png"
              alt="Back to Top"
              width={10}
              height={10}
              priority
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
