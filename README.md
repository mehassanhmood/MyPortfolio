# My Portfolio

1. **npm Project Setup**:
   - A Node.js project (e.g., React, Vue, or static site) with a `package.json` file.
   - The `gh-pages` package installed as a dev dependency:
     ```bash
     npm install gh-pages --save-dev
     ```
   - `package.json` includes build and deploy scripts:
     ```json
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d build"
     }
     ```
     - `predeploy` builds the project (outputs to `build` or `dist`).
     - `deploy` pushes built files to the `gh-pages` branch.

2. **GitHub Repository**:
   - Project is pushed to a GitHub repository.
   - GitHub Pages is enabled:
     - Go to **Settings > Pages**.
     - Set the source to the `gh-pages` branch (or another branch if configured).
     - Optionally, set a custom domain or folder (e.g., `/docs` or `/`).

3. **Homepage in package.json** (for frameworks like React):
   - Set the `homepage` field to avoid 404 errors:
     ```json
     "homepage": "https://username.github.io/repository"
     ```

## Deployment Command

To deploy GitHub Pages from your terminal:

```bash
npm run deploy