## Machine Learning Various Utility
Providing NextJS website to check images and giving the result of the image. For example, in the cat vs dog section, we can upload an image of either a cat or a dog, and the program will tell you whether it is a cat or a dog. Try it out on [here](https://kevinangkajaya.github.io/ml_utility/).

The programs are embedded from Hugging Face. This project has:
- Cat vs Dog: https://huggingface.co/spaces/kevinangkajaya/minima
- Papaya vs Chaya: https://huggingface.co/spaces/kevinangkajaya/papaya_vs_chaya

## Github Pages
- Check out this page [here](https://kevinangkajaya.github.io/ml_utility/).
- Check the documentation on https://github.com/gregrickaby/nextjs-github-pages.

## Localhost
- Because of the basepath on the `next.config.mjs`, after running `npm run dev`, the default url will go to http://localhost:3000, but it will show not found error.
- Instead, we shoud go to http://localhost:3000/ml_utility.
- To run https service:
    - Normally run the website with `npm run dev`.
    - On a separate command prompt, run `local-ssl-proxy --source 3001 --target 3000`.
    - Now you can go to https://localhost:3001/ml_utility.
    - Note that you need to install mkcert for the self-signed certificates. Go to the github pages for more information.
        - On Windows, store the binaries on `C:\Users\[Username]\mkcert`
    - For a more advanced command using self-signed certificates `local-ssl-proxy --key ./localhost-key.pem --cert ./localhost.pem --source 3001 --target 3000`


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
