type mlDataType = {
    value: string; // unique id
    label: string; // short label
    desc: string; // description of this data
    website: string // url path of the website (for reference)
    embed: string // url path of the embed (for iframe)
}

const mlData: Array<mlDataType> = [
    {
        value: "dog_vs_cat",
        label: "Dog VS Cat",
        desc: "Find out your image is a cat or a dog",
        website: "https://huggingface.co/spaces/kevinangkajaya/minima",
        embed: "https://kevinangkajaya-minima.hf.space",
    },
    {
        value: "papaya_vs_chaya",
        label: "Papaya VS Chaya",
        desc: "Check if your image is a papaya or a chaya plant",
        website: "https://huggingface.co/spaces/kevinangkajaya/papaya_vs_chaya",
        embed: "https://kevinangkajaya-papaya-vs-chaya.hf.space",
    },
]

export { mlData }