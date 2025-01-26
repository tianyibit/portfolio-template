export * from './projects'
export * from './friends'
export * from './education'
export * from './career'


// personal info
export const name = '高铭哲'
export const headline = '投行业务、投行科技博主、产品经理、AI全栈工程师'
export const introduction = '用了30年才找到人生方向，目前在努力实现梦想\nDon\'t commet, just create.'
export const email = 'gaomzbit@163.com'
export const githubUsername = 'tianyibit'

// about page
export const aboutMeHeadline = "你好，我是高铭哲，一名软件工程师。"
export const aboutParagraphs = [
  "I love coding. I learned programming when I in college. I wrote my first program in Java when I was 18.",
  "I have a lot of hobbies, such as travelling, photography, watching movies, music and so on.",
  "I'm working as a software develop engineer in Shenzhen, China now. And I'm building a lot of side projects in my spare time."
]


// blog
export const blogHeadLine = "我的原创文章"
export const blogIntro = "主要是关于投行科技、AI、我的生活"


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
