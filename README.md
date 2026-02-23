This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy to Netlify

This project is pre-configured for static export to be deployed on Netlify.

### Automated Deployment

The easiest way to deploy this Next.js app is by importing the repository into Netlify:

1. Push your code to your Git repository (GitHub, GitLab, or BitBucket).
2. Create a new site on Netlify and select your repository.
3. Netlify will automatically detect the settings from `netlify.toml`:
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
4. Click **Deploy Site**.

### Manual Deployment (Netlify CLI)

If you prefer deploying via CLI, you can build locally and push the `out` directory:

```bash
# Build the static site
npm run build

# Deploy using Netlify CLI
npx netlify deploy --prod --dir=out
```

---

_Note: This project uses `output: 'export'` in `next.config.ts`, which generates a static HTML version of the app in the `out` folder. Any server-side features (like API routes or `getServerSideProps`) are not supported in static exports._
