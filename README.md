# create-express-ejs-boilerplate

A simple CLI tool to generate a ready-to-go **Express.js + EJS** boilerplate project with routing, public folder, and views setup.

## ✨ Features

- 🧱 Express.js setup
- 🎨 EJS view engine with a `views/` folder
- 📁 Public folder for static assets
- 🛣️ Sample route
- ⚡ Automatic `npm install` after scaffolding

---

## 🚀 Quick Start

Use `npx` to run without installing globally:

```bash
npx create-exp-boilerplate my-app
```

Or install globally:

```bash
npm install -g create-exp-boilerplate
create-exp-boilerplate my-app
```

This will:

1. Create a folder named `my-app`
2. Copy the boilerplate files
3. Install dependencies with `npm install`

---

## 🗂️ File Structure

After running the command, your new project folder will look like this:

```bash
my-app/
├── app.js                  # Main Express.js entry point
├── package.json            # Node.js dependencies and scripts
├── controllers/            # Controller modules (empty by default)
├── db/                     # Database configuration or scripts (empty by default)
├── models/                 # Data models (empty by default)
├── routers/                # Router modules (empty by default)
├── public/                 # Folder for static assets (e.g., CSS, images)
│   └── style.css           # Default stylesheet
└── views/                  # EJS templates
    ├── index.ejs           # Default EJS template for the homepage
    └── 404.ejs             # 404 page template
```

### 🔍 Breakdown of Files and Folders:

- **`app.js`**: Main entry point for the Express app.
- **`package.json`**: Node.js dependencies and script configurations.
- **`controllers/`**: Placeholder for controller logic.
- **`db/`**: Placeholder for database setup or migrations.
- **`models/`**: Placeholder for data models.
- **`routers/`**: Placeholder for additional route modules.
- **`public/`**: Static assets folder.
- **`views/`**: EJS view templates.

---

## 🛠️ Usage in Development

Once your boilerplate is set up, navigate to your project folder and run:

```bash
npm start
```

Your server will be running on [http://localhost:3000](http://localhost:3000).

---

## ⚙️ Customizing Your Project

You can modify the project by:

- Adding controllers in the `controllers/` folder
- Configuring your database in the `db/` folder
- Defining models in the `models/` folder
- Adding more routers in the `routers/` folder
- Updating static assets in `public/`
- Editing view templates in `views/`

---

## License

This project is licensed under the [MIT License](LICENSE).
