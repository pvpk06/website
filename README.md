# Arjun Portfolio

A polished Vite + React portfolio site for Arjun.

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## GitHub Pages deployment

This repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`.

1. Create a GitHub repository.
2. Add the repo remote:
   ```bash
git remote add origin https://github.com/your-username/your-repo.git
```
3. Push the code:
   ```bash
git branch -M main
git push -u origin main
```

The site will automatically build and deploy to GitHub Pages on every push to `main` or `master`.

> If you want a custom domain, configure it in your repository settings and add `CNAME` if needed.
