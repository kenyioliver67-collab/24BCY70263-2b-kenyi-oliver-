# Experiment 2B – Product Filter Web Application

**Student Name:** Kenyi Oliver James
**UID:** 24BCY70263
**Course/Subject:** Web Development Lab
**Experiment Title:** Building a Product Filter using Next.js

---

## 📌 Objective

The objective of this experiment is to create a dynamic product filtering web application using **Next.js** and **React state management**. The application allows users to filter products by category using a dropdown menu.

---

## 🛠 Technologies Used

* **Next.js** – React framework for building modern web applications
* **React** – For building interactive user interfaces
* **TypeScript** – For type safety and better development experience
* **Tailwind CSS** – For styling the user interface
* **pnpm** – Package manager used to install dependencies
* **Git & GitHub** – Version control and project hosting

---

## ⚙️ Setup Instructions

### 1️⃣ Install Node.js

Download and install Node.js from the official website. This also installs npm.

### 2️⃣ Install pnpm

```bash
npm install -g pnpm
```

### 3️⃣ Create Project Folder

```bash
mkdir 24bcy70263-2b-kenyi-oliver-james
cd 24bcy70263-2b-kenyi-oliver-james
```

### 4️⃣ Create Next.js App

```bash
pnpm create next-app@latest .
```

Select:

* TypeScript → Yes
* ESLint → Yes
* Tailwind CSS → Yes
* App Router → Yes

### 5️⃣ Run the Development Server

```bash
pnpm dev
```

Open https://vercel.com/kenyioliver67-collabs-projects/24-bcy-70263-2b-kenyi-oliver/ALDXzRsqHxXQv6GGdUTSuM9uf5Nx in the browser.

---

## 🧩 Features Implemented

✔ Display a list of products
✔ Filter products by category (Electronics / Clothing)
✔ Responsive product card layout
✔ Dynamic UI updates using React state
✔ Styled using Tailwind CSS

---

## 🧠 How the Filter Works

* A React state variable stores the selected category
* When the dropdown value changes, the state updates
* Products are filtered using the `.filter()` method
* Only matching products are displayed on the screen

---

## 📂 Project Structure

```
app/
 ├── page.tsx   # Main product filter logic
public/         # Static assets
styles/         # Global styles
```

---

## 🚀 Output

The application displays product cards with name, price, and category. Users can select a category from the dropdown to instantly filter the visible products.

---

## 📚 Learning Outcomes

Through this experiment, I learned:

* How to set up a Next.js project
* How to manage state in React
* How to implement filtering logic
* How to style applications using Tailwind CSS
* How to use Git and GitHub for version control

---

## 🔗 GitHub Repository

The project source code is hosted on GitHub and submitted as part of this experiment.

---

**Submitted by:**
Kenyi Oliver James
UID: 24BCY70263
