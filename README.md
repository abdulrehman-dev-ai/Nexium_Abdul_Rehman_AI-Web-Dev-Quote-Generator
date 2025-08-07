# 🚀 Nexium AI Web Dev Internship – Assignment 1

**✅ Project:** *Quote Generator App*  
**📅 Internship:** Nexium AI-Enhanced Web Development Summer Internship 2025  
**🗂️ Assignment:** Week 1 – Frontend Foundations

---

## ✨ Overview

This is **Assignment 1** for the Nexium AI Web Development Internship. It is an **AI-Powered Quote Generator** built with:

- **Next.js 15 (App Router)**
- **TypeScript**
- **Tailwind CSS**
- **ShadCN UI**
- **Framer Motion** for animations
- **Google Gemini AI** for dynamic quote generation

Users can enter any custom topic or select from predefined categories to generate unique, AI-powered motivational quotes with smooth, animated cards.

---

## 💻 Features

✅ **AI-Powered Quote Generation** - Enter any topic and get unique quotes  
✅ **Custom Topic Input** - Generate quotes about anything you want  
✅ **Predefined Categories** - Choose from 15+ categories like inspiration, success, etc.  
✅ **Animated Quote Cards** - Smooth fade/slide animations  
✅ **Fully Responsive Layout** - Works perfectly on all devices  
✅ **Modern UI** - Polished interface with ShadCN components  
✅ **Loading States** - Visual feedback during AI generation  
✅ **Error Handling** - Graceful error messages for better UX  

---

## 🔗 Live Demo

👉 [**View on Vercel**](https://nexium-abdul-rehman-quote-generator-delta.vercel.app/)

---

## 🧭 How to Use

1️⃣ Open the app in your browser.  
2️⃣ **Option A**: Enter any custom topic in the text field (e.g., "entrepreneurship", "nature", "technology")  
3️⃣ **Option B**: Select from predefined categories like:  
- `inspiration`, `life`, `success`, `motivation`
- `wisdom`, `humor`, `love`, `mindfulness`
- `creativity`, `leadership`, `perseverance`, etc.

4️⃣ Click **Generate AI Quotes**.  
5️⃣ Watch as AI creates unique, personalized quotes with smooth animations!

---

## 📸 Screenshots



| **Input**                             | **Result**                              |
| -------------------------------------- | --------------------------------------- |
| ![Input](public/images/new-quote.png) | ![Output](public/images/new-quote-o.png) |

---

## 🔑 Setup Instructions

### 1. Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy your API key

### 2. Configure Environment Variables

1. Rename `.env.local` to `.env.local` (if not already done)
2. Replace `your_gemini_api_key_here` with your actual API key:

```bash
GEMINI_API_KEY=your_actual_api_key_here
```

⚠️ **Important**: Never commit your API key to version control!

---

## 🧪 Run Locally

Clone the repo and install dependencies:

```bash
git clone https://github.com/abdulrehman-dev-ai/Nexium_Abdul_Rehman_AI-Web-Dev
cd Nexium_Abdul_Rehman_AI-Web-Dev
npm install
```

Make sure to set up your Gemini API key in `.env.local` (see Setup Instructions above), then:

```bash
npm run dev
```

Then visit:

```
http://localhost:3000/assignment-1
```

---

## 🗂️ Project Structure

```
src/
│   middleware.ts
│
├───app
│   │   favicon.ico
│   │   globals.css
│   │   layout.tsx
│   │   page.tsx
│   │
│   └───assignment-1
│           page.tsx
│
├───components
│   └───ui
│           button.tsx
│           card.tsx
│           input.tsx
│
└───lib
        utils.ts
```

---

## ⚡ Tech Stack

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **ShadCN UI** - Modern component library
- **Framer Motion** - Smooth animations
- **Google Generative AI** - AI-powered quote generation

---

## 🙋 About the Author

**Abdul Rehman**  
Nexium AI Web Dev Intern, Summer 2025  
Email: iamabdulrehman.technophile@gmail.com 
GitHub: [abdulrehman-dev-ai](https://github.com/abdulrehman-dev-ai)

---

## 📜 License

This project is for educational use as part of the Nexium AI
