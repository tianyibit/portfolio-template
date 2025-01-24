import { Card } from '@/components/shared/Card'
import { CareerItemType, careerList } from '@/config/career'
import Image from 'next/image'
import Link from 'next/link'

function CareerItem({
  period,
  company,
  title,
  description,
  logo,
}: CareerItemType) {
  return (
    <article className="group relative flex flex-col items-start">
      <div className="relative z-10 flex items-start gap-32">
        <div className="relative flex h-16 w-16 items-center justify-center rounded-md border border-zinc-200 bg-white p-2 dark:border-zinc-800 dark:bg-zinc-900">
          <Image
            src={logo}
            alt={company}
            width={48}
            height={48}
            className="h-12 w-12 object-contain"
          />
        </div>
        <div className="flex-1">
          <div className="flex items-center">
            <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
              {company}
            </h2>
            <span className="text-sm text-zinc-600 dark:text-zinc-400 ml-8">
              {title}
            </span>
          </div>
          <time className="mt-1 block text-sm text-zinc-500 dark:text-zinc-400">
            {period.start} - {period.end}
          </time>
          <p className="relative z-10 mt-4 text-sm text-zinc-600 dark:text-zinc-400">
            {description}
          </p>
        </div>
      </div>
    </article>
  )
}

export default function CareerBlock() {
  return (
    <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40">
      <div className="flex max-w-3xl flex-col space-y-16">
        {careerList.map((item, index) => (
          <CareerItem key={index} {...item} />
        ))}
      </div>
    </div>
  )
}
