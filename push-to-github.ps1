# Push this project to your GitHub repo
# 1. Install Git from https://git-scm.com/download/win if you haven't
# 2. Create a new repo on https://github.com/new (e.g. name: marisamini-website, leave README/.gitignore unchecked)
# 3. Set your repo URL below, then run this script in PowerShell:
#    .\push-to-github.ps1

$repoUrl = "https://github.com/marisamini/marisamini-website.git"   # <-- Change to your repo URL

$projectRoot = $PSScriptRoot
Set-Location $projectRoot

# If Git isn't in PATH, try adding common install locations (so you don't have to restart Cursor)
if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    $gitPaths = @(
        "$env:ProgramFiles\Git\cmd",
        "${env:ProgramFiles(x86)}\Git\cmd",
        "$env:LOCALAPPDATA\Programs\Git\cmd",
        "C:\Program Files\Git\cmd",
        "C:\Program Files (x86)\Git\cmd"
    )
    foreach ($p in $gitPaths) {
        if (Test-Path $p) {
            $env:Path = "$p;$env:Path"
            break
        }
    }
}

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git is not installed or not in PATH. Install from https://git-scm.com/download/win" -ForegroundColor Red
    Write-Host "After installing, fully close Cursor and open it again, then run this script." -ForegroundColor Yellow
    exit 1
}

if (-not (Test-Path ".git")) {
    git init
    git branch -M main
}
git add .
git status
git commit -m "Update portfolio - add AI Business Professional certification"
git remote remove origin 2>$null
git remote add origin $repoUrl
Write-Host "`nPushing to GitHub (you may be prompted to sign in)..." -ForegroundColor Cyan
git push -u origin main
