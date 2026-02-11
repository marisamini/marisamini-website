# What you need to add so the repo can be cloned/pushed to your GitHub

I can’t run Git from this environment (Git isn’t available in the tools I use), so **you** need to do two things. After that, one script does the rest.

---

## 1. Install Git (one-time)

- Download: **https://git-scm.com/download/win**
- Run the installer (defaults are fine).
- **Restart Cursor** (or your terminal) so `git` is on your PATH.

---

## 2. Create the repo on GitHub (one-time)

- Go to **https://github.com/new**
- Sign in as **marisamini** (or the account you use).
- **Repository name:** e.g. `marisamini-website`
- Leave **“Add a README”** and **“.gitignore”** **unchecked** (this project already has them).
- Click **Create repository**.
- Copy the repo URL. It will look like:
  - `https://github.com/marisamini/marisamini-website.git`
  - or `https://github.com/marisamini/marisamini-website`

---

## 3. Run the push script (does init, add, commit, remote, push)

1. Open **push-to-github.ps1** in this folder.
2. Set **`$repoUrl`** on the first line to your repo URL (from step 2), e.g.  
   `$repoUrl = "https://github.com/marisamini/marisamini-website.git"`
3. In PowerShell, from this project folder, run:
   ```powershell
   cd "c:\Users\MarisaMini\OneDrive - Bond Consulting Services\Desktop\marisaminiwebsite"
   .\push-to-github.ps1
   ```
4. If Git asks you to sign in, use your GitHub username and a **Personal Access Token** as the password (not your GitHub password).  
   Create a token: GitHub → Settings → Developer settings → Personal access tokens → Generate new token (classic), scope `repo`.

After this, your code will be on **github.com/marisamini/your-repo-name** and you can connect that repo in Vercel (see SETUP.md).

---

**Summary:** Install Git → Create the repo on GitHub → Edit `$repoUrl` in **push-to-github.ps1** → Run `.\push-to-github.ps1` in PowerShell.
