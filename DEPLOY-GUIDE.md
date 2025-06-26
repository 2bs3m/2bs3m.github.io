# 2BS 3M Website – Deployment & Update Guide

---

## ⚠️ ADMIN SETUP GUIDE

### 1. Install Git

Open the VS Code terminal

```bash
sudo apt update
sudo apt install git
```

Check installation:
```bash
git --version
```

---

### 2. Install Node.js and npm

In the terminal, run:

```bash
sudo apt update
sudo apt install nodejs npm
```

Check installation:
```bash
node -v
npm -v
```

---

### 3. Set Up Git Identity

```bash
git config --global user.name "2bs3m"
git config --global user.email "sen2bs221@gmail.com"
```

---

### 5. Connect to GitHub from VS Code

#### a. Install GitHub CLI (optional but recommended)

```bash
sudo apt install gh
```

#### b. Authenticate with GitHub

```bash
gh auth login
```
- Choose **GitHub.com**
- Choose **HTTPS**
- Follow the prompts to authenticate in your browser

---

### 6. Create a New GitHub Repository

```bash
gh repo create 2bs3m.github.io --public --source=. --remote=origin --push
```

- If prompted, choose **"Push an existing local repository to GitHub"**.

---

### 7. Push Your Code

If you haven’t already initialized git in your project folder:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/2bs3m/2bs3m.github.io.git
git push -u origin main
```

---

### 8. Set Up GitHub Pages

- On GitHub, go to your repository → **Settings** → **Pages**
- Set the source branch to `main` and folder to `/root` or `/docs` as needed (for Vite, usually `/root` or `/`).

---

### 9. Set Up GitHub Actions for Automatic Deployment

1. Save and commit:

```bash
git add .github/workflows/deploy.yml
git commit -m "Add GitHub Actions deploy workflow"
git push
```

---

















## OWNER GUIDE: How to Update the Website

  - The GitHub repository link `https://github.com/2bs3m/2bs3m.github.io.git`)
  - Log in 

    gh auth login

  Choose GitHub.com
  Choose HTTPS
  Follow the prompts to authenticate in your browser.

---

### 2. Install Required Tools (from VS Code Terminal)

```bash

sudo apt update
sudo apt install git


sudo apt install nodejs npm


git --version
node -v
npm -v
```



```bash
git clone https://github.com/2bs3m/2bs3m.github.io.git
cd 2bs3m.github.io
```



```bash
git config user.name "2bs3m"
git config user.email "sen2bs221@gmail.com"
```



```bash
npm install
```

---

### 6. Make and Save Your Changes with Ctrl + S


### 7. Commit and Push Changes

```bash
git add .
git commit -m "Describe your changes"
git push
```