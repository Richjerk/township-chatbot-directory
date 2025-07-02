Here’s your fully **corrected and merged `README.md`**, with all Git conflict markers removed and your full project documentation preserved and cleaned up.

---

### ✅ Clean `README.md` File

````markdown
# 🏘️ Township Chatbot Directory

[![CI/CD](https://github.com/Richjerk/township-chatbot-directory/actions/workflows/nodejs-deploy.yml/badge.svg)](https://github.com/Richjerk/township-chatbot-directory/actions)
[![Netlify Status](https://api.netlify.com/api/v1/badges/your-site-id/deploy-status)](https://app.netlify.com/sites/township-business-listing/deploys)
![Built with ❤️](https://img.shields.io/badge/Built%20with-%F0%9F%92%96-red)
![License](https://img.shields.io/badge/License-MIT-blue.svg)
![GitHub stars](https://img.shields.io/github/stars/Richjerk/township-chatbot-directory?style=social)
![GitHub forks](https://img.shields.io/github/forks/Richjerk/township-chatbot-directory?style=social)
![Node.js](https://img.shields.io/badge/Node.js-20.x-brightgreen?logo=node.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas-green?logo=mongodb)
![Status](https://img.shields.io/badge/status-active-brightgreen)
![Website](https://img.shields.io/website?url=https://township-business-listing.netlify.app)
![Made with](https://img.shields.io/badge/Made_with-Express-blue)
![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

---

## 🌍 About the Project

**Township Chatbot Directory** is a full-stack web application to empower township businesses through visibility, registration, geolocation, and AI chatbot interaction.

## 🌟 Features

- ✅ Business and User registration with GPS coordinates
- ✅ Category-based business listing
- ✅ MongoDB Atlas for scalable database
- ✅ Express/Node.js backend + HTML/CSS/JS frontend
- ✅ CI/CD ready with GitHub Actions
- ✅ Deployable on Netlify, Render, or Railway

## 🛠 Tech Stack

- **Node.js** + **Express.js**
- **MongoDB Atlas** (via Mongoose ODM)
- **HTML**, **CSS**, **Vanilla JS**
- **GitHub Actions** (CI/CD)
- **Netlify** or **Render** for deployment

## 📦 Installation

### 1. Clone the repository
```bash
git clone https://github.com/Richjerk/township-chatbot-directory.git
cd township-chatbot-directory
````

### 2. Install dependencies

```bash
npm install
```

### 3. Configure MongoDB Atlas

Create a `.env` file:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster.mongodb.net/township
```

### 4. Start the application

```bash
node app.js
```

Access your app at: `http://localhost:3000`

---

## 🚀 Deployment

This project supports automatic deployment via GitHub Actions. You can host:

* **Backend**: [Render](https://render.com) / [Railway](https://railway.app)
* **Frontend**: [Netlify](https://netlify.com) / [Vercel](https://vercel.com)

---

## 📂 Project Structure

```
├── public/                # HTML, CSS, JS frontend
├── routes/                # Express route handlers
├── models/                # MongoDB schemas (User, Business)
├── app.js                 # Main Node.js server
├── .env                   # MongoDB connection string
├── .github/workflows/     # GitHub Actions CI/CD config
├── README.md              # Project documentation
```

---

## 🧪 GitHub Actions CI/CD

Create the workflow file at `.github/workflows/nodejs-deploy.yml`:

```yaml
name: Node.js CI/CD

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - name: Checkout Code
      uses: actions/checkout@v4

    - name: Setup Node.js
      uses: actions/setup-node@v4
      with:
        node-version: 20

    - name: Install dependencies
      run: npm install

    - name: Lint code
      run: echo "Linting placeholder"

    - name: Run tests (placeholder)
      run: echo "Tests not yet implemented"

    - name: Deploy to Render (manual/hook)
      run: echo "Use a webhook or Render auto-deploy"
```

---

## ⚡ Optional: Render Deploy Hook Trigger

If using Render’s Deploy Hook:

```yaml
    - name: Trigger Render Deploy
      run: curl -X POST ${{ secrets.RENDER_DEPLOY_HOOK }}
```

Then add the hook in GitHub:

* Settings → Secrets → Actions → **New repository secret**
* Name: `RENDER_DEPLOY_HOOK`
* Value: your Render Deploy Hook URL

---

## 👤 Author

**Puseletso Mafisa**
Founder — *Mafisa Tech Affiliate Pty Ltd*

---

## 📄 License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## 🚀 Deploy Your Own

Want to launch your own version?

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Richjerk/township-chatbot-directory)

````

---

✅ Now you can run:

```bash
git add README.md
git rebase --continue
````

Then finish with:

```bash
git push
```

