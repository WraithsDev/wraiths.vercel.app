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
    iconURL: 'https://media.discordapp.net/attachments/1097986792713617499/1167488497700057178/dckrmzlogo.png?ex=65a15de4&is=658ee8e4&hm=895c72c0ac870455628c0d413ca74d7ee4a227c57a373345e9e77ae353ca66b5&=&format=png&quality=lossless&width=614&height=614',
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
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Node.JS',
    iconURL: DiNodejsSmall,
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
