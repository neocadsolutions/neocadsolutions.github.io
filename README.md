# NeoCad Solutions — Website

Professional website for **NeoCad Solutions**, Kharadi, Pune.  
CAD Drafting · 3D Modeling · IATF/ISO Audit Documentation · SPM Design

---

## 🗂️ File Structure

```
neocad-solutions/
├── index.html                  ← Main website (this is your homepage)
├── .nojekyll                   ← Tells GitHub Pages not to use Jekyll
├── README.md                   ← This file
└── assets/
    ├── css/
    │   └── style.css           ← All styles
    ├── js/
    │   └── main.js             ← Tabs, scroll animations, contact form
    └── images/
        └── logo.png            ← NeoCad logo (used in nav + footer)
```

---

## 🚀 Deploy on GitHub Pages (Step-by-Step)

### Option A — Drag & Drop via GitHub Website (Easiest)

1. Go to [github.com](https://github.com) and sign in
2. Click **"New"** (green button) to create a new repository
3. Name it exactly: `neocadsolutions.github.io`  
   *(replace `neocadsolutions` with your actual GitHub username)*
4. Set it to **Public**, leave everything else default → click **"Create repository"**
5. On the next screen click **"uploading an existing file"**
6. **Drag and drop the entire extracted folder contents** into the upload box:
   - `index.html`
   - `.nojekyll`
   - `assets/` folder (with css, js, images inside)
7. Scroll down → click **"Commit changes"**
8. Wait ~60 seconds → your site is live at:  
   **`https://neocadsolutions.github.io`**

---

### Option B — Use Any Repo Name (with Pages enabled)

1. Create any repo (e.g. `neocad-website`)
2. Upload all files the same way
3. Go to repo **Settings → Pages**
4. Under "Source" select **Deploy from a branch**
5. Choose **main** branch, **/ (root)** folder → Save
6. Site will be at: `https://yourusername.github.io/neocad-website`

---

## ✏️ How to Update Content

| What to change | Where |
|---|---|
| Phone numbers | `index.html` — search for `+91 7775014876` |
| Email | `index.html` — search for `neocadsolutions@gmail.com` |
| Prices | `index.html` — in the `#pricing` section |
| Colors / fonts | `assets/css/style.css` — top `:root {}` variables |
| Button actions | `assets/js/main.js` |
| Logo | Replace `assets/images/logo.png` |

---

## 📞 Contact Details in Site

| Field | Value |
|---|---|
| Phone 1 | +91 7775014876 |
| Phone 2 | +91 7385188150 |
| Email | neocadsolutions@gmail.com |
| Location | Kharadi, Pune, Maharashtra |

---

© 2026 NeoCad Solutions. All Rights Reserved.
