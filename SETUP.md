# Marisa Mini – Move site to your GitHub & keep Vercel

Your live site **https://www.marisamini.com/** is built from the public repo [gilarellano/portfolio-website](https://github.com/gilarellano/portfolio-website). You don’t have access to that repo, so you need your own copy under **github.com/marisamini** and then point Vercel at it.

---

## Step 1: Get the code (no Git needed)

1. Open: **https://github.com/gilarellano/portfolio-website**
2. Click the green **Code** button → **Download ZIP**.
3. Save the ZIP (e.g. to your Desktop).
4. **Extract** the ZIP.
5. You’ll get a folder like `portfolio-website-main`.  
   - Either **rename** it to `marisaminiwebsite`, or  
   - **Move/copy** everything inside it into your existing `marisaminiwebsite` folder (so your project folder has `package.json`, `src/`, `public/`, etc.).

---

## Step 2: Install Git (if you don’t have it)

- If `git` works in your terminal, skip this.
- Otherwise: **https://git-scm.com/download/win**  
  - Run the installer and use the default options.  
  - Restart Cursor/terminal after installing.

---

## Step 3: Create a new repo on your GitHub

1. Go to **https://github.com/new**
2. Sign in as **marisamini** (or the account you use).
3. Set:
   - **Repository name:** e.g. `marisamini-website` or `portfolio-website`
   - **Visibility:** Public (or Private if you prefer)
   - **Do not** add a README, .gitignore, or license (you already have them from the ZIP).
4. Click **Create repository**.

---

## Step 4: Push the code to your repo

In a terminal (PowerShell or Command Prompt), run these from **your project folder** (the one that contains `package.json`):

```powershell
cd "c:\Users\MarisaMini\OneDrive - Bond Consulting Services\Desktop\marisaminiwebsite"
git init
git add .
git commit -m "Initial commit - Marisa Mini portfolio"
git branch -M main
git remote add origin https://github.com/marisamini/YOUR-REPO-NAME.git
git push -u origin main
```

Replace **YOUR-REPO-NAME** with the name you chose (e.g. `marisamini-website`).  
If GitHub asks for login, use your username and a **Personal Access Token** as the password (Settings → Developer settings → Personal access tokens).

---

## Step 5: Point Vercel at your new repo

You have two ways to do this.

### Option A – Change the Git repo for the existing project (keeps marisamini.com)

1. Go to **https://vercel.com** and log in.
2. Open the project that’s currently connected to **gilarellano/portfolio-website** (the one serving marisamini.com).
3. Go to **Settings** → **Git**.
4. Click **Disconnect** (or **Change Git Repository** if shown).
5. Click **Connect Git Repository** and choose **GitHub**.
6. Select **marisamini** and the repo you created (e.g. `marisamini-website`).
7. Save. Vercel will trigger a new deployment from your repo. Your domain **marisamini.com** should keep working.

### Option B – New Vercel project from your repo

1. In Vercel dashboard, click **Add New** → **Project**.
2. Import the **marisamini/your-repo-name** repo.
3. Deploy (use default settings).
4. After deploy: **Settings** → **Domains** → add **www.marisamini.com** and **marisamini.com**.
5. In your domain DNS, point the domain to Vercel (Vercel will show the exact records).  
   If marisamini.com was already on Vercel, you can remove the old project’s domain from the old project and use it only on this new one.

---

## Step 6: Environment variables (if your site uses a database)

If the current marisamini.com uses **Vercel Postgres** (e.g. for “Total Visitors” / “Page Load Time”):

1. In Vercel: your project → **Settings** → **Environment Variables**.
2. Copy over the same variable names and values from the **old** Vercel project (if you still have access), or recreate them from your Vercel Postgres dashboard.
3. Redeploy after saving env vars.

---

## Summary

| Step | What to do |
|------|------------|
| 1 | Download repo as ZIP from gilarellano/portfolio-website and extract into your project folder |
| 2 | Install Git from git-scm.com if needed |
| 3 | Create a new repo on github.com/marisamini |
| 4 | `git init`, `add`, `commit`, `remote add origin`, `push` to that repo |
| 5 | In Vercel, connect the same (or new) project to **marisamini/your-repo** and keep/assign marisamini.com |
| 6 | Copy env vars (e.g. Postgres) in Vercel if your site uses them |

After this, you own the code on **github.com/marisamini** and can update the site anytime; tell me what you want to add or change and we can do it in this project folder.

---

## Visitor stats (Total Visitors & chart)

The site can record each visit and show **Total Visitors** and **Avg. Page Load Time**, plus a weekly chart.

**To turn it on:**

1. In **Vercel** → your project → **Storage** (or **Integrations**): create or connect a **Postgres** database.
2. Vercel will add the required env vars (e.g. `POSTGRES_URL`) to your project.
3. Redeploy. On each page load the site will record a visit and the stats will update.

The tables (`visitors`, `weeklysummary`) are created automatically the first time someone visits and when the weekly cron runs. The cron runs every Sunday (see `vercel.json`); you can also call `GET /api/calculate-weekly-summary` to refresh the chart data.

If you don’t add Postgres, the **Total Visitors** number will use the optional `LEGACY_VISITOR_COUNT` env var (e.g. 907) so you can still show a count.

---

## Optional: Run the site locally

From your project folder:

```powershell
npm run dev
```

Then open **http://localhost:3000**. Add your photo as **public/headshot.webp** (see `public/placeholder.txt` for other optional assets).
