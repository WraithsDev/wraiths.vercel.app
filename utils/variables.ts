import { IconType } from 'react-icons';
import { BsDiscord, BsGithub, BsInstagram, BsTwitterX, BsYoutube } from 'react-icons/bs';
import { DiNodejsSmall } from 'react-icons/di';
import { SiExpress, SiFirebase, SiMongodb, SiTailwindcss, SiTypescript, SiJavascript, SiCss3, SiHtml5, SiPhp } from 'react-icons/si';
import { TbBrandCSharp, TbBrandNextjs } from 'react-icons/tb';

export const projects: { name: string; description: string; iconURL: string; link: string; }[] = [
  {
    name: 'Dark Uptime',
    description: '7/24 Ücretsiz Discord Bot Uptime Hizmeti.',
    link: 'https://bit.ly/darkuptime',
    iconURL: 'https://media.discordapp.net/attachments/1097986792713617499/1167488497700057178/dckrmzlogo.png?ex=65a15de4&is=658ee8e4&hm=895c72c0ac870455628c0d413ca74d7ee4a227c57a373345e9e77ae353ca66b5&=&format=png&quality=lossless&width=614&height=614',
  },
  {
    name: 'SMMPANELCINIZ',
    description: 'En güvenilir ve En Kaliteli Discord, Sosyal Medya Hizmetleri!',
    link: 'https://smmpanelciniz.com.tr/',
    iconURL: 'https://media.discordapp.net/attachments/1207315024243331082/1220928288994889820/Mor1.png?ex=6610b913&is=65fe4413&hm=e721fb6f85ded9ed895864a74ffbbd4cf48525efa21b2055c204aac7d3478ec2&=&format=png&quality=lossless&width=600&height=600',
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
    name: 'Youtube Channel',
    link: 'https://youtube.com/@WraithsDev',
    iconURL: BsYoutube,
  },
];

export const technologiesAndLanguages: { name: string; iconURL: IconType }[] = [
  {
    name: 'Node.JS',
    iconURL: DiNodejsSmall,
  },
  {
    name: 'JavaScript',
    iconURL: SiJavascript,
  },
  {
    name: 'PHP',
    iconURL: SiPhp,
  },
  {
    name: 'HTML',
    iconURL: SiHtml5,
  },
  {
    name: 'CSS',
    iconURL: SiCss3,
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
