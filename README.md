# 🖥️ Portfolio Website

A **macOS-inspired personal portfolio** built with **React, Tailwind CSS, Zustand, and GSAP**, designed to simulate a real desktop experience inside the browser.
Users can interact with windows, folders, Finder, Dock, and files just like an operating system.

🌐 **Live Demo:**
👉 [https://portfolio-self-three-95.vercel.app/](https://portfolio-self-three-95.vercel.app/)

---

## ✨ Features

* 🪟 **Window-based UI** (Finder, Resume, Images, Text files, Contact, etc.)
* 📁 **Finder-like file explorer** with folders & files
* 🧠 **Global state management** using Zustand
* 🎯 **Dock with app launching behavior**
* 🖱️ **Draggable desktop icons** (GSAP Draggable)
* 🎨 **Tailwind CSS styling** with macOS aesthetics
* 📄 **File-type based window opening** (PDF, images, text, links)
* 🖥️ **Desktop-first design** (mobile view intentionally restricted)

---

## 🛠️ Tech Stack

| Technology       | Purpose             |
| ---------------- | ------------------- |
| **React**        | Component-based UI  |
| **Vite**         | Fast dev & build    |
| **Tailwind CSS** | Styling             |
| **Zustand**      | Global state        |
| **GSAP**         | Drag & animations   |
| **Lucide Icons** | Icons               |
| **clsx**         | Conditional classes |

---

## 📂 Project Structure

```
src/
│
├── components/        # Dock, Window controls, UI elements
├── windows/           # Finder, Contact, Resume, Image, Text apps
├── store/             # Zustand stores (window, location)
├── constants/         # File system structure
├── HOC/               # windowWrapper logic
├── assets/images/     # Icons, wallpaper, previews
├── index.css          # Tailwind + custom macOS styles
└── main.jsx           # App entry
```

---

## 🧠 Core Concepts

### Window System

* Centralized window logic using `windowWrapper`
* Handles open, close, minimize, maximize, z-index

### Finder & File System

* Folder/file structure defined in `constants`
* Grid-based layout for clean rows & columns
* Double-click behavior like macOS

### State Management

* **Zustand** manages:

  * Open windows
  * Active window
  * File data
  * Active folder

### Desktop Icons

* Draggable using **GSAP Draggable**
* Bound to screen container
* Open Finder on click

---

## 🚀 Run Locally

```bash
git clone https://github.com/your-username/portfolio.git
cd portfolio
npm install
npm run dev
```

---

## 📌 Future Enhancements

* Keyboard shortcuts
* Window snapping
* Persistent desktop icon positions
* Dark mode
* Context menu support

---

## 🙌 Author

**Prashant Bisht**
Frontend Developer | Engineering Student
📍 Nainital, Uttarakhand, India

🌐 Live Portfolio:
[https://portfolio-self-three-95.vercel.app/](https://portfolio-self-three-95.vercel.app/)

---

## ⭐ Support

If you like this project, please ⭐ star the repository and share it!

---

### ⚠️ Note

This project is designed for **desktop browsers** to fully experience the macOS-style UI.
