# Githubster

![Githubster](public/og-image.png)

Track your GitHub followers, unfollowers and following relationships.

![Githubster](https://img.shields.io/badge/Next.js-16-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-5.9-blue?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-4.3-38bdf8?logo=tailwindcss)

Githubster is a free, open-source tool that helps you understand your GitHub social graph. Instantly see who doesn't follow you back, discover followers you haven't followed yet, and get a clear overview of your connections — all without signing in or sharing any personal data.

## Features

- **Not Following Back** — people you follow who don't follow you back
- **You Don't Follow Back** — people who follow you but you don't follow back
- **Following** — everyone you follow
- **Followers** — everyone who follows you
- Search and filter within each tab
- Optional GitHub token for higher rate limits
- Dark theme with GitHub-inspired design
- Fully client-side — no data stored on any server

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## GitHub Token (Optional)

Without a token, the GitHub API allows 60 requests per hour. With a personal access token, you get 5,000 requests per hour.

To create a token:
1. Go to [GitHub Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. Generate a new token (classic) — no scopes needed for public data
3. Paste it in the token field in the app

## Tech Stack

- [Next.js 16](https://nextjs.org/) — React framework with Turbopack
- [TypeScript 5.9](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [GitHub REST API](https://docs.github.com/en/rest) — data source

## License

MIT
