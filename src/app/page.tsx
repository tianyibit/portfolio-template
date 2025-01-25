import { Container } from '@/components/layout/Container'
import SocialLinks from '@/components/home/SocialLinks'
import { headline, introduction } from '@/config/infoConfig'
import GithubContributions from '@/components/home/GithubCalendar'
import GitHubSnake from '@/components/home/GitHubSnake'
import IconCloud from "@/components/ui/icon-cloud";
import { techIcons } from '@/config/infoConfig'
import CareerBlock from '@/components/home/CareerBlock'

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        {/* personal info */}
        <div className="mb-10 grid grid-cols-1 md:grid-cols-2">
          <div className='md:mt-20'>
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl opacity-80">
              {headline}
            </h2>
            <p className="mt-6 text-base text-muted-foreground">
              {introduction}
            </p>
          </div>
          <div className="relative flex size-full items-center justify-center overflow-hidden w-full px-20 md:px-0 md:w-2/3 ml-auto md:mr-8">
            <IconCloud iconSlugs={techIcons} />
          </div>
        </div>
        <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
          {/* <GithubContributions /> */}
          <GitHubSnake />
        </div>
        <div className="mt-6 border-t border-zinc-100 py-8 dark:border-zinc-700/40">
          <div className="mt-16 sm:mt-20">
            <header className="max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100">
                工作经历
              </h1>
              <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
                投行+科技，7年投行牛马，2年中国最牛打印店店员
              </p>
            </header>
            <div className="mt-16">
              <CareerBlock />
            </div>
          </div>
        </div>
      </Container>
    </>
  )
}
