'use client';

import Link from 'next/link';
import {Cursor, useTypewriter} from 'react-simple-typewriter';
import {PageInfo} from '../typings';
import BackgroundCircles from './BackgroundCircles';
import Image from 'next/image';
import {urlFor} from '@/lib/sanity';

type Props = {
  pageInfo: PageInfo;
};

function Hero({pageInfo}: Props) {
  const [text, count] = useTypewriter({
    words: [`Hi, My name's ${pageInfo?.name}`, 'Guy-who-codes-stuff.tsx', '<FullStackDev />'],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <Image
        className="relative rounded-full h-32 w-32 mx-auto object-cover"
        src={urlFor(pageInfo?.heroImage).url()}
        alt="profile picture of the author"
        width={200}
        height={200}
        priority
      />
      <div className="z-20 relative">
        <h2 className="tracking-[15px] text-sm uppercase text-gray-500 pb-2">{pageInfo?.role}</h2>
        <h1 className="text-2xl lg:text-5xl font-semibold px-10">
          <span className="mr-3">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton">About</button>
          </Link>

          <Link href="#experience">
            <button className="heroButton">Experience</button>
          </Link>

          <Link href="#skills">
            <button className="heroButton">Skills</button>
          </Link>

          <Link href="#projects">
            <button className="heroButton">Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Hero;
