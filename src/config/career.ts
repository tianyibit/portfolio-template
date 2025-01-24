// career
export type CareerItemType = {
  period: {
    start: string  // 格式：'SEP 11, 2024'
    end: string    // 格式：'PRESENT' 或具体日期
  }
  company: string
  title: string
  description: string
  logo: string     // logo 图片路径，例如：'/images/logos/company.png'
}

export const careerList: Array<CareerItemType> = [
  {
    period: {
      start: '2023.12',
      end: '至今'
    },
    company: '华福证券有限公司',
    title: '浙江投行部业务岗',
    description: '股权业务承做、承揽',
    logo: '/images/logos/huafu.png'
  },
  {
    period: {
      start: '2021.9',
      end: '2023.10'
    },
    company: '北京荣大科技股份有限公司',
    title: '创新部总经理',
    description: '开拓IPO底稿咨询服务，参与项目承揽；参与投行软件的需求分析、功能评审',
    logo: '/images/logos/rongda.png'
  },
  {
    period: {
      start: '2016.6',
      end: '2021.9'
    },
    company: '湘财证券股份有限公司',
    title: '投行部业务岗',
    description: '股权业务承做',
    logo: '/images/logos/xiangcai.png'
  },
  {
    period: {
      start: '2012.6',
      end: '2014.6'
    },
    company: '京北方信息技术股份有限公司',
    title: '董事长助理',
    description: '重要项目跟进、日程安排、来访接待、商务随行',
    logo: '/images/logos/jbf.png'
  }
]