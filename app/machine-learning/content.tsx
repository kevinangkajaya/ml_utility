'use client'

type Props = {
    website: string // url path of the website (for reference)
    embed: string // url path of the embed (for iframe)
}

export default function MachineLearningContent({ website, embed }: Props) {
    const link = () => (
        <a href={website}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer">{website}</a>
    )

    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
            <div className="mb-2">
                Open the content to the original website here: {link()}
            </div>
            <div>
                <iframe style={{ minHeight: "100vh", minWidth: '80vw' }} src={embed}></iframe>
            </div>
        </div>
    )
}