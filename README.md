# 📲 Feature Voting System (Full Stack)

This project implements a simple feature voting system where users can post new feature ideas and upvote existing ones. It includes:

-   ✅ A **Django** backend using **Django REST Framework**
-   ✅ A **SQLite** database
-   ✅ A **React Native (Expo) Android app** using **TypeScript**
-   ✅ Full support for local network testing via emulator or physical Android device

---

## 🧩 Features

-   Add new feature ideas
-   View features sorted by upvotes (highest first)
-   Upvote any feature
-   Fully functional on Android (tested via LDPlayer + Expo Go)

---

## 📦 Backend (Django)

### ✅ Setup Instructions

```bash
cd backend
python -m venv env
source env/bin/activate     # On Windows: env\Scripts\activate
pip install -r requirements.txt
```

If you don’t have `requirements.txt`, install manually:

```bash
pip install django djangorestframework django-cors-headers
```

### 🔧 Run the Server

```bash
python manage.py makemigrations
python manage.py migrate
python manage.py runserver 0.0.0.0:8000
```

> `0.0.0.0` exposes the server to your local network so your mobile device or emulator can access it.

---

## 🌐 API Endpoints

| Method | Endpoint                     | Description       |
| ------ | ---------------------------- | ----------------- |
| GET    | `/api/features/`             | List all features |
| POST   | `/api/features/`             | Add a new feature |
| POST   | `/api/features/<id>/upvote/` | Upvote a feature  |

---

## 📱 Frontend (React Native + TypeScript)

### ✅ Setup Instructions

```bash
cd mobile
npm install
```

### 🔧 Set API Base URL

Edit `mobile/constants.ts`:

```ts
export const API_BASE_URL = "http://<YOUR_LOCAL_IP>:8000/api";
```

> Replace `<YOUR_LOCAL_IP>` with the output from `ipconfig` (e.g., `172.20.1.21`). Avoid using `localhost`.

---

### ▶️ Run the App with Expo

```bash
npx expo start --tunnel
```

---

### 📲 In LDPlayer (or Android Device):

1. Open the built-in browser
2. Visit https://expo.dev/client
3. Download & install the **Expo Go** APK
4. Launch Expo Go
5. Tap **"Enter URL manually"**
6. Paste the tunnel URL shown in your terminal (`exp://...`)

You should now see:

-   Input to submit a new feature
-   A list of features fetched from Django
-   "Upvote" buttons that increase the vote count via API

---

## 🧱 File Structure

```
project-root/
├── backend/                     # Django project
│   ├── featurevote/
│   ├── api/
│   ├── manage.py
│   └── ...
│
├── mobile/                      # React Native frontend (Expo)
│   ├── App.tsx
│   ├── constants.ts
│   ├── components/
│   │   └── FeatureItem.tsx
│   ├── screens/
│   │   └── HomeScreen.tsx
│
├── prompts.txt                  # AI interaction log
└── README.md                    # This file
```

---

## ✅ Submission Checklist

-   ✅ `prompts.txt` — All AI prompts used
-   ✅ `README.md` — Fully completed
-   ✅ `backend/` — Working Django REST API
-   ✅ `mobile/` — Working React Native TypeScript app

---

## 🧠 Tech Stack

-   Django + Django REST Framework
-   SQLite
-   React Native (Expo)
-   TypeScript
-   Axios
-   Expo Go + LDPlayer (for Android testing)
