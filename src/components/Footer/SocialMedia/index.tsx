import React from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';
import { IoIosLink } from 'react-icons/io';

import { socialMediaLinks } from 'config/constants';
import { List } from './styles';

interface SocialMediaList {
  link: string;
  icon: React.ReactNode;
}
const socialMedias: SocialMediaList[] = [
  {
    link: socialMediaLinks.instagram,
    icon: <FaInstagram />,
  },
  {
    link: socialMediaLinks.facebook,
    icon: <FaFacebookF />,
  },
  {
    link: socialMediaLinks.linkedin,
    icon: <FaLinkedinIn />,
  },
  {
    link: socialMediaLinks.youtube,
    icon: <FaYoutube />,
  },
  {
    link: socialMediaLinks.site,
    icon: <IoIosLink />,
  },
];

const SocialMedia: React.FC = () => {
  return (
    <List>
      {socialMedias.map((media, key) => (
        <li key={media.link}>
          <a href={media.link} target="_blank" rel="noopener noreferrer">
            {media.icon}
          </a>
        </li>
      ))}
    </List>
  );
};

export default SocialMedia;
