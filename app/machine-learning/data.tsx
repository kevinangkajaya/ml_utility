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
    {
        value: "green_vegetables",
        label: "Green vegetables",
        desc: "Check whether your image is Aa Choy, Siomak, Fumak, Gailan, or Choy Sum",
        website: "https://huggingface.co/spaces/kevinangkajaya/green-vegetables",
        embed: "https://kevinangkajaya-green-vegetables.hf.space",
    },
    {
        value: "bananas",
        label: "Bananas",
        desc: "Check what kind of banana is your image",
        website: "hhttps://huggingface.co/spaces/kevinangkajaya/bananas",
        embed: "https://kevinangkajaya-bananas.hf.space",
    },
    {
        value: "root_vegetables",
        label: "Root vegetables",
        desc: "Check whether your image is Cassava, Taro, Sweet potato, Yam/Ube, or Potato",
        website: "https://huggingface.co/spaces/kevinangkajaya/root-vegetables",
        embed: "https://kevinangkajaya-root-vegetables.hf.space",
    },
]

export { mlData }