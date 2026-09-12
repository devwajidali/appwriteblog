# 📝 MegaBlog

A modern and responsive blog website built with **React.js** and **Appwrite**. Users can create, read, update, and delete their own blog posts while authenticated users can manage their content securely.

## 🚀 Features

* 🔐 User Authentication
* 📝 Create Blog Posts
* 👀 View Blog Posts
* ✏️ Edit Your Own Posts
* 🗑️ Delete Your Own Posts
* 🖼️ Featured Images for Posts
* 📄 Rich Text Blog Content
* 🔎 Post Details using Slugs
* 👤 Author-based Post Management
* 🔒 Users can edit/delete only their own posts
* 📱 Responsive UI
* ⚡ Fast React-based frontend
* ☁️ Appwrite backend and database
* 🗂️ Image/File Storage with Appwrite

## 🛠️ Technologies Used

* **React.js**
* **React Router DOM**
* **Redux Toolkit**
* **Appwrite**
* **Tailwind CSS**
* **HTML React Parser**
* **Vite**
* **JavaScript (ES6+)**

## 📂 Project Structure

```text
MegaBlog/
│
├── public/
│
├── src/
│   ├── appwrite/
│   │   └── config.js
│   │
│   ├── assets/
│   │   └── Logo.png
│   │
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Container.jsx
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Logo.jsx
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   ├── AddPost.jsx
│   │   ├── EditPost.jsx
│   │   └── Post.jsx
│   │
│   ├── store/
│   │   └── authSlice.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
├── tailwind.config.js
└── README.md
```

## ⚙️ Installation

### 1. Clone the repository

```bash
git clone https://github.com/your-username/MegaBlog.git
```

### 2. Open the project

```bash
cd MegaBlog
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will run on your local development server.

## ☁️ Appwrite Configuration

This project uses **Appwrite** as the backend.

You need to configure:

* Appwrite Project
* Database
* Posts Collection
* Storage Bucket
* Authentication

Add your Appwrite configuration inside:

```text
src/appwrite/config.js
```

Example:

```js
const client = new Client();

client
    .setEndpoint("YOUR_APPWRITE_ENDPOINT")
    .setProject("YOUR_PROJECT_ID");
```

> Do not upload private API keys or sensitive credentials to GitHub.

## 🔐 Post Authorization

MegaBlog uses the logged-in user's ID to determine the author of a post.

When a post is created, the user's ID is stored with the post:

```js
userId: userData.$id
```

When viewing a post, the application checks:

```js
post.userId === userData.$id
```

If the logged-in user is the author, the **Edit** and **Delete** buttons are displayed.

This ensures that users can manage their own posts instead of other users' posts.

## 📝 Main Functionality

### Create Post

Authenticated users can create a new blog post with:

* Title
* Slug
* Content
* Featured Image
* Author/User ID

### Read Post

Users can open individual posts using their slug.

Example:

```text
/post/my-first-blog
```

### Update Post

The author of a post can edit its content.

```text
/edit-post/:id
```

### Delete Post

The author can delete their own post and its featured image.

## 🖼️ Appwrite Storage

Featured images are uploaded to an Appwrite Storage Bucket.

The application retrieves an image preview using:

```js
appwriteService.getFilePreview(post.featuredImage)
```

## 🎨 UI

The project uses **Tailwind CSS** to create a clean and responsive interface.

The layout is designed to work across:

* 💻 Desktop
* 📱 Mobile
* 📟 Tablet

## 📦 Important Dependencies

```json
{
  "react": "^19",
  "react-router-dom": "^7",
  "@reduxjs/toolkit": "latest",
  "react-redux": "latest",
  "appwrite": "latest",
  "html-react-parser": "latest"
}
```

> Dependency versions may vary depending on the project's `package.json`.

## 🔮 Future Improvements

Some features that can be added in the future:

* 🔍 Search Posts
* 🏷️ Categories and Tags
* ❤️ Like Posts
* 💬 Comments
* 👤 User Profile
* 🌙 Dark Mode
* 📊 Author Dashboard
* 📄 Pagination
* 🔔 Notifications
* ⭐ Bookmark Posts

## 📸 Screenshots

Add your project screenshots here:

```md
![Home Page](screenshots/home.png)

![Blog Post](screenshots/post.png)

![Create Post](screenshots/create-post.png)
```

## 🤝 Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch
3. Make your changes
4. Commit your changes
5. Push the branch
6. Create a Pull Request

## 📄 License

This project is created for learning and portfolio purposes.

## 👨‍💻 Author

**Wajid Ali**

Built with ❤️ using React.js and Appwrite.

```
```
