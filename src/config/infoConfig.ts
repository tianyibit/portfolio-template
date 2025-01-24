export * from './projects'
export * from './friends'
export * from './changelog'
export * from './education'
export * from './career'


// personal info
export const name = '高铭哲'
export const headline = 'Software engineer, Full-Stack web developer, and indie hacker.'
export const introduction = '我是高铭哲，一名软件工程师。我喜欢编程，喜欢创造有趣的事物。'
export const email = 'gaomzbit@163.com'
export const githubUsername = 'iamcorey'

// about page
export const aboutMeHeadline = "你好，我是高铭哲，一名软件工程师。"
export const aboutParagraphs = [
  "I love coding. I learned programming when I in college. I wrote my first program in Java when I was 18.",
  "I have a lot of hobbies, such as travelling, photography, watching movies, music and so on.",
  "I'm working as a software develop engineer in Shenzhen, China now. And I'm building a lot of side projects in my spare time."
]


// blog
export const blogHeadLine = "What I've thinking about."
export const blogIntro = "I've written something about AI, programming and life."


// social links
export type SocialLinkType = {
  name: string,
  ariaLabel?: string,
  icon: string,
  href: string
}

export const socialLinks: Array<SocialLinkType> = [
  {
    name: 'Wechat',
    icon: 'wechat',
    href: 'https://mp.weixin.qq.com/s/8pzAgdsYw27EaJSFS1FXiA'
  },
  {
    name: 'Jike',
    icon: 'pill',
    href: 'https://okjk.co/y5uT4m'
  },
  {
    name: 'X',
    icon: 'x',
    href: 'https://x.com/tianyibit'
  },
  {
    name: 'Github',
    icon: 'github',
    href: 'https://github.com/tianyibit'
  }
]

// https://simpleicons.org/
export const techIcons = [
  "typescript",
  "javascript",
  "supabase",
  "cloudflare",
  "java",
  "oracle",
  "mysql",
  "react",
  "nodedotjs",
  "nextdotjs",
  "prisma",
  "postgresql",
  "nginx",
  "vercel",
  "docker",
  "git",
  "github",
  "visualstudiocode",
  "androidstudio",
  "ios",
  "apple",
  "wechat"
];
