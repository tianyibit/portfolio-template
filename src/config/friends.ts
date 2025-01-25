// friends
export const friendsHeadLine = "高铭哲的朋友们"
export const friendsIntro = "想上链接的朋友们，可以私信我"


// friends
export type FriendItemType = {
  name: string
  description?: string
  link: { href: string, label?: string }
  logo?: string
}

export const friends: Array<FriendItemType> = [
  {
    name: '待补充',
    link: { href: 'https://gmz666.com' },
  },
]