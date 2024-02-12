import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://frequency-forum.pages.dev/", // replace this with your deployed domain
  author: "Joel Abreu, Luis Brito",
  desc: "Un blog dedicado a la propagación de ondas electromagnéticas en las telecomunicaciones.",
  title: "FrequencyForum",
  ogImage: "frequencyforum-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 4,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "es", // html lang code. Set this empty and default will be "en"
  langTag: ["es-US"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/Mstaz4/Blog_Telecomunicaciones",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
];
