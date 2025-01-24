import { Card } from '@/components/shared/Card'
import { ChangelogItemType, changelogList } from '@/config/changelog'

function ChangelogItem({
  version,
  date,
  description,
}: ChangelogItemType) {
  return (
    <article className="group relative flex flex-col items-start">
      <div className="relative z-10 flex items-center gap-4 pl-3.5">
        <div>
          <time className="text-sm text-zinc-500 dark:text-zinc-400">
            {date}
          </time>
          <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
            v{version}
          </h2>
        </div>
      </div>
      <p className="relative z-10 mt-4 text-sm text-zinc-600 dark:text-zinc-400 pl-10">
        {description}
      </p>
      <div className="relative">
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
        <div className="absolute -inset-x-4 -inset-y-6 z-0 scale-95 bg-zinc-50 opacity-0 transition dark:bg-zinc-800/50 sm:-inset-x-6 sm:rounded-2xl" />
      </div>
    </article>
  )
}

export default function ChangelogBlock() {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {changelogList.map((item, index) => (
          <ChangelogItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
