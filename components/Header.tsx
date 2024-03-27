import {SocialIcon} from 'react-social-icons';
import {motion} from 'framer-motion';
import {sanityClient} from '@/lib/sanity';
import {Social} from '@/typings';

type Props = {
  socials: Social[];
};

const Header = ({socials}: Props) => {
  return (
    <header className="sticky top-0 flex items-start xl:items-center justify-between p-5 z-20 max-w-7xl mx-auto">
      <div className="flex flex-row items-center">
        {socials.map((social) => (
          <SocialIcon
            key={social._id}
            url={social.url}
            fgColor="gray"
            bgColor="transparent"
          />
        ))}
      </div>

      <div className="flex flex-row items-center text-gray-300 cursor-pointer">
        <SocialIcon
          href="#contact"
          className="cursor-pointer"
          network="email"
          fgColor="gray"
          bgColor="transparent"
        />
        <p className="uppercase hidden md:inline-flex text-sm text-gray-400">Get In Touch</p>
      </div>
    </header>
  );
};

export default Header;
