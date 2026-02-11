# How to get "Total Visitors" to update on your site

You have two options.

---

## Option A: Do nothing (easiest)

Your site can show a **fixed** number (e.g. 907) and **never change**.

- In Vercel → your **marisamini** project → **Settings** → **Environment Variables**
- Add: **Name** = `LEGACY_VISITOR_COUNT`, **Value** = `907` (or whatever number you want)
- Redeploy

The "Total Visitors" box will always show that number. No database needed.

---

## Option B: Make the count increase when people visit

For this, your site needs to **save each visit** in a database. Then the number goes up over time.

### Step 1: Open the right project in Vercel

- Go to [vercel.com](https://vercel.com) and log in.
- Click the project that **actually hosts marisamini.com** (the one you connected to your GitHub repo).  
  Its name might be something like **marisamini-website** or whatever you chose.

### Step 2: Add a database to that project

- In that project, click **Storage** in the top menu.
- Click **Create Database** (or **Connect Database**).
- Choose **Postgres** (or **Vercel Postgres** / **Neon** if you see that).
- Create it and **connect it to this project** when asked.
- Vercel will add the connection details (env vars) for you.

### Step 3: Redeploy

- Go to **Deployments**, open the **⋯** on the latest one, click **Redeploy** (or push a new commit from your computer).

After that, each time someone opens your site, a visit is saved and "Total Visitors" will go up. The weekly chart will start filling in after a week (or you can run the weekly summary once manually).

---

## Still confused?

- If you’re happy with a **fixed number** (e.g. 907), use **Option A** and ignore Option B.
- If you want the number to **grow with real visits**, use **Option B** and do Steps 1 → 2 → 3 in order.  
  If something in Step 1 or 2 doesn’t match what you see (e.g. no "Create Database"), tell me exactly what you see and we can match the steps to your screen.
