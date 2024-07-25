type mlDataType = {
    value: string; // unique id
    label: string; // short label
    desc: string; // description of this data
    url: string // url path of the program (for iframe and reference)
}

const mlData: Array<mlDataType> = [
    {
        value: "dog_vs_cat",
        label: "Dog VS Cat",
        desc: "Find out your image is a cat or a dog",
        url: "https://huggingface.co/spaces/kevinangkajaya/minima",
    },
    {
        value: "papaya_vs_chaya",
        label: "Papaya VS Chaya",
        desc: "Check if your image is a papaya or a chaya plant",
        url: "https://huggingface.co/spaces/kevinangkajaya/papaya_vs_chaya",
    },
]

export { mlData }