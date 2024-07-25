'use client'

type Props = {
    urlPath: string // url path of the program (for iframe and reference)
}

export default function MachineLearningContent({ urlPath }: Props) {
    const link = () => (
        <a href={urlPath}
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            target="_blank"
            rel="noopener noreferrer">{urlPath}</a>
    )

    return (
        <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-1 lg:text-left">
            <div>
                Open the content to the original website here: {link()}
            </div>
            <div>
                <iframe style={{ height: "80vh", border: 0, minWidth: '80vw' }} src={urlPath}></iframe>
            </div>
        </div>
    )
}