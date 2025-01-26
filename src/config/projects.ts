// projects
export const projectHeadLine = "我的一些小项目"
export const projectIntro = "基本是投行相关，有知识库，也有SaaS小工具等，最近在努力学习AI coding"

export type ProjectItemType = {
    name: string
    description: string
    link: { href: string, label: string }
    date?: string
    logo?: string,
    category?: string[],
    tags?: string[],
    image?: string,
    techStack?: string[],
    gitStars?: number,
    gitForks?: number
  }
  
  // projects 
  export const projects: Array<ProjectItemType> = [
    {
      name: '公众号「投行百宝箱」',
      description:
        '专注于投行科技、法律科技、审计科技',
      link: { href: 'mp.weixin.qq.com/s/8pzAgdsYw27EaJSFS1FXiA', label: '投行百宝箱' },
      category: ['Website']
    },
    {
      name: '投行科技与数字化社群',
      description:
        '全市场唯一以投行科技为主题的社群，覆盖券商投行IT产研、三方投行IT厂商',
      link: { href: 'mp.weixin.qq.com/s/-6seLiiPdTJVzgbdk0PqYA', label: '投行科技社群' },
      category: ['Website']
    },
    {
      name: '投行知识库',
      description:
        '希望在这里您能找到关于投行的一切（法规、案例、尽调方法、模板、投行科技与数字化等），并能将所有信息实现有效关联',
      link: { href: 'openib24.feishu.cn/wiki/VIIgwhWW8iZgz9kKjjRcEharnwN?fromScene=spaceOverview', label: '知识库' },
      category: ['Website'],
  
    },
  ]
  
  export const githubProjects: Array<ProjectItemType> = [
    {
      name: 'Devtoolset',
      description: 'Open-source & database-free developer tools navigator / 开源无数据库配置的开发者工具导航站',
      link: { href: 'github.com/iAmCorey/devtoolset', label: 'Devtoolset' },
      gitStars: 203,
      gitForks: 67
    },
    {
      name: 'Corey Chiu Portfolio Template',
      description:
        'portfolio template by corey chiu',
      link: { href: 'github.com/iAmCorey/coreychiu-portfolio-template', label: 'Corey Chiu Portfolio Template' },
      gitStars: 229,
      gitForks: 30
    },
    {
      name: 'Chrome Extension Plasmo Template',
      description:
        'A chrome extension template using plasmo, tailwind css, shadcn/ui',
      link: { href: 'github.com/iAmCorey/chrome-extension-plasmo-template', label: 'Chrome Extension Plasmo Template' },
      gitStars: 54,
      gitForks: 10
    },
    {
      name: 'Awesome Indie Hacker Tools',
      description:
        '独立开发/出海开发相关技术栈及工具收录 / Find the best tools for indie hackers here',
      link: { href: 'github.com/iAmCorey/awesome-indie-hacker-tools', label: 'Awesome Indie Hacker Tools' },
      gitStars: 815,
      gitForks: 69
    },
    {
      name: 'Awesome AI Directory',
      description:
        'AI资源工具导航站收录 / Find all the best AI directories',
      link: { href: 'github.com/iAmCorey/awesome-ai-directory', label: 'Awesome AI Directory' },
      gitStars: 40,
      gitForks: 7
    },
    {
      name: 'Producthunt Daily Bot',
      description:
        'A bot getting product hunt daily top products',
      link: { href: 'github.com/iAmCorey/producthunt-daily-bot', label: 'Producthunt Daily Bot' },
      gitStars: 3,
      gitForks: 3
    },
    {
      name: 'Cantonese Echoes',
      description:
        'Cantonese Echoes / 粵語殘片',
      link: { href: 'github.com/iAmCorey/Cantonese-Echoes', label: 'Cantonese Echoes' },
      gitStars: 1
    },
  ]
  