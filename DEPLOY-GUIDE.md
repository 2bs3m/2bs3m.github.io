# 2BS 3M Website – Deployment & Update Guide





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

sudo apt install gh
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

### 6. Make and Save Your Changes with Ctrl + S


### 7. Commit and Push Changes

```bash
git add .
git commit -m "Describe your changes"
git push origin main

npm run build
npm run deploy
```
