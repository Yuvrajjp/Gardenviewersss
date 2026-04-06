# Garden Viewersss — Quick Start

This project is a small static web app with:

- `garden-allocations.html` (admin edit page)
- `garden-layout-share.html` (public read-only page)
- `garden-preview.html` (quick links)

## 1) Launch locally (simple)

From this folder, run:

```bash
python3 -m http.server 4173
```

Then open:

- http://localhost:4173/garden-preview.html
- http://localhost:4173/garden-allocations.html
- http://localhost:4173/garden-layout-share.html

## 2) Firebase setup (required for live data)

Edit `firebase-config.js` and replace the placeholder values in `firebaseConfig` with your real Firebase project settings.

Without valid Firebase settings, the pages load but Firestore reads/writes will fail.

## 3) Seed layout (optional)

Use `garden-layout-seed.json` as a reference for initial bed data when writing your first document to Firestore.
