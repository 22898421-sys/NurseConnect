# NurseConnectCare — GitHub-ready website

This folder is a **standalone static website** designed for GitHub Pages. It does not require Base44, npm, Node.js, React, or a paid Base44 export.

## What is included

- Public NurseConnectCare homepage
- Services, About, How It Works, Contact, Request Care and Privacy pages
- Visible EIRENIX Care co-branding
- Separate patient and clinician pathways
- Clinician Portal link supplied by the supervisor
- Patient Request Care handoff to the supervisor-provided NurseConnectCare/Firebase site
- Responsive mobile/desktop styling
- Local SVG brand/hero assets
- GitHub Pages compatible `.nojekyll` file

## Important integration note

The supplied clinician URL is:

`https://nurseconnect-project--website-fixes-20260524-c8pyw79k.web.app/clinician-login?mode=signup`

The exact EIRENIX **patient booking API or dedicated booking URL** was not supplied. To avoid collecting health information insecurely on a static GitHub page, Request Care currently hands users to the supervisor-provided public Firebase site:

`https://nurseconnect-project--website-fixes-20260524-c8pyw79k.web.app/`

When the official patient booking URL/API is available, edit `assets/config.js`.

## Upload to GitHub without command line

1. Sign in to GitHub.
2. Create a new repository, e.g. `nurseconnectcare-website`.
3. Choose **Private** while reviewing, or **Public** if you want free GitHub Pages hosting.
4. Open the repository and choose **Add file → Upload files**.
5. Extract the ZIP on your computer and upload **the contents of this folder**, not the outer ZIP itself.
6. Commit the files.

## Turn on a direct website link

1. In the repository open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Branch: `main`.
4. Folder: `/ (root)`.
5. Save.
6. GitHub will show the public URL after deployment, usually:
   `https://YOUR-USERNAME.github.io/nurseconnectcare-website/`

## Custom domain

Do not add a `CNAME` file until the exact owned domain spelling has been confirmed. The domain has previously been written both as `nurseconnetcare.com.au` and `nurseconnectcare.com.au`.

See `CUSTOM_DOMAIN.md`.
