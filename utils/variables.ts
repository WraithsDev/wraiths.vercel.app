import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTwitterX } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'Dark Uptime',
    description: '7/24 Ücretsiz Discord Bot Uptime Hizmeti.',
    link: 'https://bit.ly/darkuptime',
    iconURL: 'https://media.discordapp.net/attachments/1097986792713617499/1167488497985273926/dclogoturuncu.png?ex=657c73e4&is=6569fee4&hm=6a94f58afa1f0b16a13fd5cae4be92db54ebd5d4606e0ebd05e82481f9db9ff5&=&format=webp&quality=lossless&width=614&height=614',
  },
  {
    name: 'Altron 🎵',
    description: 'The perfect music bot! Feature rich with high quality music!',
    link: 'https://bit.ly/altrondavet',
    iconURL: 'https://i.hizliresim.com/gohzo83.png',
  },
];

export const githubUsername = 'WraithsDev';
export const discordId = '843136836947410945';

export const socialMediaAccounts: { name: string; link: string; iconURL: IconType }[] = [
  {
    name: 'Github',
    link: 'https://github.com/' + githubUsername,
    iconURL: BsGithub,
  },
  {
    name: 'Discord',
    link: 'https://discord.com/' + discordId,
    iconURL: BsDiscord,
  },
  {
    name: 'Instagram',
    link: 'https://instagram.com/',
    iconURL: BsInstagram,
  },
  {
    name: 'X',
    link: 'https://twitter.com/',
    iconURL: BsTwitterX,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Node.JS',
    iconURL: DiNodejsSmall,
  },
  {
    name: 'C#',
    iconURL: TbBrandCSharp,
  },
  {
    name: 'MongoDB',
    iconURL: SiMongodb,
  },
  {
    name: 'Express',
    iconURL: SiExpress,
  },
];
