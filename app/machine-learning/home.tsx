'use client'

import { mlData } from "./data"

type Props = {
  tabOnSelect: Function; // change tab on click
}

export default function MachineLearningHome({ tabOnSelect }: Props) {
  const boxOnClick = (e: React.MouseEvent<HTMLElement>, index: number) => {
    e.preventDefault()

    tabOnSelect(index + 1)
  }
  return (
    <div style={{ minWidth: '95vw' }} className="mb-32 grid text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left">
      {mlData.map((mlDatum, index) => (
        <a key={mlDatum.value}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => boxOnClick(e, index)}
          className="cursor-pointer group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            {mlDatum.label}{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            {mlDatum.desc}
          </p>
        </a>

      ))}
    </div>
  )
}