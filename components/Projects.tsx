'use client';

import {motion} from 'framer-motion';
import {Project} from '../typings';
import Link from 'next/link';
import {urlFor} from '@/lib/sanity';
import {SocialIcon} from 'react-social-icons';
import Image from 'next/image';

type Props = {
  projects: Project[];
};

function Projects({projects}: Props) {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}}
      className="flex relative overflow-hidden flex-col text-left md:flex-row max-w-full h-screen justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Projects</h3>

      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex flex-col space-y-5 items-center justify-center flex-shrink-0 snap-center p-16 md:p-10 h-screen"
          >
            <motion.img
              initial={{
                y: -300,
              }}
              transition={{duration: 1.2}}
              whileInView={{opacity: 1, y: 0}}
              viewport={{once: true}}
              src={urlFor(project?.image).url()}
              className="md:mb-0 flex-shrink-0 w-56 h-56 rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[300px] object-contain"
            />
            <div className="flex items-center gap-5">
              <SocialIcon
                target="_blank"
                className="h-20 w-20"
                url="https://github.com/ChrisSchufer"
                fgColor="gray"
                bgColor="transparent"
              />
              <Link
                target="_blank"
                className="bg-[#242424] rounded-lg px-3 py-1 flex items-center gap-1"
                href={project.linkToBuild}
              >
                <span className="animate-pulse text-xs">🔴</span> live
              </Link>
            </div>

            <div className="space-y-10 px-0 md:px-10 max-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                <span className="decoration-[#F7AB0A]/50 underline">
                  Case Study {i + 1} of {projects.length}:
                </span>{' '}
                {project.title}
              </h4>
              <div className="flex items-center gap-4">
                {project.technologies.map((technology) => (
                  <Image
                    key={technology._id}
                    className="h-10 w-10"
                    src={urlFor(technology.image).url()}
                    alt="technology icon"
                    width={200}
                    height={200}
                  />
                ))}
              </div>

              <p className="text-lg text-center md:text-left">{project.summary}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
    </motion.div>
  );
}

export default Projects;
