# Githubster

![Githubster](public/og-image.png)

Track your GitHub followers, unfollowers and following relationships.

![Githubster](https://img.shields.io/badge/Next.js-16-black?logo=next.js) ![TypeScript](https://img.shields.io/badge/TypeScript-6.0-blue?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-4.3-38bdf8?logo=tailwindcss) ![React](https://img.shields.io/badge/React-19-61dafb?logo=react)

Githubster is a free, open-source tool that helps you understand your GitHub social graph. Instantly see who doesn't follow you back, discover followers you haven't followed yet, and get a clear overview of your connections — all without signing in or sharing any personal data.

## Features

- **Not Following Back** — people you follow who don't follow you back
- **You Don't Follow Back** — people who follow you but you don't follow back
- **Mutuals** — people you follow who also follow you
- **Following** — everyone you follow
- **Followers** — everyone who follows you
- **Profile Overview** — top languages, total stars, repositories
- Sort users by name (A→Z, Z→A)
- Search and filter within each tab
- Share profile link with one click
- Keyboard shortcut (`/`) to focus search
- Loading progress with skeleton animation
- Optional GitHub token for higher rate limits
- Dark/Light theme
- 17 languages supported (i18n with RTL)
- PWA — installable as a standalone app
- Fully client-side — no data stored on any server
- SEO optimized with structured data (JSON-LD)

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
- [React 19](https://react.dev/) — UI library
- [TypeScript 6](https://www.typescriptlang.org/) — type safety
- [Tailwind CSS 4](https://tailwindcss.com/) — utility-first styling
- [@tanstack/react-virtual](https://tanstack.com/virtual) — virtualized lists for large datasets
- [GitHub REST API](https://docs.github.com/en/rest) — data source

## Security

- Content Security Policy (CSP) headers
- Strict-Transport-Security (HSTS)
- X-Content-Type-Options, X-Frame-Options
- Permissions-Policy
- All data stays in the browser — zero server-side storage

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -am 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

MIT
