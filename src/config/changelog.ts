// changelog
export const changelogHeadLine = "What's new about this site"
export const changelogIntro = "Check out the latest changes to this site."


// changelog
export type ChangelogItemType = {
  version: string
  date: string
  description: string
}

export const changelogList: Array<ChangelogItemType> = [
  {
    version: '0.03',
    date: '2024-01-24',
    description: '修改首页内容，增加工作履历模块'
  },
  {
    version: '0.02',
    date: '2024-01-24',
    description: '修改首页布局，增加技术栈图标云'
  },
  {
    version: '0.01',
    date: '2024-01-24',
    description: '初始化项目，完成基础布局'
  }
]