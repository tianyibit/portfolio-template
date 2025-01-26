import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/layout/Container'
import { footerItems } from '@/config/siteConfig'
import { name } from '@/config/infoConfig'
import SocialLinks from '@/components/home/SocialLinks'
import VisitData from '@/components/layout/VisitData'

function NavLink({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      className="transition hover:text-primary"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-muted pb-16 pt-10">
          <ContainerInner>
            <div className="flex flex-col gap-3">
              {/* 第一行：导航链接和社交媒体 */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium">
                  {footerItems.map((item) => (
                    <NavLink key={item.name} href={item.href}>{item.name}</NavLink>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <SocialLinks className="mt-0" />
                </div>
              </div>
              
              {/* 第二行：版权信息和访问数据 */}
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground order-2 sm:order-1">
                  &copy; {new Date().getFullYear()} {name}. All rights reserved.
                </p>
                <div className="order-1 sm:order-2">
                  <VisitData />
                </div>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
