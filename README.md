# [Where to Next ?](https://where-to-next-topaz.vercel.app/)

This project generates Holiday plans for you using AI.

[![Holiday Plan Generator](https://repository-images.githubusercontent.com/631857699/9ce88f83-3280-4c31-a764-7c730d9ea2f1)](https://where-to-next-topaz.vercel.app/)

## How it works

This project uses the [ChatGPT API](https://openai.com/api/) and [Vercel Edge functions](https://vercel.com/features/edge-functions) with streaming. It constructs a prompt based on the form and user input, sends it to the chatGPT API via a Vercel Edge function, then streams the response back to the application.

If you'd like to see how I built this, check out the [video](https://youtu.be/JcE-1xzQTE0) or [blog post](https://vercel.com/blog/gpt-3-app-next-js-vercel-edge-functions).

## Running Locally

After cloning the repo, go to [OpenAI](https://beta.openai.com/account/api-keys) to make an account and put your API key in a file called `.env`.

Then, run the application in the command line and it will be available at `http://localhost:3000`.

```bash
npm run dev
```

## One-Click Deploy

Deploy the example using [Vercel](https://vercel.com?utm_source=github&utm_medium=readme&utm_campaign=vercel-examples):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/dvlprkrishna/where-to-next&env=OPENAI_API_KEY&project-name=where-to-next&repo-name=where-to-next)
