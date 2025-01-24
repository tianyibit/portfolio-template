import { Card } from '@/components/shared/Card'
import { ChangelogItemType, changelogList } from '@/config/changelog'

function ChangelogItem({
  version,
  date,
  description,
}: ChangelogItemType) {
  return (
    <Card as="article">
      <div className="flex items-center justify-between">
        <div>
          <Card.Title as="h3">v{version}</Card.Title>
          <time className="text-sm text-zinc-500 dark:text-zinc-400">
            {date}
          </time>
        </div>
      </div>
      <Card.Description>{description}</Card.Description>
    </Card>
  )
}

export default function Changelog() {
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div className="flex flex-col space-y-8">
        {changelogList.map((item, index) => (
          <ChangelogItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}